import React from 'react'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import { fadeInUp, stagger } from 'mock/animation'

interface MyDayListProps {
  mydaylist: any
}

const MyDayItem = dynamic(() => import('./MyDayItem'), {
  ssr: false,
  loading: () => (
    <p className="flex items-center justify-center min-h-screen">Loading...</p>
  ),
})

const MyDayList: React.FC<MyDayListProps> = ({ mydaylist }) => {
  return (
    <motion.div variants={stagger}>
      {mydaylist.map((myday: any, i: number) => (
        <motion.div variants={fadeInUp} key={i} className="my-3 md:my-7 px-4">
          <MyDayItem {...myday} />
        </motion.div>
      ))}
    </motion.div>
  )
}

export default MyDayList
