import Head from 'next/head'
import { motion } from 'framer-motion'
import Layout from '~/layouts/default'
import ContactForm from '~/components/ContactForm'
import { useToasts } from 'react-toast-notifications'
import { INSERT_MAIL_MUTATION } from '~/graphql/mutations'
import { hasuraAdminClient } from '~/lib/hasura-admin-client'

export default function ContactPage() {

  const { addToast } = useToasts()

  const handleContact = async ({ name, email, message }, e) => {
    try {

      await hasuraAdminClient.request(INSERT_MAIL_MUTATION, {
        name,
        email,
        message
      })

      e.target.reset()
      addToast('Your message successfully sent!', { appearance: 'success', autoDismiss: true })
      
    } catch (err) {
      console.error(err)
    }
  }

  const contacts = [
    {
      icon: <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z">
              </path>
            </svg>,
      text: '+63 9657268947'
    },
    {
      icon: <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
            </svg>,
      text: 'joshuaimalay@gmail.com'
    },
    {
      icon: <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd">
              </path>
            </svg>,
      text: 'Bato, Leyte'
    }
  ]

  return (
    <>
      <Head>
        <title>Contact | Joshua Galit</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="w-full max-w-5xl m-auto px-4 py-4">
          <div className="w-full h-full opacity-30">
            <img src="/svgs/buble.svg" disabled className="absolute inset-0 w-full h-full" />
          </div>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col md:flex-row items-start md:items-center justify-between space-y-8"
          >
            <div className="flex flex-col space-y-10 md:space-y-20">
              <div className="flex flex-col space-y-5 md:space-y-8 w-full max-w-md z-50">
                <h1 className="font-extrabold text-3xl md:text-5xl text-blue-twitter">Contact me</h1>
                <p className="text-base text-gray-900 dark:text-white">Send me a message and I will get back to you within 24 hours.</p>
              </div>
              <div className="flex flex-col space-y-3 md:space-y-5 z-50">
                {contacts.map(({ icon, text }, i) => (
                  <div key={i} className="flex items-center space-x-6 text-gray-900 dark:text-white">
                    <span className="text-blue-twitter">
                      { icon }
                    </span>
                    <p className="text-base">{ text }</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-lg w-full max-w-full md:max-w-lg px-8 py-10 bg-white shadow-md dark:bg-gray-900 z-50">
              <div className="relative w-full">
                <ContactForm onSubmit={ handleContact } />
              </div>
            </div>
          </motion.div>
        </div>
      </Layout>
    </> 
  )
}