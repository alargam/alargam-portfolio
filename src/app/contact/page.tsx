 
import Contact from '@/components/contact'
import Wrapper from '@/layouts/Wrapper'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Contact Argam Osman',
  description:
    'AI Systems Engineer specializing in artificial intelligence, backend engineering, automation systems, and robotics.',
}


export default function index() {
  return (
    <Wrapper>
      <Contact />
    </Wrapper>
  )
}
