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
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "CO-ORDINATOR",
    description:
      "Organized a teachathon/hackathon event as a coordinator, working closely with team members.",
    url: "https://www.linkedin.com/posts/activity-7056587850082844672-vD0G?utm_source=share&utm_medium=member_desktop",
  },
  {
    title: "Teachathon/Hackathon",
    description:
      " Placed second in Teachathon/Hackathon event, demonstrating strong skills in teamwork and problem-solving",
    url: "https://www.linkedin.com/posts/activity-7056587850082844672-vD0G?utm_source=share&utm_medium=member_desktop",
  },
  {
    title: "My Resume Site",
    description:
      "Created from Microsoft's resume workshop and deployed to GitHub pages. Includes my experience and design abilities.",
    url: "https://drive.google.com/file/d/18C8VVhDBbMrsIjo2PR5qRRQkN_BkNR4m/view?usp=sharing",
  },
  {
    title: "TECHNICAL",
    description:
      "Successful Completion of Virtual Internship Program by JP Morgan Chase&Co|",
    url: "https://drive.google.com/file/d/1P9pqz1V1VA_9Xyu3_heCgbiu0scJEl8P/view?usp=sharing",
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
