
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
              </div>

            </div>
          </div>
          <div className="row align-items-center hero-detail-row">
            <div className="col-lg-6 order-1">
              <div className="hero-content hero-details wow fadeInUp delay-0-4s">
                <p style={{ color: '#000', marginBottom: '18px' }}>I design and build AI-powered software systems spanning backend engineering, intelligent automation, computer vision, and robotics.</p>
                <p style={{ fontSize: 'clamp(0.9rem, 1vw, 1rem)', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: '-6px', marginBottom: '28px', color: '#000' }}>
                  AI Engineering · Backend Systems · Intelligent Automation · Robotics
                </p>
                <div className="hero-btns">
                  <a className="theme-btn" href="/projects">View Projects</a>
                  <a className="theme-btn theme-btn-two" href="/contact">Contact Me</a>
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
