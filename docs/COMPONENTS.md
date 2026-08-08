# Components

## Core Components

### Layout Components
| Component | Location | Responsibility |
|-----------|----------|----------------|
| `HeaderOne` | `src/layouts/headers/HeaderOne.tsx` | Main navigation, logo, menu, mobile toggle |
| `FooterOne` | `src/layouts/footers/FooterOne.tsx` | Footer with links, social icons, copyright |
| `Wrapper` | `src/layouts/Wrapper.tsx` | Page wrapper with smooth scroll context |
| `Breadcrumb` | `src/components/common/Breadcrumb.tsx` | Page title breadcrumb with style variants |

### Navigation Components
| Component | Location | Responsibility |
|-----------|----------|----------------|
| `NavMenu` | `src/layouts/headers/NavMenu.tsx` | Desktop navigation menu |
| `MobileMenu` | `src/layouts/headers/MobileMenu.tsx` | Mobile slide-out menu |
| `menu_data.ts` | `src/layouts/headers/menu_data.ts` | Navigation structure configuration |

### Common UI Components
| Component | Location | Responsibility |
|-----------|----------|----------------|
| `Count` | `src/components/common/Count.tsx` | Animated number counter |
| `ScrollToTop` | `src/components/common/ScrollToTop.tsx` | Scroll-to-top button |
| `Sidebar` | `src/components/common/Sidebar.tsx` | Sidebar layout component |
| `NiceSelect` | `src/ui/NiceSelect.tsx` | Custom select dropdown |
| `ImagePopup` | `src/modals/ImagePopup.tsx` | Image lightbox modal |
| `VideoPopup` | `src/modals/VideoPopup.tsx` | Video player modal |

### Homepage Sections (`src/components/home/`)
| Component | Responsibility |
|-----------|----------------|
| `HeroArea` | Hero section with headline, CTA, background |
| `AboutArea` | About preview with stats |
| `ServiceArea` | Services showcase |
| `PortfolioArea` | Featured projects preview |
| `BlogArea` | Latest blog posts |
| `TestimonoalArea` | Client testimonials carousel |
| `BrandArea` | Company logos strip |
| `ContactArea` | Contact form section (kept for the dedicated `/contact` page) |
| `ExperienceArea` | Dark vertical timeline section for professional experience on the homepage |

### Projects Components (`src/components/projects/`)
| Component | Location | Responsibility | Relationships |
|-----------|----------|----------------|---------------|
| `index.tsx` | `src/components/projects/index.tsx` | Projects page composition, filter state management | Parent of `ProjectFilters`, `ProjectCard`, `EngineeringDomains` |
| `ProjectFilters` | `src/components/projects/ProjectFilters.tsx` | Filter button group, emits filter changes | Child of `index.tsx`, receives `activeFilter`, `onFilterChange` |
| `ProjectCard` | `src/components/projects/ProjectCard.tsx` | Individual project display card with dynamic case study links | Child of `index.tsx`, receives `project`, `index` |
| `EngineeringDomains` | `src/components/projects/EngineeringDomains.tsx` | Domain expertise section above projects | Sibling to filter grid, independent |

### Single-Project / Case Study Components (`src/components/single-project/`)
| Component | Location | Responsibility | Relationships |
|-----------|----------|----------------|---------------|
| `index.tsx` | `src/components/single-project/index.tsx` | Page shell for a project case study | Receives `project` and renders the reusable template |
| `SingleProjectArea.tsx` | `src/components/single-project/SingleProjectArea.tsx` | Reusable case study template | Consumes project data for hero, overview, architecture, stack, gallery, links |

### Component Communication Patterns
1. **State Down, Events Up**: Page component (`index.tsx`) owns filter state, passes to `ProjectFilters` via props
2. **Data from Central Source**: All components import from `src/data/projects.ts`
3. **Props for Configuration**: `ProjectCard` receives `index` for staggered animations
4. **No Context/Redux**: Simple prop drilling sufficient for current scope

### Styling Approach
- Template CSS classes for layout (`container-fluid`, `row`, `col-lg-6`, `wow`, `fadeInUp`)
- Inline styles for dynamic states (active filter, hover effects)
- CSS variables for design tokens (colors, spacing)
- GSAP for complex animations, CSS transitions for simple hover states