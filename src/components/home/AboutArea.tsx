
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
                <p>I am Alargam Osman, an AI Systems Engineer focused on building intelligent systems, scalable backend platforms, robotics solutions, and automation workflows.
                I develop AI applications that combine software engineering, artificial intelligence, computer vision, and real-world systems integration to transform complex ideas into reliable, practical solutions.
                My work spans AI engineering, backend development, robotics, and automation, where I build end-to-end systems that solve real-world problems.</p>
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
