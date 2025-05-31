'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'

const studiesData = [
  {
    id: 1,
    image: '/images/abstract-illustration-biological-cell0.png',
    title: 'Interactions between Microbial Metabolites and Ageing...',
    fullTitle: 'Interactions between Microbial Metabolites and Ageing',
    points: [
      'Are microbial metabolites directly involved in ageing pathways?',
      'If yes, how strongly do they participate in these pathways?',
      'Likeliness and toxicity analysis of microbial metabolites repurposed as drugs'
    ]
  },
  {
    id: 2,
    image: '/images/abstract-blue-form-neodymium-magnet-high-view0.png',
    title: 'Microbiome Therapeutics Animal Study...',
    fullTitle: 'Microbiome Therapeutics Animal Study',
    points: [
      'Preclinical study aimed at providing Point Of Care for our innovative therapeutic',
      'How do the microbiome in old and young mice fare?'
    ]
  },
  {
    id: 3,
    image: '/images/abstract-blue-form-neodymium-magnet-high-view1.png',
    title: 'Modelling for efficacy of Microbial Therapeutics...',
    fullTitle: 'Modelling for efficacy of Microbial Therapeutics',
    points: [
      'Do the microbes engraft and colonies in the gut everyone time an intervention is done?',
      'What are the community level dynamics of microbiome therapeutics?'
    ]
  },
  {
    id: 4,
    image: '/images/abstract-blue-form-neodymium-magnet-high-view2.png',
    title: 'Tracing the structure of Indian Microbiome and its ...',
    fullTitle: 'Tracing the structure of Indian Microbiome and its fluctuation with Age',
    points: [
      'If Microbiome changes to country to country, does it change from area to area in a diverse country like India?',
      'Are the Microbial Genetic Sequences different in different countries and cohorts?'
    ]
  }
]

export default function OngoingStudies() {
  const [activePopup, setActivePopup] = useState<number | null>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  const openPopup = (id: number) => {
    setActivePopup(id)
    document.body.classList.add('ogs-popup-open')
  }

  const closePopup = () => {
    setActivePopup(null)
    document.body.classList.remove('ogs-popup-open')
  }

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section className="ongoing-studies-wrapper page-width">
      <div className="ogs-heading-wrapper heading-wrapper">
        <h2 className="ongoing-studies-title section-title">Ongoing Studies</h2>
        <p className="ogs-para">
          We aim to lead the innovation in the field of microbiome therapeutics and
          find novel ways to harness it for Rejuvenation and Longevity.
        </p>
      </div>
      <div className="ogs-items-container">
        <div ref={scrollRef} className="ogs-items-container ogs-items-wrapper">
          {studiesData.map((study) => (
            <div key={study.id} className="ogs-item">
              <Image
                className="ogs-item-img"
                src={study.image}
                width={300}
                height={200}
                alt=""
              />
              <div className="ogs-item-content-wrapper">
                <p className="ogs-item-para">{study.title}</p>
                <div className="ogs-item-btn-wrapper" onClick={() => openPopup(study.id)}>
                  <div className="read-more">Read More</div>
                  <svg
                    className="read-more-icon"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="16" height="16" fill="#7EBD77" />
                    <path d="M6 4.25L10 8.11364L6 11.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
              </div>
              {activePopup === study.id && (
                <div className="ogs-popup">
                  <button className="ogs-popup-close" onClick={closePopup}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12"></path>
                    </svg>
                  </button>
                  <div className="ogs-popup-content-wrapper">
                    <h3 className="ogs-popup-title">{study.fullTitle}</h3>
                    <ul className="ogs-popup-content">
                      {study.points.map((point, index) => (
                        <li key={index} className="ogs-popup-content-item">{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <button className="btn-next-prev prev" onClick={() => scroll('left')}>
          <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 1.4375L2 8.19886L9 14.5625" stroke="black" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
        <button className="btn-next-prev next" onClick={() => scroll('right')}>
          <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1.4375L8 8.19886L1 14.5625" stroke="black" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>
      
      {/* Global popup overlay */}
      {activePopup && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            {/* Popup content is rendered inline with each item above */}
          </div>
        </div>
      )}
    </section>
  )
}