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
import image from "../images/developer2.jpg";

const imageAltText = "portfolio section background";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Sport On",
    description:
      "It is a web platform where sports person around the world can gather together to organize events, make a team or take part in competitions.",
    url: "https://sportsonweb.netlify.app/",
  },
  {
    title: "Unimart",
    description:
      "Unimart is made for students where they can buy, sell or exchange their used products within their campus.",
    url: "https://unimart.rachitkhurana.repl.co/",
  },
  {
    title: "My Resume Site",
    description:
      "Created using ReactJS and some other fronend tech stacks to showcase by experience, projects and education.",
    url: "https://atulsingh09.netlify.app/",
  },
  {
    title: "Health.Aura",
    description:
      "Health Aura is a web platform which can be used to store your health records, call for the doctors appointment, credit card service.",
    url: "https://healthaura.netlify.app/",
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
