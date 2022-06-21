import React from 'react'
import { motion } from 'framer-motion'
import ProjectItem from './ProjectItem'
import { fadeInUp, stagger } from '~/mock/animation'

type Props = {
  projects: [
    {
      id: string
      title: string
      description: string
      demo_url: string
      created_at: string
      project_image_url: string
      source_code_url: string
      slug: string
      views_aggregate: {
        aggregate: {
          viewsCount: number
        }
      }
      comments_aggregate: {
        aggregate: {
          commentsCount: number
        }
      }
    }
  ]
}

const ProjectList: React.FC<Props> = (props) => {
  const { projects } = props

  return (
    <motion.div variants={stagger} className="divide-y divide-gray-200 dark:divide-gray-700 px-4">
      {projects?.map((project, i) => (
        <motion.div variants={fadeInUp} key={i}>
          <ProjectItem {...project} />
        </motion.div>
      ))}
    </motion.div>
  )
}

export default ProjectList
