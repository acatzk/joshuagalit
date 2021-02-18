import Link from 'next/link'

export default function Header () {
  
  const links = [
    {
      title: "About",
      to: "/about"
    }
  ]

  return (
    <div className="flex items-center justify-between py-3 px-4 border-b border-gray-200">
      <Link href="/">
        <a className="uppercase text-xl font-light tracking-normal text-gray-700  ">
          Joshua<span className="font-bold">Galit</span>
        </a>
      </Link>
      <div>
        <ul className="flex items-center space-x-5">
          <li>
            <Link href="/about">
              <a className="text-lg text-gray-500 hover:text-gray-800 transition ease-in-out duration-150">About</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a className="text-lg text-gray-500 hover:text-gray-800 transition ease-in-out duration-150">Journal</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a className="text-lg text-gray-500 hover:text-gray-800 transition ease-in-out duration-150">Project</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a className="text-lg text-gray-500 hover:text-gray-800 transition ease-in-out duration-150">Blog</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a className="text-lg text-gray-500 hover:text-gray-800 transition ease-in-out duration-150">Contact</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}