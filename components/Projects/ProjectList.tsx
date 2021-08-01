import React from 'react'
import { motion } from 'framer-motion'
import ProjectItem from './ProjectItem'
import { fadeInUp, stagger } from 'mock/animation'

interface ProjectListProps {
  projects: []
}

const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
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
