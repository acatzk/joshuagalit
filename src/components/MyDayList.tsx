import React from 'react';
import MyDayItem from './MyDayItem';
import { motion } from 'framer-motion';
import { fadeInUp, stagger } from '~/animation';

interface MyDayListProps {
  mydaylist: any;
}

const MyDayList: React.FC<MyDayListProps> = ({ mydaylist }) => {
  return (
    <motion.div variants={stagger}>
      {mydaylist.map((myday, i) => (
        <motion.div
          variants={fadeInUp}
          key={i}
          className="pt-3 md:pt-10 px-4 space-y-4"
        >
          <MyDayItem {...myday} key={i} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default MyDayList;
