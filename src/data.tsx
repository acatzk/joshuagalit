import { MdEmail } from 'react-icons/md'
import { FaPhoneAlt } from 'react-icons/fa'
import { ImLocation2 } from 'react-icons/im'
import { IContact, INavigation, IEmoji } from './type'
import { FaFacebook, FaTwitter, FaGithub, FaLinkedin, FaDribbble, FaStackOverflow } from 'react-icons/fa'

export const contacts:IContact[] = [
  {
    Icon: FaPhoneAlt,
    text: '+63 9657268947'
  },
  {
    Icon: MdEmail,
    text: 'joshuaimalay@gmail.com'
  },
  {
    Icon: ImLocation2,
    text: 'Bato, Leyte'
  }
]

export const navigations:INavigation[] = [
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
    icon: <FaFacebook className="w-6 h-6 text-[#4267B2] text-opacity-75 hover:text-opacity-100 dark:text-gray-400 dark:hover:text-white transition ease-in-out duration-200" />,
    href: 'https://www.facebook.com/acatzk'
  },
  {
    icon: <FaTwitter className="w-6 h-6 text-[#1DA1F2] text-opacity-75 hover:text-opacity-100 dark:text-gray-400 dark:hover:text-white transition ease-in-out duration-200" />,
    href: 'https://twitter.com/angryboy_19'
  },
  {
    icon: <FaGithub className="w-6 h-6 text-[#333] text-opacity-75 hover:text-opacity-100 dark:text-gray-400 dark:hover:text-white transition ease-in-out duration-200" />,
    href: 'https://github.com/acatzk'
  },
  {
    icon: <FaLinkedin className="w-6 h-6 text-[#0077B5] text-opacity-75 hover:text-opacity-100 dark:text-gray-400 dark:hover:text-white transition ease-in-out duration-200" />,
    href: 'https://www.linkedin.com/in/joshua-galit-7b6b84200/'
  },
  {
    icon: <FaDribbble className="w-6 h-6 text-[#ea4c89] text-opacity-75 hover:text-opacity-100 dark:text-gray-400 dark:hover:text-white transition ease-in-out duration-200" />,
    href: 'https://dribbble.com/angryboy'
  },
  {
    icon: <FaStackOverflow className="w-6 h-6 text-[#f48024] text-opacity-75 hover:text-opacity-100 dark:text-gray-400 dark:hover:text-white transition ease-in-out duration-200" />,
    href: 'https://stackoverflow.com/users/14108225/joshua-galit'
  }
]

export const emojis:IEmoji[] = [
  {
    icon: '/svgs/emoji/amaze.svg',
    text: 'amaze'
  },
  {
    icon: '/svgs/emoji/happy.svg',
    text: 'happy'
  },
  {
    icon: '/svgs/emoji/unsatisfied.svg',
    text: 'unsatisfied'
  },
  {
    icon: '/svgs/emoji/cry.svg',
    text: 'cry'
  }
]