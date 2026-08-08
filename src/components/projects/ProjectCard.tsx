import React from 'react'
import Image from 'next/image'
import { Project } from '@/data/projects'

interface ProjectCardProps {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const delayClass = `delay-${(index + 1) * 2}s`

  return (
    <div className={`col-lg-6 col-md-12 wow fadeInUp ${delayClass}`} style={{ marginBottom: '30px' }}>
      <div
        className="project-card"
        style={{
          background: '#050505',
          border: '1px solid rgba(255,255,255,0.14)',
          borderRadius: '20px',
          overflow: 'hidden',
          transition: 'all 0.5s ease',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)'
          e.currentTarget.style.transform = 'translateY(-10px)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.14)'
          e.currentTarget.style.transform = 'translateY(0)'
        }}
      >
        {/* Image */}
        <div
          style={{
            width: '100%',
            height: '280px',
            background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
          }}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 991px) 100vw, 50vw"
            style={{
              objectFit: 'cover',
              transition: 'transform 0.5s ease',
            }}
            onLoadingComplete={(img) => {
              img.style.transform = 'scale(1)'
            }}
          />
        </div>

        {/* Content */}
        <div style={{ padding: '40px 32px', display: 'flex', flexDirection: 'column', flex: 1 }}>
          {/* Main Category Badge */}
          <div
            style={{
              display: 'inline-block',
              marginBottom: '20px',
              padding: '4px 12px',
              border: '1px solid rgba(255,255,255,0.3)',
              borderRadius: '6px',
              fontSize: '12px',
              fontWeight: '500',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              color: '#fff',
              width: 'fit-content',
            }}
          >
            {project.mainCategory}
          </div>

          {/* Title */}
          <h3
            style={{
              fontSize: '24px',
              fontWeight: '600',
              color: '#fff',
              marginBottom: '16px',
              marginTop: '0',
              textTransform: 'uppercase',
              letterSpacing: '0.02em',
            }}
          >
            {project.title}
          </h3>

          {/* Description */}
          <p
            style={{
              fontSize: '14px',
              lineHeight: '1.6',
              color: 'rgba(255,255,255,0.76)',
              marginBottom: '24px',
              flex: 1,
            }}
          >
            {project.description}
          </p>

          {/* Technologies */}
          <p
            style={{
              fontSize: '13px',
              fontWeight: '500',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              color: 'rgba(255,255,255,0.65)',
              marginBottom: '24px',
            }}
          >
            {project.technologies}
          </p>

          {/* View Project Button */}
          <a
            href={`/projects/${project.slug}`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              padding: '12px 20px',
              borderRadius: '999px',
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.16)',
              fontSize: '15px',
              fontWeight: '700',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: '#fff',
              textDecoration: 'none',
              transition: 'transform 0.3s ease, background 0.3s ease, color 0.3s ease',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={(e) => {
              const link = e.currentTarget
              link.style.background = 'rgba(255,255,255,0.16)'
              link.style.transform = 'translateY(-1px)'
            }}
            onMouseLeave={(e) => {
              const link = e.currentTarget
              link.style.background = 'rgba(255,255,255,0.08)'
              link.style.transform = 'translateY(0)'
            }}
          >
            View Project
            <span style={{ fontSize: '16px', transform: 'translateX(0)', transition: 'transform 0.3s ease' }}>→</span>
          </a>
        </div>
      </div>
    </div>
  )
}
