
import React from 'react'

export default function Breadcrumb({ title, subtitle, tagline, style_2, style_3, style_4 }: any) {
  return (
    <>
      <section className="single-page-hero-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <h2>{title}</h2>
              {style_3 && subtitle && (
                <p style={{ margin: '0 auto 18px', maxWidth: '860px', fontSize: '1.1rem', fontWeight: 600, letterSpacing: '0.01em', lineHeight: 1.4, color: 'rgba(7, 7, 7, 0.9)' }}>
                  {subtitle}
                </p>
              )}
              {style_3 && tagline && (
                <p style={{ margin: '0 auto', maxWidth: '920px', fontSize: '0.98rem', letterSpacing: '0.02em', color: 'rgba(7, 7, 7, 0.68)', lineHeight: 1.65, whiteSpace: 'nowrap' }}>
                  {tagline}
                </p>
              )}
              {style_2 &&
                <p>Explore a collection of real-world engineering projects that showcase my experience in AI, backend engineering, robotics, and intelligent automation.</p>
              }
              {style_4 &&
                <p>Stories, Advice, and Inspiration for the Curious Mind</p>
              }
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
