import HeaderOne from '@/layouts/headers/HeaderOne'
import React from 'react'
import Breadcrumb from '../common/Breadcrumb'
import SingleProjectArea from './SingleProjectArea'
import FooterOne from '@/layouts/footers/FooterOne'
import { Project } from '@/data/projects'

interface SingleProjectProps {
  project: Project
}

export default function SingleProject({ project }: SingleProjectProps) {
  const projectTagline = project.tagline ?? project.description

  return (
    <>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Breadcrumb
              title={project.title}
              style_3={true}
              tagline={projectTagline}
            />
            <SingleProjectArea project={project} />
          </main>
          <FooterOne />
        </div>
      </div>
    </>
  )
}
