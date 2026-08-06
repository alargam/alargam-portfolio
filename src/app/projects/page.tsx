import Projects from '@/components/projects' 
import Wrapper from '@/layouts/Wrapper'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Projects | AI Systems Engineer Portfolio',
  description:
    'AI Systems Engineer specializing in artificial intelligence, backend engineering, automation systems, and robotics.',
}


export default function index() {
  return (
    <Wrapper>
      <Projects />
    </Wrapper>
  )
}
