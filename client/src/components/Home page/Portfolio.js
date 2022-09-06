import React from "react";
import Services from "./Services";
export default function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <h1 className="heading">
        Our <span>team</span>
      </h1>
      <div className="box-container">
        <div className="box">
          <img src={require("../image/doctor-barbat.PNG")} alt="" />
          <h2>ujhjdhfdf</h2>
          <div className="content">
            <h3>Alexandru Radu</h3>
            <h3>
              Specialization:
              <ul>
                <li>ADD/ADHD</li>
                <li>Trauma and stroke</li>
                <li>Autism</li>
                <li>Anxiety and panic attacks</li>
                <li>Bronchial asthma</li>
              </ul>
            </h3>
          </div>
        </div>

        <div className="box">
          <img src={require("../image/doctor1.PNG")} alt="" />
          <div className="content">
            <h3>Emma Cristescu</h3>
            <h3>
              Specialization:
              <ul>
                <li>Addictions and substance abuse</li>
                <li>Depression</li>
                <li>Chronic pain</li>
                <li>Epilepsy</li>
                <li>Dizziness</li>
              </ul>
            </h3>
          </div>
        </div>

        <div className="box">
          <img src={require("../image/doctor2-bun.PNG")} alt="" />
          <div className="content">
            <h3>Frida Addams</h3>
            <h3>
              Specialization:
              <ul>
                <li>Insomnia, sleep disorders</li>
                <li>Migraine, headache, cluster headache</li>
                <li>Nervous, verbal or motor tics</li>
                <li>Learning Disorders</li>
                <li>Mood disorders, bipolar disorder</li>
              </ul>
            </h3>
          </div>
        </div>
      </div>
      <Services />
    </section>
  );
}
