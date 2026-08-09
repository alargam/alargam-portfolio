"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import architectureImage from '../../../assets/images/amr/amr-architecture.png'
import yoloDetectionImage from '../../../assets/images/amr/Yolo detection.png'
import rvizMappingImage from '../../../assets/images/amr/amr-rviz-mapping.png'
import nav2Image from '../../../assets/images/amr/amr-nav2.png'
import realRobotImage from '../../../assets/images/amr/amr-real-robot.jpg'
import dashboardImage from '../../../assets/images/amr/dashboard.png'
import emergencyImage from '../../../assets/images/amr/Emergency.png'
import ImagePopup from '@/modals/ImagePopup'
import { Project } from '@/data/projects'

interface SingleProjectAreaProps {
  project: Project
}

const PlaceholderPanel = ({
  title,
  subtitle,
  height = '240px',
  accent = 'rgba(255,255,255,0.06)',
}: {
  title: string
  subtitle?: string
  height?: string
  accent?: string
}) => (
  <div
    style={{
      minHeight: height,
      border: '1px solid rgba(255,255,255,0.12)',
      borderRadius: '18px',
      background: accent,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '24px',
      color: 'rgba(255,255,255,0.78)',
      lineHeight: 1.7,
    }}
  >
    <div>
      <strong style={{ color: '#fff', display: 'block', marginBottom: '6px' }}>{title}</strong>
      {subtitle && <span>{subtitle}</span>}
    </div>
  </div>
)

const Badge = ({ label }: { label: string }) => (
  <span
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '8px 12px',
      borderRadius: '999px',
      background: 'rgba(255,255,255,0.08)',
      color: '#fff',
      fontSize: '13px',
      fontWeight: 600,
      letterSpacing: '0.03em',
      marginRight: '8px',
      marginBottom: '8px',
    }}
  >
    {label}
  </span>
)

interface EditorialCard {
  number: string
  title: string
  text: string
}

interface EditorialBlockProps {
  label: string
  heading: string
  description?: string
  cards: EditorialCard[]
  delayStart?: number
}

const editorialCardStyle = {
  padding: '22px',
  borderRadius: '16px',
  border: '1px solid rgba(255,255,255,0.08)',
  background: 'rgba(255, 255, 255, 0.04)',
}

const pageShellStyle = {
  maxWidth: '1240px',
  width: '100%',
  margin: '0 auto',
  padding: '0 24px',
}

const sectionSpacing = {
  paddingTop: 'clamp(35px, 4.8vw, 68px)',
  paddingBottom: 'clamp(35px, 4.8vw, 68px)',
}

const eyebrowStyle = {
  display: 'block',
  marginBottom: '18px',
  color: 'rgba(255,255,255,0.75)',
  fontSize: 'clamp(0.75rem, 0.8vw, 0.875rem)',
  fontWeight: 600,
  letterSpacing: '0.24em',
  textTransform: 'uppercase' as const,
}

const sectionHeadingStyle = {
  color: '#fff',
  fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
  fontWeight: 300,
  lineHeight: 1.08,
  margin: 0,
}

const sectionCopyStyle = {
  color: 'rgba(255,255,255,0.74)',
  fontSize: 'clamp(0.98rem, 1.1vw, 1.125rem)',
  lineHeight: 1.68,
  maxWidth: '680px',
}

const mediaFrameStyle = {
  position: 'relative' as const,
  width: '100%',
  minHeight: '460px',
  borderRadius: '28px',
  overflow: 'hidden' as const,
  border: '1px solid rgba(255,255,255,0.10)',
  background: 'rgba(255,255,255,0.02)',
}

const sectionLabelStyle = {
  display: 'block',
  marginBottom: '20px',
  color: 'rgba(255,255,255,0.75)',
  fontSize: 'clamp(0.75rem, 0.8vw, 0.875rem)',
  fontWeight: 600,
  letterSpacing: '0.24em',
  textTransform: 'uppercase' as const,
}

const tagPillStyle = {
  color: '#fff',
  border: '1px solid rgba(255,255,255,0.12)',
  borderRadius: '999px',
  padding: '10px 14px',
  fontSize: 'clamp(0.82rem, 0.9vw, 0.9rem)',
  fontWeight: 500,
  lineHeight: 1.3,
  marginBottom: '10px',
}

const techChipStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '8px 12px',
  borderRadius: '999px',
  background: 'rgba(0,0,0,0.06)',
  color: '#111',
  fontSize: 'clamp(0.88rem, 1vw, 0.95rem)',
  fontWeight: 600,
  letterSpacing: '0.01em',
  marginRight: '10px',
  marginBottom: '10px',
  border: '1px solid rgba(0,0,0,0.08)',
  lineHeight: 1.3,
}

const SectionHeading = ({ label, title, description }: { label: string; title: string; description?: string }) => (
  <div style={{ marginBottom: '42px', maxWidth: '700px' }}>
    <span style={sectionLabelStyle}>{label}</span>
    <h2 style={sectionHeadingStyle}>{title}</h2>
    {description ? <p style={{ ...sectionCopyStyle, marginTop: '22px' }}>{description}</p> : null}
  </div>
)

