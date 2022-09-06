import React from 'react'
import { ReactComponent as Logo } from '../image/about-img-1.svg';

export default function LandingAbout() {
  return (
    <section className="about" id="about">
    <h1 className="heading"><span>What is </span>Neurofeedback?</h1>

    <div className="row">
      <div className="image">
          <Logo/>
      </div>

      <div className="content">
        <h3></h3>
        <p>
          Neurofeedback is - similar to biofeedback - a therapeutic approach
          based on capturing physical body functions and reporting them back
          in real time using suitable signals. Making people aware of the
          related body functions can be used for behavioural therapy and thus
          help to reduce the symptoms of illnesses. In conventional
          biofeedback, body functions such as the pulse or muscle tension are
          recorded by sensors and can be experienced in real time through
          acoustic signals or visual displays. For example, a patient can be
          informed by a sound that indicates incorrect postures that lead to
          muscle tenseness. Over time, the patient is trained to maintain body
          functions at a certain level of activity or to be able to change
          them in a targeted manner. In addition to the treatment of muscular
          tenseness, the typical areas of application in which biofeedback is
          used are tachycardia, high blood pressure or incontinence.
        </p>
        <p>
          Neurofeedback training does not train muscular or organic body
          functions, but the self-regulating ability of the brain. For this
          purpose, EEG signals are derived at the surface of the head. On the
          basis of a previously detailed medical history of the patient's
          symptoms, parameters of the EEG signal, such as certain frequency
          ranges of brain activity, are selected to control the feedback in
          the form of an animation on a screen. For example, an animation
          moves faster, the image becomes clearer or a melody becomes audible.
          Contemporary research shows that certain diseases such as ADHD,
          schizophrenia, obsessive-compulsive disorder and others are
          associated with changes in the deducible activity patterns of the
          brain. Both spontaneous and evoked electrical potentials (ERP),
          which represent the brain's response to a specific stimulus, show
          deviations from the norm typical of the indications concerned.
        </p>
      </div>
    </div>
  </section>
  )
}