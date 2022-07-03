import useSWR from 'swr'
import React from 'react'
import { GetStaticProps } from 'next'
import Navbar from '~/components/index/Navbar'
import Sidebar from '~/components/index/Sidebar'

type Props = {
  children: React.ReactNode
  prefetchedData?: any
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://api.github.com/users/acatzk')
  const prefetchedData = await res.json()

  return {
    props: {
      prefetchedData
    }
  }
}

const AboutPageLayout: React.FC<Props> = (props) => {
  const { children, prefetchedData } = props

  const { data } = useSWR(
    'https://api.github.com/users/acatzk',
    async (query) => await fetch(query).then((res) => res.json()),
    {
      fallbackData: prefetchedData
    }
  )

  return (
    <div className="flex items-center justify-center h-screen min-h-screen px-4 py-4 md:py-0">
      <div className="grid grid-cols-12 gap-6 w-full max-w-6xl">
        <div className="p-4 text-center col-span-12 lg:col-span-4 xl:col-span-3 rounded-2xl">
          <Sidebar githubDetails={data} />
        </div>
        <div className="flex flex-col col-span-12 lg:col-span-8 xl:col-span-9 rounded-2xl">
          <Navbar />
          {children}
        </div>
      </div>
    </div>
  )
}

export default AboutPageLayout
