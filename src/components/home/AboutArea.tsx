
import React from 'react'
import Count from '../common/Count'

const counter_data = [
  {
    id: 1,
    title: 'Years Of Experience',
    count: 3,
    cls: "",
  },
  {
    id: 2,
    title: 'Completed Projects',
    count: 20,
    cls: "plus",
  },
  {
    id: 3,
    title: 'Client Satisfaction',
    count: 90,
    cls: "percent",
  },
]

export default function AboutArea() {
  return (
    <>
      <section id="about" className="about-area">
        <div className="container">
          <div className="row">

            <div className="col-lg-3 col-sm-3">
              <h2 className="about-pre-title">About Me</h2>
            </div>
            <div className="col-lg-9 col-sm-9">
              <div className="about-content-part wow fadeInUp delay-0-2s">
                <p>I’m Alargam Osman, an AI Systems Engineer focused on building end-to-end intelligent software. My work sits at the intersection of AI, backend engineering, automation, computer vision, and robotics — from FastAPI services and LLM-powered applications to automated workflows and autonomous systems.</p>
                <p>I focus on turning technical ideas into working systems with clear architecture, real integrations, and deployable software.</p>
              </div>
              <div className="hero-counter-area d-flex justify-content-between wow fadeInUp delay-0-4s">
                {counter_data.map((item, i) => (
                  <div key={i} className="counter-item counter-text-wrap">
                    <span className={`count-text ${item.cls}`}>
                      <Count number={item.count} />
                    </span>
                    <span className="counter-title">{item.title}</span>
                  </div>
                ))} 
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
