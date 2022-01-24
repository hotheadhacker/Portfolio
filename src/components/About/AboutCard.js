import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Salman Qureshi </span>
            from <span className="purple"> Kashmir - J &amp; K.</span>
            <br />I Have done my Bachelors in <span className="purple"> Computer Science Engineering</span> &amp;  <span className="purple">M.Tech (IT) - Machine Learning as Majors.</span>
            <br />
              Currently I'm working as  <span className="purple">Remote Full Stack Developer at acmosoft</span>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writting Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "There is a way, there always is"{" "}
          </p>
          <footer className="blockquote-footer">Salman</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
