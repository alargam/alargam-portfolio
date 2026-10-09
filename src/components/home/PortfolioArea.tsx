"use client"
import React from 'react'
import { publicProjects } from '@/data/projects'
import ProjectCard from '@/components/projects/ProjectCard'

export default function PortfolioArea() {
  return (
    <div className="projects-area" id="portfolio">
      <div className="custom-icon">
        <img src="assets/images/custom/work-scribble.svg" alt="custom" />
      </div>
      <div className="container-fluid">
        <div className="row g-4 portfolio-grid">
          {publicProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  )
}
