import React from 'react'

const domains = [
  {
    title: 'AI Engineering',
    points: ['Machine Learning', 'Deep Learning', 'Large Language Models', 'Computer Vision', 'AI Systems', 'Model Deployment'],
  },
  {
    title: 'Backend Engineering',
    points: ['API Development', 'Scalable Systems', 'Database Design', 'Authentication & Authorization', 'Microservices', 'Distributed Systems'],
  },
  {
    title: 'Computer Vision',
    points: ['Object Detection', 'Image Processing', 'Visual Intelligence', 'Real-Time Inference', 'Model Optimization', 'Video Analytics'],
  },
  {
    title: 'Robotics Engineering',
    points: ['Autonomous Navigation', 'Robot Perception', 'Sensor Fusion', 'SLAM', 'Motion Planning', 'Simulation'],
  },
  {
    title: 'AI Automation',
    points: ['AI Agents', 'Workflow Automation', 'Business Process Automation', 'API Integration', 'Intelligent Workflows', 'Multi-Agent Systems'],
  },
  {
    title: 'Cloud & Infrastructure',
    points: ['Cloud Deployment', 'Containerization', 'CI/CD', 'Infrastructure', 'Linux Systems', 'Version Control'],
  },
]

export default function EngineeringDomains() {
  return (
    <section className="services-area" style={{ paddingTop: '100px', paddingBottom: '100px', background: '#050505' }}>
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12">
            <div className="section-title section-black-title wow fadeInUp delay-0-2s">
              <h2 style={{ color: '#fff' }}>Engineering Domains</h2>
              <p style={{ color: 'rgba(255,255,255,0.8)' }}>Core engineering areas I specialize in.</p>
            </div>
          </div>
        </div>

        <div className="row" style={{ rowGap: '60px' }}>
          {domains.map((domain, index) => (
            <div key={domain.title} className="col-lg-4 col-md-6">
              <div
                className={`service-item wow fadeInUp delay-0-${(index + 1) * 2}s`}
                style={{
                  background: '#111111',
                  borderColor: 'rgba(255,255,255,0.14)',
                  minHeight: '100%',
                  padding: '40px 32px',
                }}
              >
                <i className="ri-arrow-right-up-line" style={{ color: '#fff' }}></i>
                <h4 style={{ color: '#fff', fontSize: '24px', marginTop: '0', marginBottom: '20px' }}>{domain.title}</h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {domain.points.map((point) => (
                    <li
                      key={point}
                      style={{
                        color: 'rgba(255,255,255,0.76)',
                        fontSize: '14px',
                        letterSpacing: '0.06em',
                        textTransform: 'uppercase',
                        marginBottom: '10px',
                      }}
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
