# AI Memory

## Project Summary
This is the **Alargam Osman Portfolio** - a personal portfolio website for an AI Systems Engineer demonstrating expertise across AI Engineering, Backend Engineering, Robotics, Intelligent Automation, and Production-ready Systems.

## Developer Profile
- **Name**: Alargam Osman
- **Role**: AI Systems Engineer
- **Target Companies**: Google, OpenAI, NVIDIA, Stripe, and similar top-tier tech companies
- **Differentiator**: End-to-end system design - not just models, but production deployment across AI, robotics, backend, and automation

## Portfolio Goal
Build one of the strongest AI Systems Engineer portfolios - a demonstration of engineering excellence that can be proudly showcased in technical interviews. Every implementation must meet senior engineer standards at top tech companies.

## Core Rules (Never Break)

### 1. Documentation First
- Read all `docs/*.md` before any code changes
- Update documentation after every task
- Documentation is the single source of truth

### 2. Preserve Everything
- Never redesign UI
- Never replace template
- Preserve animations (WOW.js, GSAP)
- Preserve spacing, responsiveness, typography
- Preserve CSS classes and design system
- Reuse existing components

### 3. Engineering Quality
- Ask: "Would a senior engineer at Google/OpenAI/NVIDIA/Stripe implement it this way?"
- Optimize for long-term maintainability
- No quick fixes if better architecture exists
- Production-ready, scalable, reusable code

### 4. Workflow
1. Read project memory (`docs/`)
2. Analyze relevant code
3. Explain implementation plan
4. Implement only requested changes
5. Verify nothing broken
6. Update project memory

## Current Architecture
- **Framework**: Next.js 14+ App Router + TypeScript
- **Styling**: Template CSS (Bootstrap-based) + CSS variables + inline styles for dynamic state
- **Animations**: WOW.js (scroll reveal) + GSAP (complex)
- **State**: React `useState` at page level, passed via props
- **Data**: Central `src/data/projects.ts` with pure filter functions

## Current Development Phase
**Phase 2: Featured Projects Filter Enhancement**
- Reducing filter categories from 7 to 4
- Removing "All" button, default shows all
- Single-selection toggle behavior
- Premium button design (black bg, white text, subtle active indicator)

## Key Files to Know
- `src/data/projects.ts` - Project data, categories, filter logic
- `src/components/projects/index.tsx` - Projects page, filter state owner
- `src/components/projects/ProjectFilters.tsx` - Filter button component
- `src/components/projects/ProjectCard.tsx` - Project display card
- `src/components/projects/EngineeringDomains.tsx` - Domain expertise section

## Design Tokens
- **Black**: `rgb(5, 5, 5)` / `#050505`
- **White**: `#fff`
- **Border Subtle**: `rgba(255,255,255,0.14)`
- **Border Medium**: `rgba(255,255,255,0.3)`
- **Radius Buttons**: 6px
- **Radius Cards**: 20px
- **Filter Gap**: 12px
- **Section Margin**: 60px

## Active Filter Categories
1. **AI** (5 projects)
2. **Backend** (2 projects)
3. **Robotics** (2 projects)
4. **Automation** (3 projects)

## Communication Style
- Concise, professional, engineering-focused
- Explain decisions, not just changes
- Ask questions when unclear
- Never assume - verify from codebase