import { ImLocation2 } from 'react-icons/im'
import { FiUsers, FiStar, FiFigma, FiMonitor, FiServer } from 'react-icons/fi'
import {
  IContact,
  INavigation,
  IEmoji,
  IGitHubLink,
  IHeaderTab,
  IService,
  ISkill,
  IDiary,
  ISocialLink
} from '~/mock/type'
import { FaReact, FaVuejs, FaGithub, FaLinkedin, FaPhoneAlt, FaStackOverflow } from 'react-icons/fa'
import { DiJavascript1 } from 'react-icons/di'
import { MdDeveloperMode, MdEmail } from 'react-icons/md'
import { AiOutlineAntDesign, AiOutlineApi } from 'react-icons/ai'
import {
  SiNextdotjs,
  SiNuxtdotjs,
  SiAdobepremierepro,
  SiAdobephotoshop,
  SiGooglesearchconsole
} from 'react-icons/si'

export const contacts: IContact[] = [
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

export const navigations: INavigation[] = [
  {
    text: 'About',
    href: '/'
  },
  {
    text: 'Journal',
    href: '/journal'
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

export const socialLinks: ISocialLink[] = [
  {
    Icon: FaGithub,
    href: 'https://github.com/acatzk',
    text: 'github'
  },
  {
    Icon: FaLinkedin,
    href: 'https://www.linkedin.com/in/joshua-galit-7b6b84200/',
    text: 'linkedin'
  },
  {
    Icon: FaStackOverflow,
    href: 'https://stackoverflow.com/users/14108225/joshua-galit',
    text: 'stackoverflow'
  }
]

export const emojis: IEmoji[] = [
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

export const githubStats: IGitHubLink[] = [
  {
    id: 1,
    Icon: FiUsers,
    count: '251',
    label: 'followers'
  },
  {
    id: 2,
    count: '1.2k',
    label: 'followers'
  },
  {
    id: 3,
    Icon: FiStar,
    count: '643'
  }
]

export const navbarTabs: IHeaderTab[] = [
  {
    title: 'About',
    route: '/'
  },
  {
    title: 'Resume',
    route: '/resume'
  }
]

export const services: IService[] = [
  {
    title: 'Frontend Development',
    about: 'I can build a beatiful and scalable SPA React.js, Next.js and Vue.js',
    Icon: FiMonitor
  },
  {
    title: 'Backend Development',
    about: 'Handle database, server, API using Express & other popular frameworks',
    Icon: FiServer
  },
  {
    title: 'API Development',
    about: 'I can develop robust REST API using Node API and Graphql API',
    Icon: AiOutlineApi
  },
  {
    title: 'Competitive Coder',
    about: 'A daily problem solver in freecodecamp and stackoverflow',
    Icon: MdDeveloperMode
  },
  {
    title: 'UI/UX designer',
    about: 'Stunning user interface designer using Figma and Framer',
    Icon: AiOutlineAntDesign
  },
  {
    title: 'Search Engine Optimization',
    about: "Improve a website's ranking on search engines like Google",
    Icon: SiGooglesearchconsole
  }
]

export const languages: ISkill[] = [
  {
    name: 'JavaScript',
    level: '40%',
    Icon: DiJavascript1
  },
  {
    name: 'React.js',
    level: '60%',
    Icon: FaReact
  },
  {
    name: 'Next.js',
    level: '95%',
    Icon: SiNextdotjs
  },
  {
    name: 'Vue.js',
    level: '85%',
    Icon: FaVuejs
  },
  {
    name: 'Nuxt.js',
    level: '65%',
    Icon: SiNuxtdotjs
  }
]

export const tools: ISkill[] = [
  {
    name: 'Premiere Pro',
    level: '90%',
    Icon: SiAdobepremierepro
  },
  {
    name: 'Photoshop',
    level: '70%',
    Icon: SiAdobephotoshop
  },
  {
    name: 'Figma',
    level: '25%',
    Icon: FiFigma
  }
]

export const journalList: IDiary[] = [
  {
    avatar_url: '/images/my-animated-avatar.jpg',
    name: 'Joshua Galit',
    created_at: 'July 1, 2021',
    post_caption: 'Wasted my 7 months building my personal site'
  },
  {
    avatar_url: '/images/my-animated-avatar.jpg',
    name: 'Joshua Galit',
    created_at: 'June 28, 2021',
    post_caption: 'Wasted my 7 months building my personal site',
    post_image: '/images/picture.jpg'
  },
  {
    avatar_url: '/images/picture.jpg',
    name: 'Joshua Galit',
    created_at: 'July 01, 2021',
    post_caption:
      'Et in sit irure nisi minim dolore laboris adipisicing sunt cupidatat proident labore labore ipsum. Incididunt excepteur ea occaecat ut quis mollit sit voluptate voluptate eiusmod commodo labore ad elit. Ad excepteur sit sunt nulla eu ex incididunt et mollit.',
    post_image: '/images/my-animated-avatar.jpg'
  },
  {
    avatar_url: '/images/my-animated-avatar.jpg',
    name: 'Joshua Galit',
    created_at: 'July 03, 2021',
    post_caption:
      'Et in sit irure nisi minim dolore laboris adipisicing sunt cupidatat proident labore labore ipsum. Incididunt excepteur ea occaecat ut quis mollit sit voluptate voluptate eiusmod commodo labore ad elit. Ad excepteur sit sunt nulla eu ex incididunt et mollit.',
    post_image: '/images/my-avatar.jpg'
  },
  {
    avatar_url: '/images/my-animated-avatar.jpg',
    name: 'Joshua Galit',
    created_at: 'July 08, 2021',
    post_caption: '',
    post_image: '/images/picture.jpg'
  },
  {
    avatar_url: '/images/my-animated-avatar.jpg',
    name: 'Joshua Galit',
    created_at: 'July 08, 2021',
    post_caption:
      'Et in sit irure nisi minim dolore laboris adipisicing sunt cupidatat proident labore labore ipsum. Incididunt excepteur ea occaecat ut quis mollit sit voluptate voluptate eiusmod commodo labore ad elit. Ad excepteur sit sunt nulla eu ex incididunt et mollit.',
    post_image: '/images/picture.jpg'
  }
]
