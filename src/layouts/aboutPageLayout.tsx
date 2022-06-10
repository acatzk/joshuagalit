import React from 'react'
import Navbar from '~/components/index/Navbar'
import Sidebar from '~/components/index/Sidebar'

type Props = {
  children: React.ReactNode
}

const AboutPageLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex items-center justify-center h-screen min-h-screen px-4 py-4 md:py-0">
      <div className="grid grid-cols-12 gap-6 w-full max-w-6xl">
        <div className="p-4 text-center col-span-12 lg:col-span-4 xl:col-span-3 rounded-2xl">
          <Sidebar />
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
