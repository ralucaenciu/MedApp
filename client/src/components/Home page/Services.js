import React, { useState } from "react";
import Modal from "./Modal";
import Modal1 from "./Modal1";

export default function Services() {
  const [modalOpen, setModalOpen] = useState(true);

  return (
    <section className="services" id="services">
      <h1 className="heading">
        our <span>services</span>
      </h1>

      <div className="box-container">
        <div className="box">
          <i className="fas fa-user-md"></i>
          <h3>ADD/ADHD</h3>
          <p>
            ADHD is the diagnosis that includes the group of symptoms - lack of
            attention, hyperactivity and impulsivity, and patients have specific
            differences in the brain, in the brain areas that deal with impulse
            control and concentration of attention.
          </p>

          {modalOpen && <Modal setOpenModal={setModalOpen} />}
        </div>

        <div className="box">
          <i className="fas fa-ambulance"></i>
          <h3>Trauma and stroke</h3>
          <p>
            Traditionally, there have been few formal rehabilitation options for
            people who suffered a stroke or traumatic brain injury (TBI) more
            than two years ago.
          </p>
          {modalOpen && <Modal1 setOpenModal={setModalOpen} />}
        </div>

        <div className="box">
          <i className="fas fa-user-md"></i>
          <h3>Autism</h3>
          <p>
            The brains of people with ASD have areas with excessively high
            connectivity and areas with poor connectivity.
          </p>
          {modalOpen && <Modal setOpenModal={setModalOpen} />}
        </div>

        <div className="box">
          <i className="fas fa-pills"></i>
          <h3>Anxiety and panic attacks</h3>
          <p>
            Anxiety occurs in many forms, from phobias to generalized anxiety
            disorder (GAD) and PTSD.
          </p>
          {modalOpen && <Modal setOpenModal={setModalOpen} />}
        </div>

        <div className="box">
          <i className="fas fa-procedures"></i>
          <h3>Bronchial asthma</h3>
          <p>
            Asthma is a chronic inflammatory disease that affects the airways
            and is manifested by bronchial hyperactivity leading to recurrent
            episodes of wheezing, dyspnoea, chest tightness and coughing,
            especially at night and early in the morning.
          </p>
          {modalOpen && <Modal setOpenModal={setModalOpen} />}
        </div>

        <div className="box">
          <i className="fas fa-heartbeat"></i>
          <h3>Addictions and substance abuse</h3>
          <p>
            How can neurofeedback help addiction? Addiction is physiological.
            Many people believe that addiction is due to a lack of
            self-discipline, but addiction is a physiological condition and is
            extremely difficult to change.
          </p>
          {modalOpen && <Modal setOpenModal={setModalOpen} />}
        </div>
        <div className="box">
          <i className="fas fa-heartbeat"></i>
          <h3>Depression</h3>
          <p>
            How can neurofeedback help depression? Neurofeedback can help
            restore brain patterns and eliminate depression by teaching the
            brain to restructure.
          </p>
          {modalOpen && <Modal setOpenModal={setModalOpen} />}
        </div>
        <div className="box">
          <i className="fas fa-heartbeat"></i>
          <h3>Chronic pain</h3>
          <p>
            Pain that lasts 3 months or more is considered chronic. Pain is a
            way for the human body to react when something is wrong.
          </p>
          {modalOpen && <Modal setOpenModal={setModalOpen} />}
        </div>
        <div className="box">
          <i className="fas fa-heartbeat"></i>
          <h3>Epilepsy</h3>
          <p>
            30 years of research into the use of neurofeedback for epilepsy is
            evidence that neurofeedback can reduce or eliminate epileptiform
            behaviors.
          </p>
          {modalOpen && <Modal setOpenModal={setModalOpen} />}
        </div>
        <div className="box">
          <i className="fas fa-heartbeat"></i>
          <h3>Dizziness</h3>
          <p>
            Vertigo is a false sensation of movement associated with balance or
            gait disturbances, often described as a "dizziness" or "sensation of
            rotation" of the subject or environment, or as a feeling that "the
            ground is slipping from under your feet."
          </p>
          {modalOpen && <Modal setOpenModal={setModalOpen} />}
        </div>
        <div className="box">
          <i className="fas fa-heartbeat"></i>
          <h3>Insomnia, sleep disorders</h3>
          <p>
            Insomnia can be a transient state of stress, anxiety, or illness,
            and for some people, it is a condition that affects their daily
            lives with fatigue, poor health, and lack of concentration. It can
            have a big impact on professional life, relationships and social
            activities.
          </p>
          {modalOpen && <Modal setOpenModal={setModalOpen} />}
        </div>
        <div className="box">
          <i className="fas fa-heartbeat"></i>
          <h3>Migraine, headache, cluster headache</h3>
          <p>
            How can neurofeedback help? Neurofeedback training can be very
            effective in reducing the intensity and frequency of long-term
            migraines, providing help to people suffering from migraines.
          </p>
          {modalOpen && <Modal setOpenModal={setModalOpen} />}
        </div>
        <div className="box">
          <i className="fas fa-heartbeat"></i>
          <h3>Nervous, verbal or motor tics</h3>
          <p>
            Motor tics are involuntary and rapid movements that occur especially
            against stress or when the person is tired or bored. The most common
            are blinking, shaking the leg, shrugging.
          </p>
          {modalOpen && <Modal setOpenModal={setModalOpen} />}
        </div>
        <div className="box">
          <i className="fas fa-heartbeat"></i>
          <h3>Learning Disorders</h3>
          <p>
            Research shows that several areas of the brain work together in the
            learning process. These separate parts of the brain communicate with
            each other at extremely fast speeds. If the communication time is
            even slightly stopped, there may be deficiencies in the ability to
            learn.
          </p>
          {modalOpen && <Modal setOpenModal={setModalOpen} />}
        </div>
        <div className="box">
          <i className="fas fa-heartbeat"></i>
          <h3>Mood disorders, bipolar disorder</h3>
          <p>
            How can neurofeedback help bipolar disorder? Neurofeedback brain
            training teaches the brain to create healthier patterns and maintain
            a more consistent state. This helps the person to learn
            self-regulation, allowing him to get a better mood stabilization.
          </p>
          {modalOpen && <Modal setOpenModal={setModalOpen} />}
        </div>
      </div>
    </section>
  );
}
