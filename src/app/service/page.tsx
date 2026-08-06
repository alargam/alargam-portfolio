 
import Service from '@/components/service'
import Wrapper from '@/layouts/Wrapper'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Services | AI Systems Engineer',
  description:
    'AI Systems Engineer specializing in artificial intelligence, backend engineering, automation systems, and robotics.',
}


export default function index() {
  return (
    <Wrapper>
      <Service />
    </Wrapper>
  )
}
