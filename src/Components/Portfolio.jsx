/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/laptop.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "WEB-ATTENDANCE",
    description:
      "This project includes Face recognition technology for taking attendance through the website. The website includes 3 interfaces: Register interface, Attendance interface and a sheet interface. The website is built using flask web framework using python. ",
    url: "https://github.com/ankitkc1/Attendace-using-face-recognition-through-website.git",
  },
  {
    title: "Spotify Clone",
    description: "Interactive Frontend design for listening music with control in playlist",
    url: "https://github.com/ankitkc1/Spotify-Clone",
  },
  {
    title: "Machine Learning Approach to Mental Health",
    description:
      "we identified five machine learning techniques and assessed their accuracy in identifying mental health issues using several accuracy criteria.",
    url: "https://medium.com/@ankitkc1/machine-learning-approach-to-mental-health-ee86883227a",
  },
  {
    title: "Braeching Two Factor Authentication",
    description:
      "Turning on two-factor authentication, or 2FA, is among the most frequent pieces of advice you will hear from cyber security team. ",
    url: "https://medium.com/@ankitkc1/breaching-of-two-factor-authentication-9201452f2b1e",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
