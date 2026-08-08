'use client'
import React from 'react'

const filterOptions = ['AI & Backend', 'Robotics', 'Automation']

interface ProjectFiltersProps {
  activeFilter: string | null
  onFilterChange: (category: string | null) => void
}

export default function ProjectFilters({ activeFilter, onFilterChange }: ProjectFiltersProps) {
  const handleFilterClick = (category: string) => {
    if (activeFilter === category) {
      onFilterChange(null)
    } else {
      onFilterChange(category)
    }
  }

  return (
    <div className="project-filters" style={{ marginBottom: '60px', textAlign: 'center' }}>
      <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
        {filterOptions.map((category) => (
          <button
            key={category}
            onClick={() => handleFilterClick(category)}
            className="filter-btn wow fadeInUp delay-0-2s"
            style={{
              padding: '10px 24px',
              border: activeFilter === category ? '2px solid #fff' : '2px solid transparent',
              backgroundColor: activeFilter === category ? '#fff' : 'rgb(5, 5, 5)',
              color: activeFilter === category ? '#000' : '#fff',
              fontSize: '14px',
              fontWeight: '500',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              cursor: 'pointer',
              borderRadius: '6px',
              transition: 'all 0.5s ease',
            }}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  )
}
