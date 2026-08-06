

import React from 'react'

import type { Metadata } from 'next'
import Wrapper from '@/layouts/Wrapper'
import BlogDetails from '@/components/blog-details'
export const metadata: Metadata = {
  title: 'Blog Details | AI Systems Engineer',
  description:
    'AI Systems Engineer specializing in artificial intelligence, backend engineering, automation systems, and robotics.',
}


export default function index() {
  return (
    <Wrapper>
      <BlogDetails />
    </Wrapper>
  )
}
