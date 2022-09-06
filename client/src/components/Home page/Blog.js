import React from "react";
import "./flipcard.scss";
import "./flipcard.css";
import image from "../image/review.png";

export default function Blog() {
  return (
    <section className="blogs" id="blogs">
      <h1 className="heading">
        Tips and <span>tricks</span>
      </h1>

      <div className="box-container_flip">
        <div class="flip-card">
          <div class="flip-card-front">
            <div class="inner">
              <img src={image} class="icon" />
              <div className="content">
                <div className="icon_card">
                  <a href="#">
                    {" "}
                    <i className="fas fa-calendar"></i> 1 May 2022{" "}
                  </a>
                  <a href="#">
                    {" "}
                    <i className="fas fa-user"></i> by Emilia Enache{" "}
                  </a>
                </div>
                <h3>
                  Has something been bothering you? Let it all out…on paper
                </h3>
                {/* <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Provident, eius.
                </p> */}
              </div>
            </div>
          </div>
          <div class="flip-card-back">
            <div class="inner">
              {/* <h3>HEALTH</h3> */}
              <p>
                Writing about upsetting experiences can reduce symptoms of
                depression :)
              </p>
              {/* <a href="#" className="btn">
                learn more <span className="fas fa-chevron-right"></span>
              </a> */}
            </div>
          </div>
        </div>

        <div class="flip-card">
          <div class="flip-card-front">
            <div class="inner">
              <img src={image} class="icon" />
              <div className="content">
                <div className="icon_card">
                  <a href="#">
                    {" "}
                    <i className="fas fa-calendar"></i> 15 June 2022{" "}
                  </a>
                  <a href="#">
                    {" "}
                    <i className="fas fa-user"></i> by Admin{" "}
                  </a>
                </div>
                <h3>Work some omega-3 fatty acids into your diet</h3>
                {/* <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Provident, eius.
                </p> */}
              </div>
            </div>
          </div>
          <div class="flip-card-back">
            <div class="inner">
              {/* <h3>HEALTH</h3> */}
              <p>
                They are linked to decreased rates of depression and
                schizophrenia among their many benefits. Fish oil supplements
                work, but eating your omega-3s in foods like wild salmon,
                flaxseeds or walnuts also helps build healthy gut bacteria.
              </p>
              {/* <a href="#" className="btn">
                learn more <span className="fas fa-chevron-right"></span>
              </a> */}
            </div>
          </div>
        </div>

        <div class="flip-card">
          <div class="flip-card-front">
            <div class="inner">
              <img src={image} class="icon" />
              <div className="content">
                <div className="icon_card">
                  <a href="#">
                    {" "}
                    <i className="fas fa-calendar"></i> 29 August 2021{" "}
                  </a>
                  <a href="#">
                    {" "}
                    <i className="fas fa-user"></i> by Admin{" "}
                  </a>
                </div>
                <h3>Practice forgiveness</h3>
                {/* <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Provident, eius.
                </p> */}
              </div>
            </div>
          </div>
          <div class="flip-card-back">
            <div class="inner">
              {/* <h3>HEALTH</h3> */}
              <p>
                Even if it's just forgiving that person who cut you off during
                your commute. People who forgive have better mental health and
                report being more satisfied with their lives.
              </p>
              {/* <a href="#" className="btn">
                learn more <span className="fas fa-chevron-right"></span>
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
