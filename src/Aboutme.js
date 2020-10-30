import React from "react";
import Base from "./core/Base";
import Footer from "./core/Footer";
import "./aboutme.css";

const Aboutme = () => {
  const About = () => (
    <div>
      <h1>I'm Kedar Mayekar.</h1>
      <div className="row">
        <div className="col-md-4 start">
          <span>Profile</span>
        </div>
        <div className="col-md-6 explain">
          <p>
            I'm a self taught graphic designer who has almost 2 years of work
            experience in this field. I am specialised in designing logos,
            buisness cards, posters, advertisement banners, social media posts,
            animations, etc.
          </p>
        </div>
        <div className="col-md-4 start">
          <span>Tools</span>
        </div>
        <div className="col-md-6 explain">
          <p>
            There is no one tool for all. Different tasks require different tools. I am skillful in 
            Adobe Photoshop, Adobe Illustrator and After Effects.
          </p>
        </div>
        <div className="col-md-4 start">
          <span>Contact</span>
        </div>
        <div className="col-md-6 explain">
          <p>
            Email- logodesigner099@gmail.com
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <Base route={70} />
      <div className="aboutme">{About()}</div>
      <Footer />
    </div>
  );
};

export default Aboutme;
