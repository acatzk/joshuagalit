import Header from '~/components/Header'
import Footer from '~/components/Footer'
import PerfectScrollbar from 'react-perfect-scrollbar'

export default function Layout ({ children }) {
  return (
    <div className="container mx-auto max-w-5xl w-full bg-white">
      <div className="flex flex-col justify-between h-screen">
        <Header />
        <main className="flex-1 overflow-y-auto">
          <PerfectScrollbar>
            { children }
          </PerfectScrollbar>  
        </main>
        <Footer />
      </div>
    </div>
  )
}