 
import SingleProject from '@/components/single-project'
import Wrapper from '@/layouts/Wrapper'
import { Metadata } from 'next'
import React from 'react'
import { projects } from '@/data/projects'

export const metadata: Metadata = {
  title: 'Project Case Study | AI Systems Engineer',
  description:
    'AI Systems Engineer specializing in artificial intelligence, backend engineering, automation systems, and robotics.',
}

export default function index() {
  const project = projects[0]

  return (
    <Wrapper>
      <SingleProject project={project} />
    </Wrapper>
  )
}
