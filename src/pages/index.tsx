import Head from 'next/head';
import Image from 'next/image';
import { NextPage } from 'next';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import Layout from '~/layouts/defaultLayout';
import { fadeInUp, stagger } from '~/animation';

interface IndexPageProps {}

const Index: NextPage<IndexPageProps> = () => {
  const router = useRouter();

  return (
    <Layout headTitle="About | Joshua Galit" metaContent="About Joshua Galit">
      <main style={{ height: '1000vh' }}>
        <section className="relative">
          <div className="w-full h-full opacity-30 absolute">
            <Image
              src="/svgs/buble.svg"
              layout="fill"
              alt="Bubble Background"
            />
          </div>
          <div className="h-screen min-h-screen relative flex flex-col lg:flex-row-reverse items-center justify-center mx-auto w-full max-w-7xl px-4 py-4 md:py-12 md:px-12 overflow-x-hidden">
            <motion.div
              variants={stagger}
              className="relative md:pl-10 w-64 h-64 md:w-96 md:h-96"
            >
              <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob"></div>
              <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-2000"></div>
              <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-4000"></div>
              <motion.div variants={fadeInUp} className="relative pl-0">
                <div className="p-1.5 bg-gradient-to-tr from-yellow-400 to-fuchsia-600 rounded-full">
                  <div className="bg-white p-1.5 rounded-full">
                    <Image
                      src="/images/picture.jpg"
                      width={300}
                      height={300}
                      layout="responsive"
                      className="rounded-full"
                      alt="Joshua Galit Profile"
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>
            <div className="flex flex-col space-y-6 pt-4">
              <motion.div
                variants={stagger}
                className="flex flex-col space-y-4 w-full max-w-md"
              >
                <motion.h1
                  variants={fadeInUp}
                  className="flex items-center space-x-3 text-2xl lg:text-4xl xl:text-5xl font-extrabold leading-snug tracking-wide text-primary-blue max-w-xl"
                >
                  <span className="font-extrabold">Hi</span> <WavingHand />
                </motion.h1>
                <motion.p
                  variants={fadeInUp}
                  className="tracking-wide leading-7"
                >
                  My name is{' '}
                  <span className="font-semibold text-blue-twitter">
                    Joshua Galit
                  </span>{' '}
                  and I'm a self taught web developer using modern technologies.
                  Ability to follow established procedures and work under little
                  or no supervision. Follow and Star me on{' '}
                  <a
                    href="https://github.com/acatzk"
                    target="_blank"
                    className="font-semibold text-blue-twitter hover:underline"
                  >
                    GitHub
                  </a>{' '}
                  💕
                </motion.p>
              </motion.div>
              <motion.div
                variants={stagger}
                className="flex flex-wrap  space-x-3 md:space-x-4"
              >
                <motion.button
                  variants={fadeInUp}
                  className="bg-blue-twitter text-white px-4 xl:px-9 py-3 rounded-full text-xl font-medium focus:outline-none transition ease-in-out duration-200 hover:shadow-xl"
                  onClick={() => router.push('/projects')}
                >
                  <span className="line-clamp-1">Projects</span>
                </motion.button>
                <motion.button
                  variants={fadeInUp}
                  className="text-secondary-blue text-blue-twitter px-7 xl:px-10 py-3 border border-blue-twitter rounded-full text-lg font-medium focus:outline-none transition ease-in-out duration-200 hover:shadow-xl dark:text-white dark:border-white"
                  onClick={() => router.push('/contact')}
                >
                  <span className="line-clamp-1">Contact</span>
                </motion.button>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Index;

const WavingHand = () => {
  return (
    <motion.div
      animate={{ rotate: 15 }}
      transition={{
        from: 0,
        duration: 0.5,
        ease: 'easeInOut',
        type: 'tween',
      }}
    >
      👋
    </motion.div>
  );
};
