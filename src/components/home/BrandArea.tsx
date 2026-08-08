"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'

const companyLogos = [
  {
    src: "/assets/images/companies/amit.svg",
    alt: "AMIT logo",
  },
  {
    src: "/assets/images/companies/spaceborn.png",
    alt: "Spaceborn logo",
  },
  {
    src: "/assets/images/companies/urca.png",
    alt: "URCA logo",
  },
  {
    src: "/assets/images/companies/turing.svg",
    alt: "Turing logo",
  },
  {
    src: "/assets/images/companies/outlier.jpeg",
    alt: "Outlier logo",
    width: 250, 
    height: 85,
    // رفعنا نسبة التكبير هنا من 1.4 إلى 1.6
    scale: 1.6, 
  },
  {
    src: "/assets/images/companies/cellula.jpeg",
    alt: "Cellula Technologies logo",
    width: 260,
    height: 88,
    scale: 1.75,
  },
]

export default function BrandArea() {

  useEffect(() => {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }

    function addAnimation() {
      const scrollers = document.querySelectorAll(".scroller");
      scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", "true");
        const scrollerInner = scroller.querySelector(".scroller__inner");
        if (!scrollerInner) return;
        const scrollerContent = Array.from(scrollerInner.children);
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true) as HTMLElement;
          duplicatedItem.setAttribute("aria-hidden", "true");
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }
  }, []);

  return (
    <>
      <div className="company-design-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2>Company I Worked With</h2>
              <div className="company-list">
                <div className="scroller" data-direction="left" data-speed="slow">
                  <div className="scroller__inner">
                    {companyLogos.map((company) => (
                      <div key={company.src} className="company-logo-item">
                        <Image
                          src={company.src}
                          alt={company.alt}
                          width={company.width || 120}
                          height={company.height || 40}
                          className="company-logo-img"
                          style={{ 
                            objectFit: 'contain',
                            transform: company.scale ? `scale(${company.scale})` : 'scale(1)'
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}