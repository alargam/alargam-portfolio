# Project Context

## Project Name
Alargam Osman Portfolio

## Role
AI Systems Engineer

## Project Purpose
This portfolio exists to present a technical profile centered on building complete AI-powered systems, with emphasis on robotics, autonomous systems, backend engineering, intelligent automation, and production-ready implementation.

## Portfolio Identity and Goals
The portfolio should feel like a high-end engineering case-study site rather than a generic personal website.

### Core Goals
- Showcase end-to-end system design capability
- Highlight robotics, AI engineering, and backend work together
- Present projects as professional engineering stories
- Keep the experience polished, minimal, and technical
- Maintain a consistent black-and-white portfolio aesthetic

## Target Audience
- Technical recruiters at companies such as Google, OpenAI, NVIDIA, Stripe, and similar teams
- Engineering hiring managers
- Fellow engineers evaluating technical depth and product thinking

## Current Architecture
The portfolio is built with:
- Next.js App Router
- TypeScript
- React components under the src/components structure
- Central project content in src/data/projects.ts
- Dynamic project case study routes under src/app/projects/[slug]/page.tsx
- Reusable single-project page rendering via src/components/single-project

### Main Areas
- Home page: hero, services, experience, companies, and portfolio narrative
- Projects page: project cards and category filters
- Case study pages: detailed engineering stories and technical highlights
- Contact and about pages: supporting portfolio information

## Design Philosophy
- Preserve the existing template design system rather than introducing a new style
- Keep the experience modern, clean, and technical
- Use whitespace, cards, and concise content over long documentation blocks
- Favor visual storytelling for case studies
- Keep animations and responsive behavior intact

## Important Decisions Made
1. Dynamic case study routes were implemented so each project has its own page.
2. Project content is centralized in the shared data layer for reuse and consistency.
3. The home page experience section replaced the old contact section to better emphasize professional background.
4. The Delivero project is treated as a robotics and AI engineering showcase with a visual, portfolio-style case study format.
5. Company logos on the home page are managed through a maintainable array and follow the existing responsive pattern.
6. The projects filter uses a null state for “no filter” rather than an explicit “All” label.

## Current Development Status
The portfolio is in a polished implementation phase.

### Completed
- Homepage content and experience section refined
- Project cards linked to real case-study routes
- Delivero case study implemented with a modern engineering layout
- Delivero case study refined with IoT dashboard monitoring and ESP32-S3 emergency safety narrative
- Company logo section expanded with Cellula Technologies
- Production build verified successfully

### In Progress / Next Priorities
- Replace placeholder visual assets with final images or video where available
- Refine project visuals and case-study imagery for each project
- Continue polishing copy and section hierarchy for consistency

## Source of Truth
This document, along with the docs in this folder, should be treated as the baseline context for future AI-assisted development work.