const EditorialBlock = ({ label, heading, description, cards, delayStart = 4 }: EditorialBlockProps) => (
  <div style={{ marginBottom: '48px' }}>
    <div className="wow fadeInUp delay-0-2s" style={{ marginBottom: '26px', maxWidth: '720px' }}>
      <span style={{ display: 'block', marginBottom: '16px', color: '#fff', fontSize: '1rem', fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase' }}>
        {label}
      </span>
      <h2 style={{ color: '#fff', fontSize: 'clamp(1.75rem, 2.4vw, 2.25rem)', fontWeight: 300, marginBottom: 0, lineHeight: 1.05 }}>
        {heading}
      </h2>
      {description ? (
        <p style={{ color: 'rgba(255,255,255,0.76)', fontSize: '1rem', lineHeight: 1.8, marginTop: '14px' }}>{description}</p>
      ) : null}
    </div>

    <div className="row gx-4 gy-4 mb-5">
      {cards.map((card, index) => (
        <div key={card.number} className="col-lg-3 col-md-6">
          <div className={`wow fadeInUp delay-0-${delayStart + index}s`} style={editorialCardStyle}>
            <span style={{ display: 'block', color: 'rgba(255,255,255,0.72)', fontSize: '0.82rem', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '10px' }}>
              {card.number}
            </span>
            <h3 style={{ color: '#fff', fontSize: 'clamp(0.98rem, 1.1vw, 1.06rem)', margin: '0 0 10px', lineHeight: 1.25 }}>{card.title}</h3>
            <p style={{ color: 'rgba(255,255,255,0.76)', margin: 0, lineHeight: 1.75, fontSize: '0.95rem' }}>{card.text}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
)

const externalLinkStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '10px',
  padding: '12px 18px',
  borderRadius: '999px',
  background: '#050505',
  border: '1px solid rgba(255,255,255,0.16)',
  color: '#fff',
  textDecoration: 'none',
  fontSize: '14px',
  fontWeight: 700,
  letterSpacing: '0.08em',
  textTransform: 'uppercase' as const,
}

const backToProjectsStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '10px',
  color: 'rgba(255,255,255,0.94)',
  fontSize: 'clamp(0.875rem, 0.9vw, 1rem)',
  fontWeight: 700,
  letterSpacing: '0.14em',
  textTransform: 'uppercase' as const,
  textDecoration: 'none',
  padding: '10px 0',
  marginBottom: '32px',
  transition: 'color 0.3s ease',
}

const heroSummaryStyle = {
  color: 'rgba(255,255,255,0.78)',
  fontSize: 'clamp(1rem, 1.2vw, 1.125rem)',
  marginBottom: '22px',
  maxWidth: '600px',
  lineHeight: 1.65,
}

const heroTechLineStyle = {
  color: 'rgba(255,255,255,0.65)',
  fontSize: 'clamp(0.82rem, 0.9vw, 0.9rem)',
  fontWeight: 600,
  letterSpacing: '0.12em',
  textTransform: 'uppercase' as const,
  lineHeight: 1.65,
  marginBottom: '26px',
}

const heroButtonRowStyle = {
  display: 'flex',
  flexWrap: 'wrap' as const,
  gap: '14px',
}

const projectHeroIntroductions: Partial<Record<string, string>> = {
  'resume-reviewer-api': 'AI-powered backend that analyzes resumes against job descriptions and returns structured feedback, scores, and recommendations.',
  delivero: 'Autonomous mobile robot designed for intelligent delivery, combining navigation, perception, localization, and embedded control.',
  'seo-automation': 'Automated content workflow that takes structured SEO inputs, generates content with AI, and prepares WordPress drafts through n8n.',
}

const getProjectHeroIntro = (project: Project) => projectHeroIntroductions[project.slug] ?? project.description

const caseStudyHeadingFontSize = 'clamp(1.75rem, 4vw, 2.625rem)'
const lightSectionHeadingFontSize = 'clamp(1.7rem, 3.8vw, 2.4rem)'


const ProjectImageFrame = ({
  src,
  alt,
  title,
  subtitle,
  minHeight = '460px',
  objectFit = 'cover',
}: {
  src?: string
  alt: string
  title: string
  subtitle?: string
  minHeight?: string
  objectFit?: 'cover' | 'contain'
}) => {
  const [imageFailed, setImageFailed] = useState(false)

  if (!src || imageFailed) {
    return <PlaceholderPanel title={title} subtitle={subtitle} height={minHeight} />
  }

  return (
    <div style={{ ...mediaFrameStyle, minHeight }}>
      <img
        src={src}
        alt={alt}
        onError={() => setImageFailed(true)}
        style={{ width: '100%', height: '100%', minHeight, objectFit, display: 'block' }}
      />
    </div>
  )
}

const ProjectCaseStudyHero = ({ project }: { project: Project }) => (
  <div className="container" style={{ maxWidth: '1200px', width: '100%' }}>
    <div className="row align-items-center g-4 g-lg-5" style={{ padding: '0 0 24px' }}>
      <div className="col-lg-6">
        <div className="wow fadeInUp delay-0-2s" style={{ maxWidth: '620px' }}>
          <a href="/projects" style={backToProjectsStyle}>
            <span aria-hidden="true">←</span>
            <span>BACK TO PROJECTS</span>
          </a>
          <span style={eyebrowStyle}>{project.mainCategory}</span>
          <p style={heroSummaryStyle}>
            {getProjectHeroIntro(project)}
          </p>
          <p style={heroTechLineStyle}>
            {project.technologies}
          </p>
          {(project.github || project.demo) && (
            <div style={heroButtonRowStyle}>
              {project.github && (
                <a href={project.github} target="_blank" rel="noreferrer" style={{ ...externalLinkStyle, background: 'rgba(255,255,255,0.12)' }}>
                  <i className="fa-brands fa-github" />
                  <span>View Source</span>
                </a>
              )}
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noreferrer" style={{ ...externalLinkStyle, background: 'rgba(255,255,255,0.06)' }}>
                  <i className="fa-solid fa-arrow-up-right-from-square" />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          )}
        </div>
      </div>
      <div className="col-lg-6">
        <div className="wow fadeInUp delay-0-3s" style={{ display: 'flex', justifyContent: 'center' }}>
          <ProjectImageFrame
            src={project.image}
            alt={`${project.title} main visual`}
            title="Project Visual"
            subtitle="Add a project screenshot or hero image to replace this media area."
            minHeight="520px"
          />
        </div>
      </div>
    </div>
  </div>
)

interface StorySection {
  label: string
  heading: string
  text?: string
  pills: string[]
  image?: string
}

const ProjectStorySection = ({ section, index }: { section: StorySection; index: number }) => {
  if (!section.text && section.pills.length === 0) {
    return null
  }

  const imageColumn = (
    <div className={`col-lg-7 ${index % 2 === 1 ? 'order-lg-1 order-2' : ''}`}>
      <div className={`wow fadeInUp delay-0-${index + 3}s`}>
        <ProjectImageFrame
          src={section.image}
          alt={section.heading}
          title={`${section.label} Visual`}
          subtitle="Add a project screenshot or media asset to replace this placeholder."
          minHeight="460px"
          objectFit="contain"
        />
      </div>
    </div>
  )

  const textColumn = (
    <div className={`col-lg-5 ${index % 2 === 1 ? 'order-lg-2 order-1' : ''}`}>
      <div className="wow fadeInUp delay-0-2s" style={{ maxWidth: '520px' }}>
        <span style={eyebrowStyle}>{section.label}</span>
        <h2 style={{ ...sectionHeadingStyle, fontSize: caseStudyHeadingFontSize }}>{section.heading}</h2>
        {section.text && <p style={{ ...sectionCopyStyle, marginTop: '24px' }}>{section.text}</p>}
        {section.pills.length > 0 && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '28px' }}>
            {section.pills.map((label) => (
              <span key={label} style={tagPillStyle}>{label}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  )

  return (
    <section style={sectionSpacing}>
      <div style={pageShellStyle}>
        <div className="row align-items-center gx-5 gy-5">
          {index % 2 === 0 ? (
            <>
              {textColumn}
              {imageColumn}
            </>
          ) : (
            <>
              {imageColumn}
              {textColumn}
            </>
          )}
        </div>
      </div>
    </section>
  )
}

const ProjectCaseStudy = ({ project, onImageClick }: { project: Project; onImageClick: (index: number) => void }) => {
  const isResumeReviewer = project.slug === 'resume-reviewer-api'
  const isSeoAutomation = project.slug === 'seo-automation'
  const architectureImage = project.gallery[1] ?? project.gallery[0]
  const storyImages = [project.gallery[0] ?? project.image, project.gallery[2], project.gallery[3], project.gallery[4], project.gallery[5]]
  const demoImages = project.gallery
    .map((image, index) => ({ image, index }))
    .filter((item) => item.image !== architectureImage && !storyImages.includes(item.image))
  const showMetrics = project.slug !== 'resume-reviewer-api' && project.metrics && project.metrics.length > 0
  const storySections: StorySection[] = isSeoAutomation
    ? [
        {
          label: 'SEO Input & Control',
          heading: 'A simple control layer for the entire workflow.',
          text: project.overview,
          pills: ['Google Sheets', 'SEO Inputs', 'Workflow Trigger'],
          image: project.gallery[0],
        },
        {
          label: 'AI Content Pipeline',
          heading: 'Automating the repetitive content workflow.',
          text: project.problem,
          pills: ['n8n', 'OpenAI', 'Cloudflare AI', 'API Integration'],
          image: project.gallery[1],
        },
        {
          label: 'WordPress Publishing',
          heading: 'From generated content to a ready WordPress draft.',
          text: project.solution,
          pills: ['WordPress', 'Draft Creation', 'Content Automation'],
          image: project.gallery[2],
        },
      ]
    : [
        {
          label: isResumeReviewer ? 'Authentication & User Flow' : 'Project Introduction',
          heading: isResumeReviewer ? 'Secure access from the first request.' : 'What this project is built to do.',
          text: project.overview,
          pills: project.stack.slice(0, 4),
          image: storyImages[0],
        },
        {
          label: isResumeReviewer ? 'Resume Input & Processing' : 'Problem',
          heading: isResumeReviewer ? 'Preparing the resume for analysis.' : 'The engineering challenge.',
          text: project.problem,
          pills: project.challenges.slice(0, 4),
          image: storyImages[1],
        },
        {
          label: isResumeReviewer ? 'AI Analysis & Validation' : 'Solution',
          heading: isResumeReviewer ? 'Turning resume data into structured feedback.' : 'The system approach.',
          text: project.solution,
          pills: project.features.slice(0, 4),
          image: storyImages[2],
        },
        {
          label: isResumeReviewer ? 'Backend API' : 'Technical Capabilities',
          heading: isResumeReviewer ? 'More than a frontend AI demo.' : 'What the system supports.',
          text: project.role ?? project.impact,
          pills: project.features,
          image: storyImages[3],
        },
        {
          label: 'Engineering Challenges',
          heading: 'Implementation constraints solved.',
          text: project.impact ?? project.role,
          pills: project.challenges,
          image: storyImages[4],
        },
      ]

  return (
    <>
      {project.architecture && (
        <section style={{ ...sectionSpacing, paddingTop: 'clamp(35px, 4.8vw, 64px)' }}>
          <div style={{ ...pageShellStyle, maxWidth: '1120px' }}>
            <div className="wow fadeInUp delay-0-2s" style={{ marginBottom: '40px' }}>
              <span style={sectionLabelStyle}>System Architecture</span>
              <h2 style={{ color: '#fff', fontSize: caseStudyHeadingFontSize, fontWeight: 300, lineHeight: 1.08, margin: 0 }}>
                {isSeoAutomation ? 'From SEO input to WordPress draft.' : 'How the pieces fit together.'}
              </h2>
            </div>
            <ProjectImageFrame
              src={architectureImage}
              alt={`${project.title} architecture visual`}
              title="Architecture Visual"
              subtitle="Add an architecture diagram or product screenshot when available."
              minHeight="520px"
              objectFit="contain"
            />
            <p style={{ ...sectionCopyStyle, color: 'rgba(255,255,255,0.72)', marginTop: '24px', maxWidth: '760px' }}>
              {project.architecture}
            </p>
          </div>
        </section>
      )}

      {storySections.map((section, index) => (
        <ProjectStorySection key={section.label} section={section} index={index} />
      ))}

      {(project.results.length > 0 || showMetrics) && (
        <section
          style={{
            ...sectionSpacing,
            width: '100vw',
            position: 'relative',
            left: '50%',
            marginLeft: '-50vw',
            marginRight: '-50vw',
            background: 'rgb(244,243,237)',
          }}
        >
          <div style={pageShellStyle}>
            {project.results.length > 0 && (
              <>
                <div className="wow fadeInUp delay-0-2s" style={{ marginBottom: '30px' }}>
                  <span style={{ color: 'rgba(0,0,0,0.88)', fontSize: 'clamp(0.75rem, 0.8vw, 0.875rem)', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', display: 'block', marginBottom: '16px' }}>Results</span>
                  <h2 style={{ ...sectionHeadingStyle, fontSize: lightSectionHeadingFontSize, color: '#111', fontWeight: 500, lineHeight: 1.1 }}>
                    {isSeoAutomation ? 'A repeatable end-to-end publishing workflow.' : isResumeReviewer ? 'From prototype to deployed backend product.' : 'Outcome-focused project results.'}
                  </h2>
                </div>
                <div className="row gx-5 gy-5">
                  {project.results.map((item) => (
                    <div key={item} className="col-12 col-md-6 col-lg-4">
                      <div style={{ padding: '26px 0' }}>
                        {!isResumeReviewer && (
                          <span style={{ display: 'block', color: 'rgba(0,0,0,0.78)', fontSize: 'clamp(0.75rem, 0.8vw, 0.875rem)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '10px' }}>
                            Result
                          </span>
                        )}
                        <p style={{ color: '#111', fontSize: 'clamp(0.98rem, 1.1vw, 1.06rem)', lineHeight: 1.6, margin: 0, fontWeight: 600 }}>{item}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}

            {showMetrics && (
              <>
                <div style={{ borderTop: '1px solid #e5e7eb', margin: '40px 0 30px' }} />
                <div className="wow fadeInUp delay-0-2s" style={{ margin: '0 0 28px' }}>
                  <span style={{ color: 'rgba(0,0,0,0.88)', fontSize: 'clamp(0.75rem, 0.8vw, 0.875rem)', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', display: 'block', marginBottom: '16px' }}>Metrics</span>
                  <h2 style={{ ...sectionHeadingStyle, fontSize: lightSectionHeadingFontSize, color: '#111', fontWeight: 500, lineHeight: 1.1 }}>
                    Proof points from the build.
                  </h2>
                </div>
                <div className="row gx-5 gy-4">
                  {(project.metrics ?? []).map((item) => (
                    <div key={item} className="col-12 col-md-6 col-lg-3">
                      <span style={{ ...techChipStyle, display: 'inline-flex', marginRight: '10px', marginBottom: '10px' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </>
            )}

            {project.stack.length > 0 && (
              <>
                <div style={{ borderTop: '1px solid #e5e7eb', margin: '40px 0 30px' }} />
                <div className="wow fadeInUp delay-0-2s" style={{ margin: '0 0 28px' }}>
                  <span style={{ color: 'rgba(0,0,0,0.88)', fontSize: 'clamp(0.75rem, 0.8vw, 0.875rem)', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', display: 'block', marginBottom: '16px' }}>Tech Stack</span>
                  <h2 style={{ ...sectionHeadingStyle, fontSize: lightSectionHeadingFontSize, color: '#111', fontWeight: 500, lineHeight: 1.1 }}>
                    Organized for engineering clarity.
                  </h2>
                </div>
                <div className="row gx-5 gy-4">
                  {project.stack.map((item) => (
                    <div key={item} className="col-12 col-md-6 col-lg-3">
                      <span style={{ ...techChipStyle, display: 'inline-flex', marginRight: '10px', marginBottom: '10px' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </section>
      )}

      {demoImages.length > 0 && (
        <section style={sectionSpacing}>
          <div style={pageShellStyle}>
            <SectionHeading label="Gallery / Demonstration" title="Visual project evidence." />
            <div className="row g-4">
              {demoImages.map(({ image, index }) => (
                <div className="col-lg-6" key={image}>
                  <a style={{ cursor: 'pointer' }} onClick={() => onImageClick(index)} className="work-popup">
                    <ProjectImageFrame src={image} alt={`${project.title} gallery ${index + 1}`} title="Project Media" minHeight="320px" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}

export default function SingleProjectArea({ project }: SingleProjectAreaProps) {
  const [photoIndex, setPhotoIndex] = useState<number | null>(null)
  const [isOpen, setIsOpen] = useState(false)
  const isDelivero = project.slug === 'delivero'

  const handleImagePopup = (i: number) => {
    setPhotoIndex(i)
    setIsOpen(true)
  }

  const deliveroHeroImage = project.gallery[0] ?? '/assets/images/amr/amr-hero.png'
  const caseStudySections = [
    {
      title: 'Problem Statement',
      body: project.problem,
    },
    {
      title: 'Solution',
      body: project.solution,
    },
    {
      title: 'System Architecture',
      body: project.architecture,
    },
    {
      title: 'My Role',
      body: project.role ?? 'Led the end-to-end development of the autonomy stack and system integration.',
    },
    {
      title: 'Technical Challenges',
      body: project.challenges.join(' • '),
    },
    {
      title: 'Results & Impact',
      body: project.impact ?? project.results.join(' • '),
    },
  ]

  const journeySteps = [
    'Simulation',
    'ROS2 Development',
    'Gazebo Testing',
    'Hardware Integration',
    'Real Robot Deployment',
    'Autonomous Delivery System',
  ]

  const hardwareRows = [
    ['Main Computer', 'Raspberry Pi 5'],
    ['LiDAR', 'LD06'],
    ['Camera', 'Orbbec Astra Pro'],
    ['Controller', 'ESP32-S3'],
    ['Communication', 'micro-ROS'],
    ['Motor Driver', 'BTS7960'],
  ]

  const highlightCards = [
    {
      title: 'AI Perception',
      items: ['YOLOv11n', 'TensorRT', 'Raspberry Pi 5', '25–35 FPS INT8'],
    },
    {
      title: 'Autonomous Navigation',
      items: ['ROS2 Nav2', 'SLAM Toolbox', 'Localization', 'Obstacle Avoidance'],
    },
    {
      title: 'Embedded Control',
      items: ['ESP32-S3', 'micro-ROS', 'Motor Control'],
    },
  ]

  const monitoringFeatures = ['Real-time Monitoring', 'Fault Detection', 'Error Notifications', 'Remote Observation']
  const resultCards = [
    ['Complete AMR platform', 'Built the full robotics stack from system design to deployment.'],
    ['AI perception pipeline', 'Integrated real-time detection with optimized inference.'],
    ['Autonomous navigation', 'Enabled mapping, localization, and safe obstacle avoidance.'],
    ['Simulation-to-real deployment', 'Validated the system in Gazebo before real-world use.'],
  ]

  const safetyChips = ['Independent Safety Control', 'ToF Sensing', 'Wheel Feedback', 'Safe-Side Maneuver']
  const iotChips = ['GPS Tracking', 'Robot Telemetry', 'Fault Monitoring', 'Remote Dashboard']

  const performanceMetrics = [
    { value: '30 FPS', title: 'Real-Time Detection' },
    { value: '0.6 m/s', title: 'Autonomous Speed' },
    { value: '±8 cm', title: 'Localization Accuracy' },
    { value: '50 Hz', title: 'Motor Control Loop' },
    { value: '92%', title: 'Navigation Success' },
  ]

  const techGroups = [
    { label: 'ROBOTICS / SOFTWARE', items: ['ROS 2 Jazzy', 'Nav2', 'SLAM Toolbox', 'Gazebo'] },
    { label: 'AI / PERCEPTION', items: ['YOLOv11', 'TensorRT', 'OpenCV'] },
    { label: 'COMPUTE', items: ['Raspberry Pi 5'] },
    { label: 'EMBEDDED CONTROL', items: ['ESP32-S3', 'micro-ROS'] },
    { label: 'SENSORS', items: ['LiDAR', 'IMU', 'Wheel Encoders'] },
  ]

  const roboticsBadges = ['ROS2 Jazzy', 'Gazebo', 'Nav2', 'SLAM Toolbox', 'micro-ROS']
  const aiBadges = ['YOLOv11', 'PyTorch', 'ONNX', 'TensorRT', 'OpenCV']
  const softwareBadges = ['C++', 'Python', 'Linux', 'Git']

  const deliveroProblemCards: EditorialCard[] = [
    { number: '01', title: 'HUMAN DEPENDENCY', text: 'Traditional delivery requires a person to operate or manage each delivery.' },
    { number: '02', title: 'LIMITED AVAILABILITY', text: 'Human-operated delivery is limited by time, availability, and operating conditions.' },
    { number: '03', title: 'OPERATING COST', text: 'Continuous human involvement increases the cost of running delivery operations.' },
    { number: '04', title: 'SCALABILITY', text: 'Managing more deliveries requires more human resources and operational effort.' },
  ]

  const deliveroSolutionCards: EditorialCard[] = [
    { number: '01', title: 'AUTONOMOUS OPERATION', text: 'Delivero performs delivery tasks without continuous human control.' },
    { number: '02', title: 'FLEXIBLE DELIVERY', text: 'The robot can operate autonomously within its designed environment.' },
    { number: '03', title: 'LOWER OPERATIONAL DEPENDENCY', text: 'Automation reduces the need for continuous human involvement.' },
    { number: '04', title: 'SCALABLE PLATFORM', text: 'The autonomous platform provides a foundation for repeatable delivery tasks.' },
  ]

  return (
    <>
      <div className="single-project-page-design">
        <div className="single-project-image" style={isDelivero ? { position: 'relative' } : undefined}>
          {isDelivero ? (
            <div className="container" style={{ maxWidth: '1200px', width: '100%' }}>
              <div className="row align-items-center g-4 g-lg-5" style={{ padding: '0 0 30px' }}>
                <div className="col-lg-6">
                  <div className="wow fadeInUp delay-0-2s" style={{ maxWidth: '620px' }}>
                    <a href="/projects" style={backToProjectsStyle}>
                      <span aria-hidden="true">←</span>
                      <span>BACK TO PROJECTS</span>
                    </a>

                    <span style={eyebrowStyle}>{project.mainCategory}</span>
                    <p style={heroSummaryStyle}>
                      {getProjectHeroIntro(project)}
                    </p>
                    <p style={heroTechLineStyle}>
                      {project.technologies}
                    </p>

                    {(project.github || project.demo) && (
                      <div style={heroButtonRowStyle}>
                        {project.github && (
                          <a href={project.github} target="_blank" rel="noreferrer" style={{ ...externalLinkStyle, background: 'rgba(255,255,255,0.12)' }}>
                            <i className="fa-brands fa-github" />
                            <span>View Source</span>
                          </a>
                        )}
                        {project.demo && (
                          <a href={project.demo} target="_blank" rel="noreferrer" style={{ ...externalLinkStyle, background: 'rgba(255,255,255,0.06)' }}>
                            <i className="fa-solid fa-play" />
                            <span>Watch Demo</span>
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="wow fadeInUp delay-0-3s" style={{ display: 'flex', justifyContent: 'center' }}>
                    <div style={{ position: 'relative', width: '100%', minHeight: '520px', borderRadius: '30px', overflow: 'hidden', boxShadow: '0 36px 90px rgba(0,0,0,0.36)', border: '1px solid rgba(255,255,255,0.08)' }}>
                      <Image
                        src={deliveroHeroImage}
                        alt="Delivero autonomous mobile robot"
                        fill
                        priority
                        sizes="(max-width: 991px) 100vw, 50vw"
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <ProjectCaseStudyHero project={project} />
          )}
        </div>

        <div style={pageShellStyle}>
          {isDelivero ? (
            <>
              <section style={{ ...sectionSpacing, paddingTop: 'clamp(35px, 4.8vw, 64px)' }}>
                <div style={{ ...pageShellStyle, maxWidth: '1120px' }}>
                  <div className="wow fadeInUp delay-0-2s" style={{ marginBottom: '40px' }}>
                    <span style={sectionLabelStyle}>SYSTEM ARCHITECTURE</span>
                    <h2 style={{ color: '#fff', fontSize: caseStudyHeadingFontSize, fontWeight: 300, lineHeight: 1.08, margin: 0 }}>Platform topology, autonomy flow, and embedded control.</h2>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div style={{ ...mediaFrameStyle, width: '100%', maxWidth: '1020px', minHeight: '520px' }}>
                      <Image
                        src={architectureImage}
                        alt="Delivero system architecture diagram"
                        fill
                        priority
                        sizes="(max-width: 1200px) 100vw, 1200px"
                        style={{ objectFit: 'contain' }}
                      />
                    </div>
                  </div>
                  <p style={{ ...sectionCopyStyle, color: 'rgba(255,255,255,0.72)', marginTop: '24px', maxWidth: '760px' }}>
                    The architecture integrates onboard perception, sensor fusion, ROS 2 navigation, and real-time embedded motor control into a unified autonomous platform.
                  </p>
                </div>
              </section>

              <section style={sectionSpacing}>
                <div style={pageShellStyle}>
                  <div className="row align-items-center gx-5 gy-5">
                    <div className="col-lg-5">
                      <div className="wow fadeInUp delay-0-2s" style={{ maxWidth: '520px' }}>
                        <span style={eyebrowStyle}>PERCEPTION / AI</span>
                        <h2 style={{ ...sectionHeadingStyle, fontSize: caseStudyHeadingFontSize }}>What does the robot see?</h2>
                        <p style={{ ...sectionCopyStyle, marginTop: '24px' }}>
                          Delivero uses onboard vision and optimized inference to detect obstacles and relevant objects in real time.
                        </p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '28px' }}>
                          {['YOLOv11', 'TensorRT', 'Raspberry Pi 5', '30 FPS Real-Time Detection'].map((label) => (
                            <span key={label} style={tagPillStyle}>{label}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-7">
                      <div className="wow fadeInUp delay-0-3s" style={mediaFrameStyle}>
                        <Image
                          src={yoloDetectionImage}
                          alt="Delivero YOLO detection visualization"
                          fill
                          priority
                          sizes="(max-width: 991px) 100vw, 740px"
                          style={{ objectFit: 'contain' }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section style={sectionSpacing}>
                <div style={pageShellStyle}>
                  <div className="row align-items-center gx-5 gy-5">
                    <div className="col-lg-7">
                      <div className="wow fadeInUp delay-0-2s" style={mediaFrameStyle}>
                        <Image
                          src={rvizMappingImage}
                          alt="Delivero RViz mapping and sensor fusion visualization"
                          fill
                          priority
                          sizes="(max-width: 991px) 100vw, 740px"
                          style={{ objectFit: 'contain' }}
                        />
                      </div>
                    </div>
                    <div className="col-lg-5">
                      <div className="wow fadeInUp delay-0-3s" style={{ maxWidth: '520px' }}>
                        <span style={eyebrowStyle}>LOCALIZATION & SENSOR FUSION</span>
                        <h2 style={{ ...sectionHeadingStyle, fontSize: caseStudyHeadingFontSize }}>Where is the robot?</h2>
                        <p style={{ ...sectionCopyStyle, marginTop: '24px' }}>
                          LiDAR, IMU, and wheel odometry are fused to estimate the robot's pose for stable autonomous navigation.
                        </p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '28px' }}>
                          {['LiDAR', 'IMU', 'Wheel Odometry', 'SLAM', 'Sensor Fusion', '±8 cm Typical Localization Accuracy'].map((label) => (
                            <span key={label} style={tagPillStyle}>{label}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section style={sectionSpacing}>
                <div style={pageShellStyle}>
                  <div className="row align-items-center gx-5 gy-5">
                    <div className="col-lg-5">
                      <div className="wow fadeInUp delay-0-2s" style={{ maxWidth: '520px' }}>
                        <span style={eyebrowStyle}>AUTONOMOUS NAVIGATION</span>
                        <h2 style={{ ...sectionHeadingStyle, fontSize: caseStudyHeadingFontSize }}>How does the robot reach its goal safely?</h2>
                        <p style={{ ...sectionCopyStyle, marginTop: '24px' }}>
                          ROS 2 Nav2 handles global planning, local control, obstacle avoidance, and recovery behaviors to execute autonomous delivery routes.
                        </p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '28px' }}>
                          {['ROS 2 Nav2', 'Global Planning', 'Local Planning', 'Obstacle Avoidance', 'Recovery Behaviors', '0.6 m/s Autonomous Speed', '92% Navigation Goal Success'].map((label) => (
                            <span key={label} style={tagPillStyle}>{label}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-7">
                      <div className="wow fadeInUp delay-0-3s" style={mediaFrameStyle}>
                        <Image
                          src={nav2Image}
                          alt="Delivero ROS 2 Nav2 autonomous navigation"
                          fill
                          priority
                          sizes="(max-width: 991px) 100vw, 740px"
                          style={{ objectFit: 'contain' }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section style={sectionSpacing}>
                <div style={pageShellStyle}>
                  <div className="row align-items-center gx-5 gy-5">
                    <div className="col-lg-7">
                      <div className="wow fadeInUp delay-0-2s" style={{ maxWidth: '520px' }}>
                        <span style={eyebrowStyle}>SAFETY & EMERGENCY</span>
                        <h2 style={{ ...sectionHeadingStyle, fontSize: caseStudyHeadingFontSize }}>Fail-safe behavior for unexpected conditions.</h2>
                        <p style={{ ...sectionCopyStyle, marginTop: '24px' }}>
                          An independent ESP32-S3 safety layer takes over when communication with the Raspberry Pi is lost, power or system faults occur, or the main autonomy stack becomes unresponsive. Using ToF sensing and wheel feedback, the robot performs a controlled maneuver toward the nearest available safe area away from the travel path.
                        </p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '28px' }}>
                          {safetyChips.map((label) => (
                            <span key={label} style={tagPillStyle}>{label}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-5">
                      <div className="wow fadeInUp delay-0-3s">
                        <div style={{ position: 'relative', width: '100%', minHeight: '320px', borderRadius: '18px', overflow: 'hidden', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.10)' }}>
                          <Image
                            src={emergencyImage}
                            alt="ESP32-S3 safety fallback behavior"
                            fill
                            priority
                            sizes="(max-width: 991px) 100vw, 520px"
                            style={{ objectFit: 'cover' }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section style={sectionSpacing}>
                <div style={pageShellStyle}>
                  <div className="row align-items-center gx-5 gy-5">
                    <div className="col-lg-7 order-lg-1 order-2">
                      <div className="wow fadeInUp delay-0-3s" style={mediaFrameStyle}>
                        <Image
                          src={realRobotImage}
                          alt="Delivero real robot"
                          fill
                          priority
                          sizes="(max-width: 991px) 100vw, 740px"
                          style={{ objectFit: 'contain' }}
                        />
                      </div>
                    </div>
                    <div className="col-lg-5 order-lg-2 order-1">
                      <div className="wow fadeInUp delay-0-2s" style={{ maxWidth: '520px' }}>
                        <span style={eyebrowStyle}>SIMULATION → VALIDATION → REAL ROBOT</span>
                        <h2 style={{ ...sectionHeadingStyle, fontSize: caseStudyHeadingFontSize }}>From virtual testing to physical deployment.</h2>
                        <p style={{ ...sectionCopyStyle, marginTop: '24px' }}>
                          Behaviors were developed and validated in Gazebo before deployment and testing on the physical robot.
                        </p>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap', marginTop: '28px' }}>
                          {['Simulation', 'Validation', 'Real Robot'].map((step, index) => (
                            <React.Fragment key={step}>
                              <span style={{ color: '#fff', fontSize: '0.95rem', fontWeight: 600 }}>{step}</span>
                              {index < 2 && <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: '1.1rem' }}>→</span>}
                            </React.Fragment>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section style={sectionSpacing}>
                <div style={pageShellStyle}>
                  <div className="row align-items-center gx-5 gy-5">
                    <div className="col-lg-7 order-lg-1 order-2">
                      <div className="wow fadeInUp delay-0-3s" style={mediaFrameStyle}>
                        <Image
                          src={dashboardImage}
                          alt="Delivero IoT dashboard for robot telemetry and GPS tracking"
                          fill
                          priority
                          sizes="(max-width: 991px) 100vw, 740px"
                          style={{ objectFit: 'contain' }}
                        />
                      </div>
                    </div>
                    <div className="col-lg-5 order-lg-2 order-1">
                      <div className="wow fadeInUp delay-0-2s" style={{ maxWidth: '520px' }}>
                        <span style={eyebrowStyle}>IOT & REMOTE MONITORING</span>
                        <h2 style={{ ...sectionHeadingStyle, fontSize: caseStudyHeadingFontSize }}>Remote monitoring of the robot in operation.</h2>
                        <p style={{ ...sectionCopyStyle, marginTop: '24px' }}>
                          An IoT-connected web dashboard provides remote access to the robot's GPS location, telemetry, fault information, and runtime status.
                        </p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '28px' }}>
                          {iotChips.map((label) => (
                            <span key={label} style={tagPillStyle}>{label}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section
                style={{
                  ...sectionSpacing,
                  width: '100vw',
                  position: 'relative',
                  left: '50%',
                  marginLeft: '-50vw',
                  marginRight: '-50vw',
                  background: 'rgb(244,243,237)',
                }}
              >
                <div style={pageShellStyle}>
                  <div className="wow fadeInUp delay-0-2s" style={{ marginBottom: '30px' }}>
                    <span style={{ color: 'rgba(0,0,0,0.88)', fontSize: 'clamp(0.75rem, 0.8vw, 0.875rem)', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', display: 'block', marginBottom: '16px' }}>SYSTEM PERFORMANCE</span>
                    <h2 style={{ ...sectionHeadingStyle, fontSize: lightSectionHeadingFontSize, color: '#111', fontWeight: 500, letterSpacing: '-0.03em', lineHeight: 1.1 }}>
                      Representative prototype performance.
                    </h2>
                  </div>
                  <div className="row gx-5 gy-5">
                    {performanceMetrics.map((item) => (
                      <div key={item.title} className="col-12 col-md-6 col-lg-4">
                        <div style={{ padding: '26px 0' }}>
                          <span style={{ display: 'block', color: 'rgba(0,0,0,0.78)', fontSize: 'clamp(0.75rem, 0.8vw, 0.875rem)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '10px' }}>
                            {item.title}
                          </span>
                          <h3 style={{ color: '#111', fontSize: '1.75rem', margin: 0, lineHeight: 1.12, fontWeight: 700 }}>
                            {item.value}
                          </h3>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div style={{ borderTop: '1px solid #e5e7eb', margin: '40px 0 30px' }} />
                  <div style={{ height: '12px' }} />
                  <div className="wow fadeInUp delay-0-2s" style={{ margin: '0 0 28px' }}>
                    <span style={{ color: 'rgba(0,0,0,0.88)', fontSize: 'clamp(0.75rem, 0.8vw, 0.875rem)', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', display: 'block', marginBottom: '16px' }}>TECH STACK</span>
                    <h2 style={{ ...sectionHeadingStyle, fontSize: lightSectionHeadingFontSize, color: '#111', fontWeight: 500, letterSpacing: '-0.03em', lineHeight: 1.1 }}>
                      Organized for engineering clarity.
                    </h2>
                  </div>
                  <div className="row gx-5 gy-4">
                    {techGroups.map((group) => (
                      <div key={group.label} className="col-12 col-md-6 col-lg-3">
                        <div style={{ padding: '6px 0' }}>
                          <span style={{ color: 'rgba(0,0,0,0.82)', fontSize: '0.9rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', display: 'block', marginBottom: '14px' }}>
                            {group.label}
                          </span>
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '4px' }}>
                            {group.items.map((item) => (
                              <span key={item} style={techChipStyle}>
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </>
          ) : (
            <ProjectCaseStudy project={project} onImageClick={handleImagePopup} />
          )}
        </div>
      </div>

      {isOpen && (
        <ImagePopup
          images={project.gallery}
          setIsOpen={setIsOpen}
          photoIndex={photoIndex}
          setPhotoIndex={setPhotoIndex}
        />
      )}
    </>
  )
}
