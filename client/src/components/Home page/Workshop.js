import React from 'react'

export default function Workshop() {
  return (
    <section className="doctors" id="doctors">

    <h1 className="heading"> our <span>workshops</span> </h1>

    <div className="box-container">
          <div className="box">
            <img src={require('../image/speaker2.jpg')}alt=""/>
            <h3>Maria Constantinescu</h3>
            <span>Better Brain and Body Functioning</span>
            <div className="share">
              {/* <h1></h1> */}
              <h1>Date: 13 May 2022</h1>
              <h1>Hour: 08 AM - 11 AM</h1>
              <h1>Price: Free</h1>
            </div>
        </div>

        <div className="box">
            <img src={require('../image/speaker1.jpeg')} alt=""/>
            <h3>Teodor Mihaila</h3>
            <span>Managing Minds at Work</span>
            <div className="share">
              <h1>Date: 06 April 2022</h1>
              <h1>Hour: 08 AM - 11 AM</h1>
              <h1>Price: Free</h1>
            </div>
        </div>
    </div>

    </section>
  )
}
