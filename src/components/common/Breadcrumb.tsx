
import React from 'react'

interface BreadcrumbProps {
  title: string
  subtitle?: string
  tagline?: string
  style_2?: boolean
  style_3?: boolean
  style_4?: boolean
}

export default function Breadcrumb({ title, subtitle, tagline, style_2, style_3, style_4 }: BreadcrumbProps) {
  return (
    <>
      <section className="single-page-hero-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <h2>{title}</h2>
              {style_3 && subtitle && (
                <p className="single-page-hero-subtitle">
                  {subtitle}
                </p>
              )}
              {style_3 && tagline && (
                <p className="single-page-hero-tagline">
                  {tagline}
                </p>
              )}
              {style_2 &&
                <p>Selected engineering projects across AI systems, backend development, robotics, and intelligent automation.</p>
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
