import React from 'react'
import MyDayItem from './MyDayItem'
import { motion } from 'framer-motion'
import { fadeInUp, stagger } from '~/mock/animation'

interface MyDayListProps {
  mydaylist: any
}

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
