import Head from 'next/head'
import { NextPage } from 'next'
import { motion } from 'framer-motion'
import Bar from 'components/index/Bar'
import Layout from 'layouts/defaultLayout'
import { tools, languages } from 'mock/data'
import AboutPageLayout from 'layouts/aboutPageLayout'
import { fadeInUp, stagger, routeAnimation } from 'mock/animation'

const Resume: NextPage = () => {
  return (
    <>
      <Head>
        <title>Resume</title>
      </Head>
      <Layout
        headTitle="Resume | Joshua Galit"
        metaDescription="My Education, Experience and Languages I used."
      >
        <AboutPageLayout>
          <motion.div
            variants={routeAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <motion.div variants={stagger} className="px-2 py-2">
              <div className="grid gap-6 md:grid-cols-2">
                <motion.div variants={fadeInUp}>
                  <h5 className="my-3 text-lg font-bold">Education</h5>
                  <div>
                    <h5 className="my-2 text-lg font-bold text-gray-700 dark:text-gray-300">
                      Bachelor of Science in Information Technology
                    </h5>
                    <p className="font-semibold text-gray-700 dark:text-gray-300">
                      Southern Leyte State University (2015-2019)
                    </p>
                    <p className="my-3 text-gray-600 dark:text-gray-400">
                      I am good at Windows Form Application those times when C#
                      and Vb.net are most relevant used in school.
                    </p>
                  </div>
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <h5 className="my-3 text-lg font-bold">Experience</h5>
                  <div>
                    <h5 className="my-2 text-lg font-bold text-gray-700 dark:text-gray-300">
                      Self Taught Developer
                    </h5>
                    <p className="my-3 text-gray-600 dark:text-gray-400">
                      I do not have experience in tech company but I have
                      intensive knowledge and experience as a self taught
                      developer.
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Languages & Tools */}
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h5 className="my-3 text-lg font-bold">
                    Languages & Frameworks
                  </h5>
                  <div className="my-2">
                    {languages.map((lang, i) => (
                      <Bar data={lang} key={i} />
                    ))}
                  </div>
                </div>
                <div>
                  <h5 className="my-3 text-lg font-bold">Tools & Software</h5>
                  <div className="my-2">
                    {tools.map((tool, i) => (
                      <Bar data={tool} key={i} />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </AboutPageLayout>
      </Layout>
    </>
  )
}

export default Resume
