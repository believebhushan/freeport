import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Kenish Sindhi </span>
            from <span className="purple"> Gujrat, India.</span>
            <br />I am a Software Engineer at Cogoport
            <br />
            <br />
            I am deploying scalable and complex features end to end and enjoying like fun
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket (Batting)
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading and Implementing High Level Design
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Kenish</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
