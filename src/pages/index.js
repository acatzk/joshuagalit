import Head from 'next/head'
import { motion } from 'framer-motion'
import Layout from '~/layouts/default'
import { useRouter } from 'next/router'
import useProgressiveImg from '~/utils/useProgressiveImage'

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
        <div className="w-full h-full opacity-30 absolute">
          <img src="/svgs/buble.svg" disabled className="absolute inset-0 w-full h-full" />
        </div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="relative flex flex-col md:flex-row-reverse items-center justify-center mx-auto w-full max-w-7xl px-4 py-4 md:py-12 md:px-12"
        >
          <div className="pl-0 md:pl-10">
            <div className="p-1 bg-gradient-to-tr from-yellow-400 to-fuchsia-600 rounded-full">
              <img 
                src={src}
                className="max-w-full md:max-w-xs rounded-full bg-white p-1" 
                style={{
                  width: 300,
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
              <p className="tracking-wide leading-7">My name is <span className="font-semibold text-blue-twitter">Joshua Galit</span> and I'm a self taught web developer using modern technologies. Addicted in GitHub contributions and commits. Follow and Star me on <a href="https://github.com/acatzk" target="_blank" className="font-semibold text-blue-twitter hover:underline">GitHub</a> 💕</p>
            </div>
            <div className="flex flex-wrap  space-x-3 md:space-x-4">
              <motion.button 
                className="bg-blue-twitter text-white px-4 xl:px-9 py-3 rounded-full text-lg font-medium focus:outline-none transition ease-in-out duration-200 hover:shadow-xl"
                whileHover={{ y: -4 }}
                onClick={() => router.push('/projects') }
              >
                <span className="line-clamp-1">Projects</span>
              </motion.button>
              <motion.button 
                className="text-secondary-blue text-blue-twitter px-7 xl:px-10 py-3 border border-blue-twitter rounded-full text-lg font-medium focus:outline-none transition ease-in-out duration-200 hover:shadow-xl dark:text-white dark:border-white"
                whileHover={{ y: -4 }}
                onClick={() => router.push('/contact') }
              >
                <span className="line-clamp-1">Contact</span>
              </motion.button>
            </div>
          </div>
        </motion.div>
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