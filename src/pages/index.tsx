import { NextPage } from 'next'
import { services } from '~/mock/data'
import { motion } from 'framer-motion'
import Layout from '~/layouts/defaultLayout'
import { classNames } from '~/utils/classNames'
import AboutPageLayout from '~/layouts/aboutPageLayout'
import ServiceCard from '~/components/index/ServiceCard'
import { routeAnimation, fadeInUp, stagger } from '~/mock/animation'

const Index: NextPage = () => {
  return (
    <Layout headTitle="About | Joshua Galit" metaDescription="About Joshua Galit">
      <AboutPageLayout>
        <motion.div variants={routeAnimation} initial="initial" animate="animate" exit="exit">
          <div className="flex flex-col px-6 flex-grow">
            <h5 className="my-3  font-medium text-gray-800 dark:text-gray-300">
              My name is Joshua Galit and I&apos;m a self taught web developer using modern
              technologies. Ability to follow established procedures and work under little or no
              supervision. Follow and Star me on GitHub 💕
            </h5>
            <motion.div
              variants={stagger}
              className={classNames(
                'relative px-4 py-5 bg-gray-100 dark:bg-gray-800 dark:bg-black-100',
                'flex-grow rounded-lg transition ease-in-out duration-700'
              )}
              style={{ marginLeft: '-1.5rem', marginRight: '-1.5rem' }}
            >
              <h6 className="mb-3 pl-1 text-xl font-bold tracking-wide text-gray-900 dark:text-gray-100">
                My Services
              </h6>
              <div className="relative grid gap-6 lg:grid-cols-2">
                {services.map((service, i) => (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    className="lg:col-span-1 bg-white rounded-lg overflow-hidden"
                  >
                    <ServiceCard service={service} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </AboutPageLayout>
    </Layout>
  )
}

export default Index
