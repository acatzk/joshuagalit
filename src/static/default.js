import { 
  FacebookIcon,
  TwitterIcon,
  LinkedIn,
  DribbleIcon,
  GitHubIcon,
  StackOverflowIcon
} from '~/utils/Icons'

export const navigations = [
  {
    text: 'About',
    href: '/'
  },
  {
    text: 'Blog',
    href: '/blog'
  },
  {
    text: 'Projects',
    href: '/projects'
  },
  {
    text: 'Contact',
    href: '/contact'
  }
]

export const socialLinks = [
  {
    icon: <FacebookIcon className="w-6 h-6 text-[#4267B2] text-opacity-75 hover:text-opacity-100 dark:text-gray-400 dark:hover:text-white transition ease-in-out duration-200" />,
    href: 'https://www.facebook.com/acatzk'
  },
  {
    icon: <TwitterIcon className="w-6 h-6 text-[#1DA1F2] text-opacity-75 hover:text-opacity-100 dark:text-gray-400 dark:hover:text-white transition ease-in-out duration-200" />,
    href: 'https://twitter.com/angryboy_19'
  },
  {
    icon: <GitHubIcon className="w-6 h-6 text-[#333] text-opacity-75 hover:text-opacity-100 dark:text-gray-400 dark:hover:text-white transition ease-in-out duration-200" />,
    href: 'https://github.com/acatzk'
  },
  {
    icon: <LinkedIn className="w-6 h-6 text-[#0077B5] text-opacity-75 hover:text-opacity-100 dark:text-gray-400 dark:hover:text-white transition ease-in-out duration-200" />,
    href: 'https://www.linkedin.com/in/joshua-galit-7b6b84200/'
  },
  {
    icon: <DribbleIcon className="w-6 h-6 text-[#ea4c89] text-opacity-75 hover:text-opacity-100 dark:text-gray-400 dark:hover:text-white transition ease-in-out duration-200" />,
    href: 'https://dribbble.com/angryboy'
  },
  {
    icon: <StackOverflowIcon className="w-6 h-6 fill-current text-opacity-75 hover:text-opacity-100 text-[#f48024] dark:text-gray-400 dark:hover:text-white transition ease-in-out duration-200" />,
    href: 'https://stackoverflow.com/users/14108225/joshua-galit'
  }
]