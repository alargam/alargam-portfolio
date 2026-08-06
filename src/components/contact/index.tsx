
import React from 'react'
import HeaderOne from '@/layouts/headers/HeaderOne'
import ContactArea from '../home/ContactArea'
import FooterOne from '@/layouts/footers/FooterOne'

export default function Contact() {
  return (
    <>

      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <ContactArea />
          </main>
          <FooterOne />
        </div>
      </div>

    </>
  )
}
