 
import React from 'react'

import type { Metadata } from 'next'  
import Home from '@/components/home'
import Wrapper from '@/layouts/Wrapper'
export const metadata: Metadata = {
  title: 'Argam Osman | AI Systems Engineer',
  description:
    'AI Systems Engineer specializing in artificial intelligence, backend engineering, automation systems, and robotics.',
}


export default function index() {
  return (
    <Wrapper>
     <Home /> 
    </Wrapper>
  )
}
