# Decisions

## Engineering Decisions

### 1. Project Pages Architecture
**Decision**: Project pages should use reusable Case Study architecture.
- **Rationale**: Consistency across all 6 projects, maintainable, scalable
- **Implementation**: Dynamic route `/projects/[slug]` with shared layout components
- **Status**: In progress (Phase 3)

### 2. Homepage vs Case Studies
**Decision**: Homepage shows WHAT I build. Case studies show HOW I built it.
- **Homepage**: High-level project cards with title, category, brief description, tech stack
- **Case Studies**: Deep technical dive - problem, architecture, challenges, solutions, results, code snippets
- **Status**: Defined, implementation pending

### 3. Filter State Management
**Decision**: Use `null` for "no filter" state instead of "All" string.
- **Rationale**: 
  - Cleaner type safety (`string | null`)
  - Semantically correct (no filter vs filter="all")
  - Eliminates need for "All" button
  - Default state = show all naturally
- **Alternative Considered**: Keep "All" as string constant
- **Rejected**: Adds unnecessary button, unclear UX

### 4. Single-Selection Toggle Behavior
**Decision**: Click active filter → deactivate (show all). Click different filter → switch.
- **Rationale**: 
  - Matches modern filter UX patterns
  - Reduces UI clutter (no "All" button needed)
  - Single mental model: filter is either on or off
- **Multi-select**: Explicitly forbidden per requirements

### 5. Data Layer Separation
**Decision**: Keep filtering logic in `src/data/projects.ts` (`getFilteredProjects`).
- **Rationale**: 
  - Separation of concerns
  - Testable pure function
  - Reusable across components
  - Single source of truth for filter logic

### 6. Styling Approach
**Decision**: Hybrid - CSS classes for layout, inline styles for dynamic state.
- **Rationale**: 
  - Template provides comprehensive CSS classes (Bootstrap-based)
  - Inline styles necessary for dynamic active/hover states
  - Consistent with existing codebase patterns
  - No CSS-in-JS library needed

### 7. Animation Library Choice
**Decision**: Keep WOW.js + GSAP (template defaults).
- **Rationale**: 
  - Already integrated and working
  - WOW.js for scroll-reveal, GSAP for complex animations
  - No benefit to switching for this scope
  - Preserves existing animation quality

### 8. Component Granularity
**Decision**: Keep `ProjectFilters`, `ProjectCard`, `EngineeringDomains` as separate components.
- **Rationale**: 
  - Clear separation of concerns
  - Each has distinct responsibility
  - Reusable independently if needed
  - Matches existing architecture

### 9. TypeScript Configuration
**Decision**: Strict mode enabled, explicit types for props and data.
- **Rationale**: 
  - Catch errors at compile time
  - Self-documenting code
  - Better IDE support
  - Required for production quality

### 10. No External Dependencies for Filters
**Decision**: Implement filter logic with React built-ins only (`useState`).
- **Rationale**: 
  - Zero dependency overhead
  - Simple enough for React state
  - Avoids bundle size increase
  - Easier to maintain and understand