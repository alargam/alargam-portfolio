export interface Project {
  id: number
  slug: string
  aliases?: string[]
  title: string
  description: string
  image: string
  mainCategory: string
  categories: string[]
  technologies: string
  overview: string
  problem: string
  solution: string
  architecture: string
  stack: string[]
  features: string[]
  challenges: string[]
  results: string[]
  gallery: string[]
  github?: string
  demo?: string
  documentation?: string
  role?: string
  impact?: string
  metrics?: string[]
}

export const projects: Project[] = [
  {
    id: 1,
    slug: 'delivero',
    aliases: ['delivero-amr'],
    title: 'Delivero',
    description: 'Autonomous mobile robot for intelligent delivery and navigation.',
    image: '/assets/images/amr/amr-hero.png',
    mainCategory: 'Robotics',
    categories: ['Robotics'],
    technologies: 'ROS 2 · Nav2 · YOLOv11 · LiDAR · GPS · IMU',
    overview: 'Delivero is an autonomous mobile robot platform designed to perform delivery tasks without human intervention in indoor environments. The system combines perception, localization, planning, and embedded control into a full robotics stack.',
    problem: 'The objective was to build a safe and reliable autonomous delivery platform that could perceive its environment, localize itself precisely, navigate around obstacles, and execute delivery missions with minimal operator intervention.',
    solution: 'I developed an end-to-end AMR stack around ROS 2 with Gazebo simulation, YOLO-based object detection, TensorRT optimization, sensor fusion, and autonomous navigation. The solution was structured to move from simulation to real-world deployment with clear separation between perception, navigation, and control.',
    architecture: 'The architecture uses a layered robotics pipeline: sensor input and preprocessing, perception and state estimation, global and local planning, embedded motion control, and monitoring interfaces for safe mission execution.',
    stack: ['ROS 2', 'Gazebo', 'Python', 'C++', 'PyTorch', 'TensorRT', 'OpenCV', 'Linux', 'micro-ROS', 'Nav2', 'SLAM Toolbox'],
    features: ['YOLO object detection', 'TensorRT optimization', 'Gazebo simulation', 'LiDAR and IMU fusion', 'Autonomous navigation', 'Obstacle avoidance'],
    challenges: ['Real-time perception under limited compute', 'Safe navigation in dynamic spaces', 'Reliable sensor calibration and fusion'],
    results: ['Built a complete AMR stack from simulation to deployment', 'Improved perception speed and reliability', 'Created a foundation for autonomous delivery workflows'],
    gallery: ['/assets/images/amr/amr-hero.png', '/assets/images/amr/amr-architecture.png', '/assets/images/amr/amr-rviz-mapping.png', '/assets/images/amr/amr-real-robot.jpg'],
    github: 'https://github.com/alargam/AMR_Robot',
    demo: 'https://youtube.com/shorts/1S7ldnf2kuI?si=k0DDMJQeWo6PonvL',
    documentation: 'https://github.com/alargam/AMR_Robot',
    role: 'Lead engineer for the autonomy stack, perception pipeline, and deployment workflow.',
    impact: 'Created a professional robotics platform that demonstrates a full AI + control + navigation workflow suitable for real-world autonomous delivery applications.',
    metrics: ['ROS 2 autonomy stack', 'YOLO + TensorRT inference', 'Gazebo validation', 'Embedded control integration']
  },
  {
    id: 3,
    slug: 'ai-cartoon-production',
    title: 'AI Cartoon Production Automation',
    description: 'Automated AI production pipeline for generating, processing, and publishing cartoon episodes.',
    image: '/assets/images/projects/ai-cartoon-automation.png',
    mainCategory: 'Automation',
    categories: ['Automation'],
    technologies: 'AI Agents • Workflow Automation • Content Pipeline',
    overview: 'An automated content production pipeline that generates, stages, and publishes cartoon episodes with minimal manual intervention.',
    problem: 'The challenge was to reduce the operational overhead of producing and publishing episodes while preserving quality and turnaround time.',
    solution: 'I orchestrated AI agents across generation, editing, review, and publication steps so work could move through the pipeline automatically.',
    architecture: 'The system uses a workflow engine, task queues, media processing services, and review checkpoints to coordinate the full production lifecycle.',
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'Docker', 'OpenAI', 'AWS'],
    features: ['Automated episode generation', 'Review checkpoints', 'Asset orchestration', 'Publishing workflows'],
    challenges: ['Workflow reliability', 'Batch processing', 'Quality assurance'],
    results: ['Faster publishing cycles', 'Reduced manual labor', 'Consistent output quality'],
    gallery: ['/assets/images/projects/ai-cartoon-automation.png'],
    github: 'https://github.com',
    demo: 'https://example.com',
    documentation: 'https://example.com/docs',
  },
  {
    id: 4,
    slug: 'seo-automation',
    title: 'AI SEO & WordPress Automation',
    description: 'AI-powered workflow automation system for SEO optimization and WordPress publishing.',
    image: '/assets/images/projects/seo-automation.png',
    mainCategory: 'Automation',
    categories: ['Automation'],
    technologies: 'AI Automation • API Integration • Intelligent Workflows',
    overview: 'An automation platform for SEO and WordPress content operations that uses AI to accelerate publishing and optimization tasks.',
    problem: 'The workflow needed to reduce repetitive SEO work and simplify publishing without sacrificing content quality and consistency.',
    solution: 'I designed a workflow automation layer that connects content generation, SEO analysis, publishing, and monitoring into one repeatable process.',
    architecture: 'The platform is built around API integrations, workflow orchestration, and AI-driven content analysis services.',
    stack: ['Python', 'FastAPI', 'WordPress', 'OpenAI', 'PostgreSQL', 'Docker'],
    features: ['SEO automation', 'Content publishing', 'API orchestration', 'Performance reporting'],
    challenges: ['Content consistency', 'API reliability', 'Publishing speed'],
    results: ['Higher publishing velocity', 'Less manual effort', 'More reliable SEO workflows'],
    gallery: ['/assets/images/projects/seo-automation.png'],
    github: 'https://github.com',
    demo: 'https://example.com',
    documentation: 'https://example.com/docs',
  },
  {
    id: 5,
    slug: 'resume-reviewer-api',
    title: 'Resume Reviewer API',
    description: 'Production-ready backend API that analyzes resumes and provides AI-powered feedback.',
    image: '/assets/images/projects/resume-reviewer.png',
    mainCategory: 'AI & Backend',
    categories: ['AI & Backend'],
    technologies: 'Backend Systems • APIs • AI Integration',
    overview: 'A production-ready backend API that evaluates candidate resumes and provides structured AI feedback for hiring workflows.',
    problem: 'The challenge was to turn raw resume data into actionable, consistent feedback while keeping the service reliable and easy to integrate.',
    solution: 'I implemented a robust API service with async processing, validation, and AI-based analysis so the system could support real-world hiring use cases.',
    architecture: 'The service uses a layered backend architecture with API endpoints, data persistence, analysis workers, and integration hooks.',
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'OpenAI', 'Docker', 'Redis'],
    features: ['Resume scoring', 'Feedback generation', 'Integration endpoints', 'Auditability'],
    challenges: ['Reliable parsing', 'Prompt quality', 'Scalable processing'],
    results: ['Faster review cycles', 'Consistent evaluations', 'Deployment-ready API'],
    gallery: ['/assets/images/projects/resume-reviewer.png'],
    github: 'https://github.com',
    demo: 'https://example.com',
    documentation: 'https://example.com/docs',
  },
  {
    id: 6,
    slug: 'smart-crm',
    title: 'Smart CRM Platform',
    description: 'Intelligent CRM platform combining backend services, automation workflows, and AI capabilities.',
    image: '/assets/images/projects/smart-crm.png',
    mainCategory: 'AI & Backend',
    categories: ['AI & Backend'],
    technologies: 'Backend • AI Systems • Automation',
    overview: 'An intelligent CRM platform that connects backend services, workflow automation, and AI-driven insight generation in one experience.',
    problem: 'The challenge was to make CRM operations more proactive by combining automation with intelligent recommendations instead of relying on manual work.',
    solution: 'I composed a backend-driven platform with modular services, process automation, and AI-powered analytics to improve operational throughput.',
    architecture: 'The platform follows a service-oriented structure with workflow automation, data access layers, and analytics services.',
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'OpenAI', 'Docker', 'React'],
    features: ['Workflow automation', 'AI-driven insights', 'CRM integrations', 'Operational dashboards'],
    challenges: ['Data quality', 'System orchestration', 'User adoption'],
    results: ['Reduced manual overhead', 'Faster workflows', 'More actionable insights'],
    gallery: ['/assets/images/projects/smart-crm.png'],
    github: 'https://github.com',
    demo: 'https://example.com',
    documentation: 'https://example.com/docs',
  },
]

export const allCategories = ['AI & Backend', 'Robotics', 'Automation']

export const getFilteredProjects = (category: string | null): Project[] => {
  if (!category) {
    return projects
  }
  return projects.filter((project) => project.categories.includes(category))
}
