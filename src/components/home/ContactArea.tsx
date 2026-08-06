
"use client"

import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'

const contactOptions = [
  {
    href: 'https://wa.me/201154492135',
    label: 'WhatsApp',
    Icon: FaWhatsapp,
    color: '#25D366',
  },
  {
    href: 'mailto:alargam.yagoub@gmail.com',
    label: 'Email',
    Icon: FaEnvelope,
    color: '#D44638',
  },
  {
    href: 'https://www.linkedin.com/in/alargamosman/',
    label: 'LinkedIn',
    Icon: FaLinkedin,
    color: '#0A66C2',
  },
  {
    href: 'https://github.com/alargam',
    label: 'GitHub',
    Icon: FaGithub,
    color: '#ffffff',
  },
]

export default function ContactArea() {
  return (
    <section id="contact" className="contact-area">
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12">
            <div className="section-title section-black-title wow fadeInUp delay-0-2s">
              <h2 style={{ color: '#000' }}>Start a Conversation</h2>
              <p style={{ color: '#000' }}>
                Whether you are looking to build an AI-powered application, scalable backend system, intelligent automation workflow, or explore a technical collaboration, feel free to reach out.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '1rem',
              }}
            >
              {contactOptions.map(({ href, label, Icon, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '1.3rem 1.5rem',
                    backgroundColor: '#000',
                    color: '#FFF',
                    borderRadius: '1rem',
                    textDecoration: 'none',
                    boxShadow: '0 24px 60px rgba(0,0,0,0.15)',
                    transition: 'transform 180ms ease, box-shadow 180ms ease',
                  }}
                  onMouseEnter={(event) => {
                    ;(event.currentTarget as HTMLAnchorElement).style.transform = 'scale(1.02)'
                    ;(event.currentTarget as HTMLAnchorElement).style.boxShadow = '0 28px 80px rgba(0,0,0,0.22)'
                  }}
                  onMouseLeave={(event) => {
                    ;(event.currentTarget as HTMLAnchorElement).style.transform = 'scale(1)'
                    ;(event.currentTarget as HTMLAnchorElement).style.boxShadow = '0 24px 60px rgba(0,0,0,0.15)'
                  }}
                >
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '3rem',
                      height: '3rem',
                      borderRadius: '0.95rem',
                      backgroundColor: '#111',
                    }}
                  >
                    <Icon size={22} color={color} />
                  </span>
                  <span style={{ fontSize: '1rem', fontWeight: 700 }}>{label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
