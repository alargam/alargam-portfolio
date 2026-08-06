
import React from 'react'
import Image from 'next/image'

export default function HeroArea() {
  return (
    <>
      <section id="home" className="main-hero-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">

              <div className="hero-content hero-intro wow fadeInUp text-center delay-0-2s">
                <h1 className="hero-title">AI Systems Engineer</h1>
                <p className="hero-subtitle">Backend • AI • Automation • Robotics</p>
              </div>

            </div>
          </div>
          <div className="row align-items-center hero-detail-row">
            <div className="col-lg-6 order-1">
              <div className="hero-content hero-details wow fadeInUp delay-0-4s">
                <p>Building intelligent AI systems, scalable backend applications, and automation solutions for real-world problems.</p>
                <div className="hero-btns">
                  <a className="theme-btn" href="/projects">View Projects</a>
                  <a className="theme-btn theme-btn-two" href="/cv/Alargam_Osman_Resume.pdf" download>Download CV</a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 order-2">
              <div className="hero-portrait wow fadeInUp delay-0-2s">
                <Image
                  src="/assets/images/about/my_self.png"
                  alt="Professional portrait"
                  width={1024}
                  height={1536}
                  priority
                  sizes="(max-width: 991px) 80vw, 380px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
