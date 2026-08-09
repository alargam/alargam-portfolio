
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
                <p style={{ color: '#000' }}>I build end-to-end engineering systems across AI, backend software, automation, and robotics — from architecture and implementation to integration and deployment.</p>
              </div>
            </div>
          </div>
          <div className="row">

            <div className="col-lg-8 col-md-7">
              <div className="service-item wow fadeInUp delay-0-2s">
                <i className="ri-arrow-right-up-line"></i>
                <h5>01</h5>
                <h4>AI Systems</h4>
                <p>Building LLM-powered applications, machine learning systems, and computer vision solutions with a focus on practical integration and reliable outputs.</p>
              </div>
            </div>


            <div className="col-lg-4 col-md-5">
              <div className="service-item wow fadeInUp delay-0-4s">
                <i className="ri-arrow-right-up-line"></i>
                <h5>02</h5>
                <h4>Backend Engineering</h4>
                <p>Building APIs, authentication systems, databases, and backend services that provide the software foundation for AI-powered products.</p>
              </div>
            </div>


            <div className="col-lg-4 col-md-5">
              <div className="service-item wow fadeInUp delay-0-6s">
                <i className="ri-arrow-right-up-line"></i>
                <h5>03</h5>
                <h4>Intelligent Automation</h4>
                <p>Designing automated workflows that connect APIs, AI services, business tools, and content systems to replace repetitive manual processes.</p>
              </div>
            </div>


            <div className="col-lg-8 col-md-7">
              <div className="service-item wow fadeInUp delay-0-8s">
                <i className="ri-arrow-right-up-line"></i>
                <h5>04</h5>
                <h4>Robotics & Computer Vision</h4>
                <p>Developing perception, navigation, simulation, and control software for autonomous robotic systems using computer vision and robotics frameworks.</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
