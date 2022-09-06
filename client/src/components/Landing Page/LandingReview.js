
import React from 'react'

export default function LandingReview() {
  return (
<section className="review" id="review">
      <h1 className="heading">client's <span>review</span></h1>

      <div className="box-container">
        <div className="box">
            <img src={require('../image/pic-1.png')} alt="" />
          <h3>john deo</h3>
          <div className="stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>
          <p className="text">
            Neurofeedback has helped me to have balance emotionally and to be a
            better problem-solver. My depression has decreased ten fold.
            Neurofeedback has really helped me to be able to take on new tasks.
          </p>
        </div>

        <div className="box">
        <img src={require('../image/pic-2.png')} alt="" />
          <h3>john deo</h3>
          <div className="stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>
          <p className="text">
            My son has struggled with anxiety for years affecting his ability to
            manage unfamiliar situations and social interactions. He has been
            doing Neurofeedback for over a year. We noticed a difference in less
            than six months. Teachers and family members commented on a change
            in him that was all positive. He also became more outspoken at home
            expressing his wants and needs more successfully.
          </p>
        </div>

        <div className="box">
        <img src={require('../image/pic-3.png')} alt="" />
          <h3>john deo</h3>
          <div className="stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star-half-alt"></i>
          </div>
          <p className="text">
            To anyone suffering from physical pain and or anxiety: the
            neurofeedback process has been immensely helpful to me. I used to
            worry all the time about anything and everything; this is no longer
            the case. I am calm and therefore, suffer from less chronic pain
            than I have in the 9.5 years I have been disabled. I would encourage
            you to go weekly (at least) for 2 months, since it did take a while
            to reap the benefits I have seen."
          </p>
        </div>
      </div>
    </section>
    )
}