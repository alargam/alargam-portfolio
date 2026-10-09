import resumeReviewerCover from '@/assets/images/resume-reviewer/resume-reviewer-cover.png'
import resumeReviewerLogin from '@/assets/images/resume-reviewer/after_login.png'
import resumeReviewerUpload from '@/assets/images/resume-reviewer/after_upload_cv_and_job_description.png'
import resumeReviewerAnalysis from '@/assets/images/resume-reviewer/your_analysis.png'
import resumeReviewerArchitecture from '@/assets/images/resume-reviewer/architecture.png'
import resumeReviewerApi from '@/assets/images/resume-reviewer/api.png'

export interface Project {
  id: number
  slug: string
  aliases?: string[]
  title: string
  description: string
  tagline?: string
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
  video?: string
  github?: string
  demo?: string
  documentation?: string
  role?: string
  impact?: string
  metrics?: string[]
  hidden?: boolean
}

export const projects: Project[] = [
  {
    id: 12,
    slug: 'ai-ecommerce-content',
    title: 'AI E-commerce Content Automation',
    description: 'Faster product publishing with less repetitive content work.',
    tagline: 'Faster publishing. Less repetitive manual work.',
    image: '/assets/images/ai-ecommerce-content/cover.png',
    mainCategory: 'Automation',
    categories: ['Automation'],
    technologies: 'AliExpress • AI • WordPress • Google Drive • PostgreSQL • API integrations',
    overview: 'I built a workflow that imports AliExpress products and uses AI to generate SEO-oriented articles, titles, descriptions, and images.',
    problem: 'Preparing product content and publishing it repeatedly takes time away from running an online store.',
    solution: 'The workflow publishes content automatically to WordPress and prepares social media content.',
    architecture: 'Files are stored in Google Drive and data is managed in PostgreSQL, with support for additional API integrations.',
    stack: ['AliExpress', 'WordPress', 'Google Drive', 'PostgreSQL', 'API integrations'],
    features: ['AliExpress product imports', 'AI-generated articles, titles, descriptions, and images', 'Automatic WordPress publishing', 'Social media content preparation', 'File storage', 'Data management', 'Additional API integrations'],
    challenges: [],
    results: ['Faster publishing', 'Less repetitive manual work'],
    gallery: ['/assets/images/ai-ecommerce-content/1.png'],
  },
  {
    id: 11,
    slug: 'xray-super-resolution',
    title: 'Medical X-Ray Super Resolution',
    description: 'An experimental Swift-SRGAN computer vision project that upscales X-ray images from 256×256 to 1024×1024.',
    tagline: 'Experimental computer vision for 4× image upscaling.',
    image: '/assets/images/xray-super-resolution/sample_sr_output.png',
    mainCategory: 'AI & Backend',
    categories: ['AI & Backend'],
    technologies: 'Python • PyTorch • torchvision • NumPy • Pillow',
    overview: 'I prepared paired low- and high-resolution images, trained Swift-SRGAN, and evaluated its outputs against HR references using PSNR and SSIM.',
    problem: 'The experiment explores reconstructing a higher-resolution image from a low-resolution input.',
    solution: 'SR outputs are compared with HR references using PSNR and SSIM. The README reports PSNR 36.1 dB and SSIM 0.81 after 7 epochs on a Colab T4.',
    architecture: 'I trained the generator to reconstruct higher-resolution images and the discriminator to distinguish generated outputs from HR references.',
    stack: ['Python', 'PyTorch', 'torchvision', 'NumPy', 'Pillow'],
    features: ['Dataset preparation', 'Generator and discriminator training', '4× image upscaling', 'PSNR and SSIM evaluation'],
    challenges: [],
    results: ['4× upscaling: 256×256 → 1024×1024', 'Reported PSNR: 36.1 dB', 'Reported SSIM: 0.81'],
    gallery: ['/assets/images/xray-super-resolution/sample_lr_input.png', '/assets/images/xray-super-resolution/sample_sr_output.png', '/assets/images/xray-super-resolution/sample_hr_input.png', '/assets/images/xray-super-resolution/network_architecture.png'],
    github: 'https://github.com/alargam/Super_Resolution_Medical_X-Ray_Image',
  },
  {
    id: 10,
    slug: 'n8n-ai-agents',
    title: 'AI Agents & n8n Automation',
    description: 'Reusable AI Agents and n8n workflows that connect tools and reduce manual work.',
    tagline: 'Connected tools. Flexible workflows. Less manual work.',
    image: '/assets/images/n8n-ai-agents/cover.png',
    mainCategory: 'Automation',
    categories: ['Automation'],
    technologies: 'n8n • OpenAI • Gemini • Google Sheets • Google Drive • Webhooks • REST APIs',
    overview: 'I built a collection of reusable AI Agents and n8n workflows connecting Google Sheets, Google Drive, Webhooks, and REST APIs with OpenAI and Gemini.',
    problem: 'Moving data between tools and repeating routine tasks takes time away from client work.',
    solution: 'Individual workflows handle data analysis, content creation, image generation, file processing, notifications, and automatic data updates.',
    architecture: 'Each workflow connects the inputs, AI processing, and actions needed for its task. The collection supports different needs through reusable workflows.',
    stack: ['n8n', 'OpenAI', 'Gemini', 'Google Sheets', 'Google Drive', 'Webhooks', 'REST APIs'],
    features: ['Data analysis', 'Content creation', 'Image generation', 'File processing', 'Notifications', 'Automatic data updates'],
    challenges: [],
    results: ['Reduced manual work', 'Connected tools', 'Flexible workflows'],
    gallery: ['/assets/images/n8n-ai-agents/1.png', '/assets/images/n8n-ai-agents/2.png', '/assets/images/n8n-ai-agents/3.png', '/assets/images/n8n-ai-agents/4.png'],
  },
  {
    id: 9,
    slug: 'ai-real-estate-crm',
    title: 'AI Real Estate CRM',
    description: 'A CRM that reduces manual listing work and keeps property data, leads, and sales follow-up organized.',
    tagline: 'Less manual work on listings and follow-up.',
    image: '/assets/images/ai-real-estate-crm/cover.png',
    mainCategory: 'Automation',
    categories: ['Automation'],
    technologies: 'Integration options: WhatsApp Business • OpenAI • Airtable • Make • n8n',
    overview: 'I designed and built a CRM that receives listings, extracts and organizes property details with AI, generates titles and descriptions, and automates distribution.',
    problem: 'Manual listing preparation and scattered customer data slow down responses and follow-up.',
    solution: 'A structured property and customer database and dashboard support lead management, sales follow-up, property recommendations, and human handoff when needed.',
    architecture: '',
    stack: ['WhatsApp Business', 'OpenAI', 'Airtable', 'Make', 'n8n'],
    features: ['AI property detail extraction', 'Title and description generation', 'Automated listing distribution', 'Property and customer database', 'Dashboard', 'Lead management', 'Sales follow-up', 'Property recommendations', 'Human handoff'],
    challenges: [],
    results: ['Less manual listing preparation', 'Better organized property and customer data', 'Faster responses and more efficient sales follow-up'],
    gallery: ['/assets/images/ai-real-estate-crm/1.png'],
  },
  {
    id: 8,
    slug: 'ai-clinic-booking',
    title: 'AI Clinic Booking Automation',
    description: 'Reduce manual scheduling with an AI workflow that turns patient messages into confirmed appointments.',
    tagline: 'Faster booking. Less scheduling work.',
    image: '/assets/images/ai-clinic-booking/cover.png',
    mainCategory: 'Automation',
    categories: ['Automation'],
    technologies: 'OpenAI • n8n • Google Sheets',
    overview: 'An AI Agent understands the booking request and extracts the patient details needed for scheduling.',
    problem: 'Handling each booking manually takes staff time and makes scheduling conflicts harder to manage.',
    solution: 'The workflow checks availability, prevents conflicting bookings, and records the appointment.',
    architecture: 'I built and connected the AI Agent and scheduling workflow using OpenAI, n8n, and Google Sheets.',
    stack: ['OpenAI', 'n8n', 'Google Sheets'],
    features: ['Booking request understanding', 'Patient detail extraction', 'Availability checks', 'Conflict prevention', 'Appointment recording', 'Confirmations'],
    challenges: [],
    results: ['Less manual scheduling work.', 'Bookings recorded without conflicting appointments.', 'Clear confirmations for patients.'],
    gallery: ['/assets/images/ai-clinic-booking/1.jpeg', '/assets/images/ai-clinic-booking/2.jpeg', '/assets/images/ai-clinic-booking/3.jpeg', '/assets/images/ai-clinic-booking/4.jpeg', '/assets/images/ai-clinic-booking/5.jpeg', '/assets/images/ai-clinic-booking/6.jpeg'],
  },
  {
    id: 7,
    slug: 'ai-cv-builder',
    demo: 'https://cv-automation-frontend.vercel.app/',
    title: 'AI CV Builder',
    description: 'A working initial version that reduces manual CV preparation by converting raw resume text into a structured, formatted PDF.',
    tagline: 'From resume text to a formatted PDF.',
    image: '/assets/images/ai-cv-builder/hero.png',
    mainCategory: 'Automation',
    categories: ['Automation'],
    technologies: 'AI Workflow • PDF Generation',
    overview: 'Choose from two templates, paste your resume text, then preview and download the result.',
    problem: 'Manual CV preparation means organizing resume content and adjusting the layout as it grows.',
    solution: 'The selected template formats structured resume data into a document. Automatic pagination adds pages based on content length.',
    architecture: 'I built the backend and AI workflow for content understanding, data structuring, template rendering, and PDF generation.',
    stack: [],
    features: ['Resume text input', 'Preview', 'PDF download', 'Automatic pagination'],
    challenges: [],
    results: ['Less manual CV formatting.', 'A downloadable PDF in the chosen layout.'],
    gallery: ['/assets/images/ai-cv-builder/1.png', '/assets/images/ai-cv-builder/2.png', '/assets/images/ai-cv-builder/3.png', '/assets/images/ai-cv-builder/4.png', '/assets/images/ai-cv-builder/5.png'],
  },
  {
    id: 1,
    slug: 'delivero',
    aliases: ['delivero-amr'],
    title: 'Delivero',
    description: 'Autonomous mobile robot for intelligent delivery and navigation.',
    tagline: 'Redefining autonomous delivery for the next generation of smart cities.',
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
    hidden: true,
  },
  {
    id: 4,
    slug: 'seo-automation',
    title: 'AI SEO & WordPress Automation',
    description: 'AI-powered content automation pipeline that turns structured SEO inputs into generated WordPress drafts.',
    tagline: 'Turning SEO inputs into AI-generated WordPress drafts through one automated workflow.',
    image: '/assets/images/n8n-seo/n8n-seo-cover.png',
    mainCategory: 'Automation',
    categories: ['Automation'],
    technologies: 'n8n • Google Sheets • OpenAI • Cloudflare AI • WordPress',
    overview: 'Google Sheets acts as the workflow entry point, providing structured keywords, topics, and content inputs that trigger and control the automation pipeline.',
    problem: 'n8n coordinates the processing steps, sends structured context to AI services, handles generated content, and passes the resulting data through the workflow without requiring manual handoffs between tools.',
    solution: 'The completed article is automatically formatted and sent to WordPress as a draft, allowing it to be reviewed and edited before publishing.',
    architecture: 'The workflow connects Google Sheets, AI services, and WordPress through n8n, orchestrating the full content production process from structured input to a ready-to-review article draft.',
    stack: ['n8n', 'Google Sheets', 'OpenAI', 'Cloudflare AI', 'WordPress', 'REST APIs'],
    features: ['Google Sheets', 'SEO Inputs', 'Workflow Trigger', 'n8n', 'OpenAI', 'Cloudflare AI', 'API Integration', 'WordPress', 'Draft Creation', 'Content Automation'],
    challenges: [],
    results: ['Automated SEO content workflow', 'Google Sheets-based workflow control', 'AI-assisted article generation', 'Automated WordPress draft creation', 'Reduced repetitive manual content operations'],
    gallery: ['/assets/images/n8n-seo/n8n-google-sheets-control.png', '/assets/images/n8n-seo/n8n-workflow-overview.png', '/assets/images/n8n-seo/n8n-wordpress-draft.png'],
  },
  {
    id: 5,
    slug: 'resume-reviewer-api',
    title: 'AI Resume Reviewer',
    description: 'Production-oriented AI backend for analyzing resumes against job descriptions.',
    tagline: 'Production-ready AI resume analysis from upload to structured feedback.',
    image: resumeReviewerCover.src,
    mainCategory: 'AI & Backend',
    categories: ['AI & Backend'],
    technologies: 'FastAPI • PostgreSQL • Groq LLM • JWT • Docker • Railway',
    overview: 'Users register or log in with securely hashed credentials, receive a JWT access token, and can access only their own resume analyses and saved review history.',
    problem: 'The API validates the uploaded PDF, extracts resume text with PyMuPDF, and combines it with the target job description before the data reaches the AI layer.',
    solution: 'Groq generates overall and matching scores, strengths, missing skills, weaknesses, and recommendations. The response is parsed and validated with Pydantic before it can be returned or persisted.',
    architecture: 'From authenticated PDF upload to structured AI analysis, PostgreSQL persistence, and user-owned review history.',
    stack: ['Python', 'FastAPI', 'Pydantic', 'PostgreSQL', 'SQLAlchemy 2.x', 'Alembic', 'psycopg v3', 'Groq LLM API', 'PyMuPDF', 'JWT / PyJWT', 'Argon2 via pwdlib', 'Docker', 'Docker Compose', 'Railway'],
    features: ['Groq LLM', 'Pydantic', 'Structured Output', 'FastAPI', 'REST API', 'OpenAPI', 'PostgreSQL'],
    challenges: [],
    results: ['40 automated tests passing', 'Public Railway deployment', 'Persistent PostgreSQL review history', 'Authenticated user-owned review access', 'Complete end-to-end resume analysis workflow'],
    gallery: [resumeReviewerLogin.src, resumeReviewerArchitecture.src, resumeReviewerUpload.src, resumeReviewerAnalysis.src, resumeReviewerApi.src],
    github: 'https://github.com/alargam/resume-reviewer-api',
    demo: 'https://carefree-celebration-production-a424.up.railway.app/',
    documentation: 'https://github.com/alargam/resume-reviewer-api',
    role: 'The interface is backed by a FastAPI REST API with authentication, controlled error handling, PostgreSQL persistence, review ownership, and documented endpoints.',
    impact: '',
    metrics: []
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
    hidden: true,
  },
]

export const publicProjectOrder = [
  'delivero',
  'ai-real-estate-crm',
  'resume-reviewer-api',
  'ai-clinic-booking',
  'ai-ecommerce-content',
  'ai-cv-builder',
  'xray-super-resolution',
  'seo-automation',
  'n8n-ai-agents',
] as const

const projectRanks = new Map<string, number>(publicProjectOrder.map((slug, index) => [slug, index]))

export const publicProjects = projects
  .filter((project) => !project.hidden)
  .sort((a, b) => (projectRanks.get(a.slug) ?? Infinity) - (projectRanks.get(b.slug) ?? Infinity))

export const allCategories = ['AI & Backend', 'Robotics', 'Automation']

export const getFilteredProjects = (category: string | null): Project[] => {
  if (!category) {
    return publicProjects
  }
  return publicProjects.filter((project) => project.categories.includes(category))
}
