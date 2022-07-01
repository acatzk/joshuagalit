import { NextPage } from 'next'
import { toast } from 'react-toastify'
import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { useSignOut } from '@nhost/react'
import { journalList } from '~/mock/data'
import { nhost } from '~/lib/nhost-client'
import Layout from '~/layouts/defaultLayout'
import { routeAnimation } from '~/mock/animation'
import JournalList from '~/components/journal/JournalList'
import JournalHeader from '~/components/journal/JournalHeader'

const MyDay: NextPage = () => {
  const signOut = useSignOut()
  let [isLoginPage, setIsLoginPage] = useState(true)

  const handleLogout = () => signOut.signOut()

  const handleAuthSwitchForm = () => setIsLoginPage((isLoginPage = !isLoginPage))

  const handleSignAuth = async (data) => {
    const { display_name, email, password } = data

    if (isLoginPage) {
      const { session, error } = await nhost.auth.signIn({
        email: email,
        password: password
      })
      if (session) {
        handleAuthSwitchForm()
        toast.success('Successfully Login!')
      }
      if (error) {
        toast.error(`${error?.message}`)
      }
    } else {
      const { session, error } = await nhost.auth.signUp({
        email: email,
        password: password,
        options: {
          displayName: display_name
        }
      })
      if (session) {
        handleAuthSwitchForm()
        toast.success('Successfully Sign Up!')
      }
      if (error) {
        toast.error(`${error?.message}`)
      }
    }
  }

  return (
    <Layout
      headTitle="Journal | Joshua Galit"
      metaDescription="My Personal Journal Post every week during the work"
    >
      <motion.div
        variants={routeAnimation}
        initial="initial"
        animate="animate"
        exit="exit"
        className="inline-flex flex-col w-full mx-auto"
      >
        <JournalHeader
          isLoginPage={isLoginPage}
          actions={{ handleLogout, handleSignAuth, handleAuthSwitchForm }}
        />
        <JournalList journalList={journalList} />
      </motion.div>
    </Layout>
  )
}

export default MyDay
