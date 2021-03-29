import Head from 'next/head'
import { motion } from 'framer-motion'
import Layout from '~/layouts/default'
import { useRouter } from 'next/router'
import useProgressiveImg from '~/components/useProgressiveImage'

export default function IndexPage() {

  const router = useRouter()
  const [src, { blur }] = useProgressiveImg("/images/my-picture-tiny.jpg", "/images/my-picture-large.png")

  return (
    <>
      <Head>
        <title>About | Joshua Galit</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <section className="flex flex-col md:flex-row-reverse items-center justify-center mx-auto w-full max-w-7xl px-4 py-4 md:py-12 md:px-12">
          <div className="pl-0 md:pl-10">
            <div className="p-1 bg-gradient-to-tr from-yellow-400 to-fuchsia-600 rounded-xl">
              <img 
                src={src}
                className="max-w-full md:max-w-xs rounded-xl bg-white p-1" 
                style={{
                  width: 500,
                  filter: blur ? "blur(20px)" : "none",
                  transition: blur ? "none" : "filter 0.3s ease-out"
                }}
              />
            </div>
          </div>
          <div className="flex flex-col space-y-6 pt-4">
            <div className="flex flex-col space-y-4 w-full max-w-md">
              <h1 className="flex items-center space-x-3 text-2xl lg:text-4xl xl:text-5xl font-extrabold leading-snug tracking-wide text-primary-blue max-w-xl">
                <span>Hi</span> <WavingHand />
              </h1>
              <p className="tracking-wide leading-7">My name is <span className="font-semibold">Joshua Galit</span> and I'm a self taught web developer using modern technologies. Addicted in GitHub contribution and commits.</p>
            </div>
            <div className="flex flex-wrap  space-x-3 md:space-x-4">
              <motion.button 
                className="bg-gradient-to-tr from-yellow-400 to-fuchsia-600 text-white px-4 xl:px-9 py-3 rounded-lg text-lg font-medium focus:outline-none transition ease-in-out duration-200 hover:shadow-xl"
                whileHover={{ y: -4 }}
                onClick={() => router.push('/projects') }
              >
                <span className="line-clamp-1">Portfolio</span>
              </motion.button>
              <motion.button 
                className="text-secondary-blue hover:text-fuchsia-600 hover:indigo-600 px-7 xl:px-12 py-3 border hover:border-fuchsia-600 rounded-lg text-lg font-medium focus:outline-none transition ease-in-out duration-200 hover:shadow-xl dark:text-gray-200 dark:border-gray-400 dark:hover:text-white"
                whileHover={{ y: -4 }}
                onClick={() => router.push('/contact') }
              >
                <span className="line-clamp-1">Contact</span>
              </motion.button>
            </div>
          </div>
        </section>
      </Layout>
    </> 
  )
}

function WavingHand () {
  return (
    <motion.div
      animate={{ rotate: 15 }}
      transition={{
        yoyo: Infinity,
        from: 0,
        duration: 0.5,
        ease: "easeInOut",
        type: "tween",
      }}
    >
      👋
    </motion.div>
  )
}