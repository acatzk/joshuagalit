import React from 'react'
import { ISkill } from '~/type'
import { motion } from 'framer-motion'

const Bar: React.FC<{ data: ISkill }> = ({ data: { Icon, level, name } }) => {
  const barWidth = `${level}`
  const variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: barWidth,
      transition: {
        duration: 0.4,
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  }

  return (
    <div className="text-white my-2 bg-gray-300 dark:bg-gray-700 rounded-full">
      <motion.div
        className="px-4 py-0.5 flex items-center rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
        style={{ width: barWidth }}
        variants={variants}
        initial="initial"
        animate="animate"
      >
        <Icon className="mr-3" />
        {name}
      </motion.div>
    </div>
  )
}

export default Bar
