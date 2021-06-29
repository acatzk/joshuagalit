import Image from 'next/image';
import { NextPage } from 'next';
import { services } from '~/data';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import Layout from '~/layouts/defaultLayout';
import { fadeInUp, stagger } from '~/animation';
import ServiceCard from '~/components/ServiceCard';
import AboutPageLayout from '~/layouts/aboutPageLayout';

interface IndexPageProps {}

const Index: NextPage<IndexPageProps> = () => {
  const router = useRouter();

  return (
    <Layout
      headTitle="About | Joshua Galit"
      metaDescription="About Joshua Galit"
    >
      <AboutPageLayout>
        <div className="flex flex-col px-6 pt-1 flex-grow">
          <h5 className="my-3 font-medium text-gray-800 dark:text-gray-300">
            My name is Joshua Galit and I'm a self taught web developer using
            modern technologies. Ability to follow established procedures and
            work under little or no supervision. Follow and Star me on GitHub 💕
          </h5>
          <motion.div
            variants={stagger}
            className="relative p-4 mt-5 bg-gray-100 dark:bg-gray-800 dark:bg-black-100 flex-grow rounded-lg transition ease-in-out duration-700"
            style={{ marginLeft: '-1.5rem', marginRight: '-1.5rem' }}
          >
            <h6 className="my-3 pl-1 text-xl font-bold tracking-wide text-gray-900 dark:text-gray-100">
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
      </AboutPageLayout>
    </Layout>
  );
};

export default Index;
