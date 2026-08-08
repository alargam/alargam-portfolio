'use client'
import React, { useState } from 'react'
import Breadcrumb from '../common/Breadcrumb'
import EngineeringDomains from './EngineeringDomains'
import ProjectFilters from './ProjectFilters'
import ProjectCard from './ProjectCard'
import { projects, getFilteredProjects } from '@/data/projects'
import HeaderOne from '@/layouts/headers/HeaderOne'
import FooterOne from '@/layouts/footers/FooterOne'

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null)
  const filteredProjects = getFilteredProjects(activeFilter)

  return (
    <>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Breadcrumb title="Projects" style_2={true} />
            <EngineeringDomains />

            {/* Featured Projects Section */}
            <div className="projects-area" id="portfolio" style={{ background: 'var(--primary-color)' }}>
              <div className="custom-icon">
                <img src="assets/images/custom/work-scribble.svg" alt="custom" />
              </div>
              <div className="container-fluid">
                {/* Filters */}
                <ProjectFilters activeFilter={activeFilter} onFilterChange={setActiveFilter} />

                {/* Project Grid */}
                <div className="row g-4 portfolio-grid">
                  {filteredProjects.map((project, index) => (
                    <ProjectCard key={project.id} project={project} index={index} />
                  ))}
                </div>

                {/* Empty State */}
                {filteredProjects.length === 0 && (
                  <div style={{ textAlign: 'center', padding: '60px 20px', color: 'rgba(0,0,0,0.5)' }}>
                    <p style={{ fontSize: '16px' }}>No projects found in this category.</p>
                  </div>
                )}
              </div>
            </div>
          </main>
          <FooterOne />
        </div>
      </div>
    </>
  )
}

