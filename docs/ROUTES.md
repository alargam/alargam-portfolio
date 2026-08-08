# Routes

## Existing Routes

| Route | File | Purpose | Dynamic |
|-------|------|---------|---------|
| `/` | `src/app/page.tsx` | Homepage - hero, about preview, services, portfolio, testimonials, blog, contact | No |
| `/about` | `src/app/about/page.tsx` | About page - detailed background, experience, skills | No |
| `/contact` | `src/app/contact/page.tsx` | Contact page - form, info, map | No |
| `/service` | `src/app/service/page.tsx` | Services page - detailed service offerings | No |
| `/blog` | `src/app/blog/page.tsx` | Blog listing - all posts with pagination | No |
| `/blog-details` | `src/app/blog-details/page.tsx` | Individual blog post (currently static) | No |
| `/projects` | `src/app/projects/page.tsx` | Projects listing - filterable grid of all projects | No |
| `/projects/[slug]` | `src/app/projects/[slug]/page.tsx` | Individual project case study | Yes |

## Route Details

### `/projects` (Projects Listing)
- **Component**: `src/components/projects/index.tsx`
- **Data**: `src/data/projects.ts` → `projects` array
- **State**: Filter category (AI, Backend, Robotics, Automation, or null)
- **Child Components**: `EngineeringDomains`, `ProjectFilters`, `ProjectCard` grid
- **URL Params**: None (filter state is client-side only)

### `/projects/[slug]` (Case Study)
- **Component**: `src/app/projects/[slug]/page.tsx`
- **Data**: Finds project by slug from `projects` array and renders the shared single-project template
- **Params**: `slug` (e.g., `delivero`, `animo`, `ai-cartoon-production`, `seo-automation`, `resume-reviewer-api`, `smart-crm`)
- **Fallback**: Returns `notFound()` if slug does not match a known project

### Navigation Structure (from `menu_data.ts`)
```
Home (/)
About (/about)
Services (/service)
Projects (/projects)
Blog (/blog)
Contact (/contact)
```

## Client-Side Routing
- Next.js `Link` component used for navigation
- No query parameters for filters (state only)
- Smooth scroll wrapper (`#smooth-wrapper`, `#smooth-content`) persists across routes