import React from 'react'
import { NextPage } from 'next'
import dynamic from 'next/dynamic'
import { mydaylist } from 'mock/data'
import { motion } from 'framer-motion'
import Layout from 'layouts/defaultLayout'
import { routeAnimation } from 'mock/animation'
import { AnimatedLoadingIcon } from 'utils/Icons'
import MyDayHeader from 'components/MyDay/MyDayHeader'

const MyDayList = dynamic(() => import('components/MyDay/MyDayList'), {
  ssr: false,
  loading: () => (
    <AnimatedLoadingIcon className="w-5 h-5 text-black dark:text-white" />
  ),
})

const MyDay: NextPage = () => {
  return (
    <Layout
      headTitle="Diary | Joshua Galit"
      metaDescription="My Personal Diary Post every moment I feel the moment"
    >
      <motion.div
        variants={routeAnimation}
        initial="initial"
        animate="animate"
        exit="exit"
        className="inline-flex flex-col w-full mx-auto"
      >
        <MyDayHeader />
        <MyDayList mydaylist={mydaylist} />
      </motion.div>
    </Layout>
  )
}

export default MyDay
