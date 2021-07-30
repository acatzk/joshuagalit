import React from 'react'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import { fadeInUp, stagger } from 'mock/animation'

interface ProjecdtListProps {
  projects: []
}

const ProjectItem = dynamic(() => import('./ProjectItem'), {
  ssr: false,
  loading: () => (
    <p className="flex items-center justify-center min-h-screen">Loading...</p>
  ),
})

const ProjectList: React.FC<ProjecdtListProps> = ({ projects }) => {
  return (
    <motion.div
      variants={stagger}
      className="divide-y divide-gray-200 dark:divide-gray-700 px-4"
    >
      {projects.map((project, i) => (
        <motion.div variants={fadeInUp} key={i}>
          <ProjectItem {...project} />
        </motion.div>
      ))}
    </motion.div>
  )
}

export default ProjectList
