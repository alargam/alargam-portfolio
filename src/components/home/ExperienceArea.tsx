import React from 'react'

const experiences = [
  {
    company: 'Spaceborn',
    role: 'Software Engineer',
    date: '2026',
    description: 'Contributed to autonomous robotics software involving ROS 2, simulation, perception, and AI-enabled robotic workflows.',
    points: [
      'Developed and tested ROS 2-based robotics workflows in simulation environments before physical deployment.',
      'Worked on software integration between perception, decision-making, and robotic system components.',
      'Tested and debugged autonomous behaviors across simulated operating scenarios.',
      'Integrated AI-based perception components into robotic software pipelines.',
      'Used Git-based development workflows, modular software organization, and technical documentation.',
    ],
  },
  {
    company: 'URCA',
    role: 'AI Engineering Intern',
    date: 'May 2026 – Jul 2026',
    description: 'Built and evaluated LLM-based application workflows involving prompting, agents, tool usage, RAG concepts, and API integration.',
    points: [
      'Built experiments for LLM-powered applications using structured prompting and multi-step workflows.',
      'Explored agent architectures involving tool usage, task planning, and multi-step execution.',
      'Worked with RAG, context management, and techniques for improving response quality.',
      'Studied integration patterns for connecting LLMs with APIs and application backends.',
      'Evaluated alternative approaches for improving AI system reliability and documented findings.',
    ],
  },
  {
    company: 'Outlier',
    role: 'AI Model Evaluator',
    date: 'Sep 2024 – Mar 2025',
    description: 'Evaluated AI-generated code and reasoning outputs for correctness, instruction following, and technical quality.',
    points: [
      'Reviewed Python and C++ generated solutions, analyzing correctness, code quality, and algorithmic reasoning.',
      'Evaluated LLM responses for instruction following, technical accuracy, and consistency.',
      'Provided structured feedback to improve AI-generated outputs and model performance.',
      'Analyzed common LLM limitations including hallucinations, reasoning errors, and edge-case failures.',
      'Developed practical experience understanding how AI models behave in real engineering scenarios.',
    ],
  },
  {
    company: 'Cellula Technologies',
    role: 'Machine Learning Engineer Intern',
    date: 'Feb 2025 – Mar 2025',
    description: 'Worked on machine learning workflows involving data preparation, experimentation, and model evaluation.',
    points: [
      'Prepared and cleaned datasets for machine learning experiments.',
      'Applied preprocessing techniques to improve data quality before model training.',
      'Worked with ML libraries to train and evaluate models during experimentation phases.',
      'Compared model performance using evaluation metrics and analysis.',
      'Gained practical experience with the complete ML pipeline from raw data preparation to model evaluation.',
    ],
  },
  {
    company: 'AMIT Learning',
    role: 'Machine Learning Intern',
    date: 'Feb 2024',
    description: 'Completed an introductory machine learning internship focused on practical ML foundations using Python.',
    points: [
      'Worked with Python tools including NumPy and pandas for data manipulation and preprocessing.',
      'Learned the fundamentals of supervised learning, model training, and evaluation.',
      'Implemented basic machine learning models and analyzed their performance.',
      'Practiced transforming raw datasets into usable inputs for ML models.',
      'Built the foundation that led to further work in AI engineering and intelligent systems.',
    ],
  },
]

export default function ExperienceArea() {
  return (
    <section id="experience" className="services-area" style={{ backgroundColor: 'rgb(5, 5, 5)' }}>
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12">
            <div className="section-title section-black-title wow fadeInUp delay-0-2s">
              <h2 style={{ color: '#fff' }}>Professional Experience</h2>
              <p style={{ color: 'rgba(255,255,255,0.7)' }}>
                Hands-on experience across AI evaluation, machine learning, LLM applications, and autonomous robotics software.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div style={{ position: 'relative', paddingLeft: '24px' }}>
              <div
                style={{
                  position: 'absolute',
                  left: '10px',
                  top: 0,
                  bottom: 0,
                  width: '1px',
                  background: 'rgba(255,255,255,0.22)',
                }}
              />

              {experiences.map((item, index) => (
                <div
                  key={item.company}
                  className="wow fadeInUp"
                  style={{
                    position: 'relative',
                    paddingLeft: '32px',
                    paddingBottom: index === experiences.length - 1 ? '0px' : '32px',
                    marginBottom: index === experiences.length - 1 ? '0px' : '8px',
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      left: '4px',
                      top: '10px',
                      width: '14px',
                      height: '14px',
                      borderRadius: '50%',
                      backgroundColor: '#fff',
                      border: '2px solid rgba(255,255,255,0.3)',
                    }}
                  />
                  <div
                    style={{
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.12)',
                      borderRadius: '16px',
                      padding: '24px 24px 24px 24px',
                      boxShadow: '0 24px 60px rgba(0,0,0,0.16)',
                    }}
                  >
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '10px' }}>
                      <span
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          padding: '6px 12px',
                          borderRadius: '999px',
                          backgroundColor: 'rgba(255,255,255,0.1)',
                          color: '#fff',
                          fontSize: '12px',
                          fontWeight: 700,
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                        }}
                      >
                        {item.date}
                      </span>
                    </div>

                    <h4 style={{ color: '#fff', marginBottom: '6px', fontSize: '22px' }}>{item.role}</h4>
                    <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '10px', fontWeight: 600 }}>
                      {item.company}
                    </p>
                    <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '14px', lineHeight: 1.7 }}>
                      {item.description}
                    </p>
                    <ul style={{ paddingLeft: '18px', margin: 0 }}>
                      {item.points.map((point) => (
                        <li key={point} style={{ color: 'rgba(255,255,255,0.72)', marginBottom: '6px', lineHeight: 1.6 }}>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
