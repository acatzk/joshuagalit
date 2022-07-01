import React from 'react'
import MyDayItem from './JournalItem'
import { motion } from 'framer-motion'
import { fadeInUp, stagger } from '~/mock/animation'

type Props = {
  journalList: any
}

const JournalList: React.FC<Props> = (props) => {
  const { journalList } = props

  return (
    <motion.div variants={stagger}>
      {journalList.map((myday: any, i: number) => (
        <motion.div variants={fadeInUp} key={i} className="my-3 md:my-7 px-4">
          <MyDayItem {...myday} />
        </motion.div>
      ))}
    </motion.div>
  )
}

export default JournalList
