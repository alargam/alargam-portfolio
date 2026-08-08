
import React from 'react'
import HeroArea from './HeroArea'
import BrandArea from './BrandArea'
import AboutArea from './AboutArea'
import ServiceArea from './ServiceArea'
import HeaderOne from '@/layouts/headers/HeaderOne'
import TestimonoalArea from './TestimonoalArea'
import BlogArea from './BlogArea'
import ExperienceArea from './ExperienceArea'
import FooterOne from '@/layouts/footers/FooterOne'

const showTestimonials = false
const showBlog = false

export default function Home() {
  return (
    <>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <HeroArea />
            <BrandArea />
            <AboutArea />
            <ServiceArea />
            <ExperienceArea />
            {showTestimonials && <TestimonoalArea />}
            {showBlog && <BlogArea />}
          </main>
          <FooterOne />
        </div>
      </div> 
    </>
  )
}
