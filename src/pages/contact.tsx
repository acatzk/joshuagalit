import Image from 'next/image'
import { NextPage } from 'next'
import emailjs from 'emailjs-com'
import { toast } from 'react-toastify'
import { contacts } from '~/mock/data'
import { motion } from 'framer-motion'
import Layout from '~/layouts/defaultLayout'
import { classNames } from '~/utils/classNames'
import ContactForm from '~/components/contact/ContactForm'
import { stagger, fadeInUp, routeAnimation } from '~/mock/animation'

const Contact: NextPage = () => {
  const handleContact = async ({ name, email, message }, e) => {
    try {
      toast.success(`Your message successfully sent!`)
      e.target.reset()
      // const mail = await emailjs.send(
      //   `${process.env.GMAIL_SERVICE_ID}`,
      //   `${process.env.GMAIL_TEMPLATE_ID}`,
      //   { name, email, message },
      //   `${process.env.GMAIL_USER_ID}`
      // )

      // if (mail) {

      // } else {
      //   addToast('Something went wrong try again!', {
      //     appearance: 'error',
      //     autoDismiss: true
      //   })
      // }
      // e.target.reset()
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <Layout headTitle="Contact | Joshua Galit" metaDescription="Contact through email or phone">
      <motion.div
        variants={routeAnimation}
        initial="initial"
        animate="animate"
        className="w-full max-w-5xl m-auto px-4 py-4 md:py-0"
      >
        <div className="w-full h-full opacity-30 absolute">
          <Image
            src="/svgs/buble.svg"
            layout="fill"
            blurDataURL="/svgs/buble.svg"
            placeholder="blur"
            alt="Bubble Background"
          />
        </div>
        <div
          className={classNames(
            'h-screen min-h-screen flex flex-col md:flex-row',
            'items-start md:items-center justify-between space-y-8'
          )}
        >
          <motion.div variants={stagger} className="flex flex-col space-y-10 md:space-y-20">
            <motion.div
              variants={fadeInUp}
              className="flex flex-col space-y-5 md:space-y-8 w-full max-w-md z-50"
            >
              <h1 className="font-black text-3xl md:text-5xl text-blue-twitter">Contact me</h1>
              <p className="text-base text-gray-900 dark:text-white">
                Send me a message and I will get back to you within 24 hours.
              </p>
            </motion.div>
            <motion.div variants={stagger} className="flex flex-col space-y-3 md:space-y-5 z-50">
              {contacts.map(({ Icon, text }, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="flex items-center space-x-6 text-gray-900 dark:text-white"
                >
                  <Icon className="w-6 h-6 text-blue-twitter" />
                  <p className="text-base">{text}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            className={classNames(
              'rounded-lg w-full max-w-full md:max-w-lg px-8 py-10',
              'bg-white shadow-md dark:bg-gray-900 z-50'
            )}
          >
            <div className="relative w-full">
              <ContactForm onSubmit={handleContact} />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </Layout>
  )
}

export default Contact
