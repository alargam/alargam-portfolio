import React from 'react'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Wrapper from '@/layouts/Wrapper'
import SingleProject from '@/components/single-project'
import { projects } from '@/data/projects'

interface ProjectSlugPageProps {
  params: Promise<{ slug: string }>
}

const getProjectBySlug = (slug: string) => {
  return projects.find((project) => project.slug === slug || project.aliases?.includes(slug))
}

export async function generateStaticParams() {
  return projects.flatMap((project) => [
    { slug: project.slug },
    ...(project.aliases?.map((alias) => ({ slug: alias })) ?? []),
  ])
}

export async function generateMetadata({ params }: ProjectSlugPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    return {
      title: 'Project Not Found',
    }
  }

  return {
    title: `${project.title} | Argam | AI Systems Engineer`,
    description: project.description,
    openGraph: {
      title: `${project.title} | Argam | AI Systems Engineer`,
      description: project.description,
      url: `https://alargam.vercel.app/projects/${project.slug}`,
      images: [project.image],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} | Argam | AI Systems Engineer`,
      description: project.description,
      images: [project.image],
    },
  }
}

export default async function ProjectSlugPage({ params }: ProjectSlugPageProps) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  return (
    <Wrapper>
      <SingleProject project={project} />
    </Wrapper>
  )
}
