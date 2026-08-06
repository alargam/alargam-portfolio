
import React from 'react'

export default function ServiceArea() {
  return (
    <>
      <section id="services" className="services-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12">
              <div className="section-title section-black-title wow fadeInUp delay-0-2s">
                <h2 style={{ color: '#000' }}>What I Build</h2>
                <p style={{ color: '#000' }}>I help transform ideas into production-ready products by designing and building complete AI, backend, automation, and robotics solutions from concept to deployment.</p>
              </div>
            </div>
          </div>
          <div className="row">

            <div className="col-lg-8 col-md-7">
              <div className="service-item wow fadeInUp delay-0-2s">
                <i className="ri-arrow-right-up-line"></i>
                <h5>01</h5>
                <h4>AI Systems</h4>
                <p>Building intelligent AI applications that turn data into practical solutions using modern AI technologies, from intelligent assistants to computer vision systems.</p>
              </div>
            </div>


            <div className="col-lg-4 col-md-5">
              <div className="service-item wow fadeInUp delay-0-4s">
                <i className="ri-arrow-right-up-line"></i>
                <h5>02</h5>
                <h4>Backend Engineering</h4>
                <p>Designing secure and scalable backend systems, APIs, and databases that power reliable applications and support long-term growth.</p>
              </div>
            </div>


            <div className="col-lg-4 col-md-5">
              <div className="service-item wow fadeInUp delay-0-6s">
                <i className="ri-arrow-right-up-line"></i>
                <h5>03</h5>
                <h4>Intelligent Automation</h4>
                <p>Creating end-to-end automation workflows that connect business systems, reduce manual work, and improve operational efficiency with AI.</p>
              </div>
            </div>


            <div className="col-lg-8 col-md-7">
              <div className="service-item wow fadeInUp delay-0-8s">
                <i className="ri-arrow-right-up-line"></i>
                <h5>04</h5>
                <h4>Robotics & Computer Vision</h4>
                <p>Developing autonomous robotics software with perception, simulation, and computer vision to solve real-world engineering challenges.</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
