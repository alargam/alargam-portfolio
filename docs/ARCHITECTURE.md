# Architecture

## Next.js Architecture
- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript (strict mode)
- **Rendering**: Client-side rendering for interactive components ('use client')
- **Styling**: CSS custom properties (variables) + inline styles for component-specific styling

## App Router Structure
```
src/app/
├── layout.tsx                 # Root layout with providers
├── page.tsx                   # Homepage
├── about/page.tsx             # About page
├── contact/page.tsx           # Contact page
├── projects/
│   ├── page.tsx               # Projects listing (this portfolio page)
│   └── [slug]/page.tsx        # Individual project case study
├── service/page.tsx           # Services page
├── blog/page.tsx              # Blog listing
└── blog-details/page.tsx      # Blog post detail
```

## Component Organization
```
src/components/
├── common/                    # Shared UI components
│   ├── Breadcrumb.tsx
│   ├── Count.tsx
│   ├── ScrollToTop.tsx
│   └── Sidebar.tsx
├── home/                      # Homepage sections
│   ├── AboutArea.tsx
│   ├── BlogArea.tsx
│   ├── BrandArea.tsx
│   ├── ContactArea.tsx
│   ├── HeroArea.tsx
│   ├── PortfolioArea.tsx
│   ├── ServiceArea.tsx
│   └── TestimonoalArea.tsx
├── projects/                  # Projects page components
│   ├── EngineeringDomains.tsx
│   ├── ProjectCard.tsx
│   ├── ProjectFilters.tsx
│   └── index.tsx              # Projects page composition
├── layouts/
│   ├── footers/FooterOne.tsx
│   └── headers/
│       ├── HeaderOne.tsx
│       ├── MobileMenu.tsx
│       └── NavMenu.tsx
├── modals/
│   ├── ImagePopup.tsx
│   └── VideoPopup.tsx
└── ui/
    └── NiceSelect.tsx
```

## Data Layer
- **Location**: `src/data/`
- **Projects Data**: `src/data/projects.ts` - Contains project definitions, categories, and filtering logic
- **Type Definitions**: Co-located with data (Project interface)

## Styling System
- **Global Styles**: `src/styles/index.css` + `public/assets/css/*.css` (template CSS)
- **CSS Variables**: Defined in `:root` for colors, spacing, typography
- **Component Styles**: Mix of CSS classes (from template) + inline styles for dynamic states
- **Animations**: 
  - WOW.js (fadeInUp, etc.) via CSS classes
  - GSAP for complex animations
  - CSS transitions for hover states
- **Responsive**: Mobile-first with breakpoints in template CSS

## Asset Organization
```
public/
├── assets/
│   ├── images/                # Project images, logos, avatars
│   ├── css/                   # Template CSS files
│   ├── js/                    # Template JS libraries (jQuery, GSAP, etc.)
│   └── plugins/               # GSAP plugins
├── cv/Alargam_Osman_Resume.pdf
└── favicon.png

assets/images/                 # Source images for projects (referenced in data)
```

## Routing Architecture
- **Static Routes**: `/`, `/about`, `/contact`, `/service`, `/blog`, `/projects`
- **Dynamic Routes**: `/projects/[slug]` for case studies
- **Navigation**: Header component with menu data in `src/layouts/headers/menu_data.ts`

## Page-Component Communication
- Pages compose components (e.g., `src/app/projects/page.tsx` → `src/components/projects/index.tsx`)
- State managed at page level, passed down via props
- Filter state in `index.tsx` → passed to `ProjectFilters` → filters `ProjectCard` grid
- Data fetched from `src/data/projects.ts` at component level