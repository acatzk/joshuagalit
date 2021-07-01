import { ImLocation2 } from 'react-icons/im';
import { FiUsers, FiStar, FiFigma, FiMonitor, FiServer } from 'react-icons/fi';
import {
  IContact,
  INavigation,
  IEmoji,
  IGitHubLink,
  IHeaderTab,
  IService,
  ISkill,
} from './type';
import {
  FaReact,
  FaVuejs,
  FaGithub,
  FaLinkedin,
  FaPhoneAlt,
  FaStackOverflow,
} from 'react-icons/fa';
import { DiJavascript1 } from 'react-icons/di';
import { MdDeveloperMode, MdEmail } from 'react-icons/md';
import { AiOutlineAntDesign, AiOutlineApi } from 'react-icons/ai';
import {
  SiNextDotJs,
  SiNuxtDotJs,
  SiAdobepremiere,
  SiAdobephotoshop,
  SiGooglesearchconsole,
} from 'react-icons/si';

export const contacts: IContact[] = [
  {
    Icon: FaPhoneAlt,
    text: '+63 9657268947',
  },
  {
    Icon: MdEmail,
    text: 'joshuaimalay@gmail.com',
  },
  {
    Icon: ImLocation2,
    text: 'Bato, Leyte',
  },
];

export const navigations: INavigation[] = [
  {
    text: 'About',
    href: '/',
  },
  {
    text: 'Diary',
    href: '/diary',
  },
  {
    text: 'Blog',
    href: '/blog',
  },
  {
    text: 'Projects',
    href: '/projects',
  },
  {
    text: 'Contact',
    href: '/contact',
  },
];

export const socialLinks = [
  {
    icon: (
      <FaGithub className="w-6 h-6 text-[#333] text-opacity-75 hover:text-opacity-100 dark:text-gray-400 dark:hover:text-white transition ease-in-out duration-200" />
    ),
    href: 'https://github.com/acatzk',
  },
  {
    icon: (
      <FaLinkedin className="w-6 h-6 text-[#0077B5] text-opacity-75 hover:text-opacity-100 dark:text-gray-400 dark:hover:text-white transition ease-in-out duration-200" />
    ),
    href: 'https://www.linkedin.com/in/joshua-galit-7b6b84200/',
  },
  {
    icon: (
      <FaStackOverflow className="w-6 h-6 text-[#f48024] text-opacity-75 hover:text-opacity-100 dark:text-gray-400 dark:hover:text-white transition ease-in-out duration-200" />
    ),
    href: 'https://stackoverflow.com/users/14108225/joshua-galit',
  },
];

export const emojis: IEmoji[] = [
  {
    icon: '/svgs/emoji/amaze.svg',
    text: 'amaze',
  },
  {
    icon: '/svgs/emoji/happy.svg',
    text: 'happy',
  },
  {
    icon: '/svgs/emoji/unsatisfied.svg',
    text: 'unsatisfied',
  },
  {
    icon: '/svgs/emoji/cry.svg',
    text: 'cry',
  },
];

export const githubStats: IGitHubLink[] = [
  {
    id: 1,
    Icon: FiUsers,
    count: '159',
    label: 'followers',
  },
  {
    id: 2,
    count: '1k',
    label: 'followers',
  },
  {
    id: 3,
    Icon: FiStar,
    count: '593',
  },
];

export const navbarTabs: IHeaderTab[] = [
  {
    title: 'About',
    route: '/',
  },
  {
    title: 'Resume',
    route: '/resume',
  },
];

export const services: IService[] = [
  {
    title: 'Frontend Development',
    about:
      'I can build a beatiful and scalable SPA React.js, Next.js and Vue.js',
    Icon: FiMonitor,
  },
  {
    title: 'Backend Development',
    about:
      'Handle database, server, API using Express & other popular frameworks',
    Icon: FiServer,
  },
  {
    title: 'API Development',
    about: 'I can develop robust REST API using Node API and Graphql API',
    Icon: AiOutlineApi,
  },
  {
    title: 'Competitive Coder',
    about: 'A daily problem solver in freecodecamp and stackoverflow',
    Icon: MdDeveloperMode,
  },
  {
    title: 'UI/UX designer',
    about: 'Stunning user interface designer using Figma and Framer',
    Icon: AiOutlineAntDesign,
  },
  {
    title: 'Search Engine Optimization',
    about: "Improve a website's ranking on search engines like Google",
    Icon: SiGooglesearchconsole,
  },
];

export const languages: ISkill[] = [
  {
    name: 'JavaScript',
    level: '40%',
    Icon: DiJavascript1,
  },
  {
    name: 'React.js',
    level: '60%',
    Icon: FaReact,
  },
  {
    name: 'Next.js',
    level: '95%',
    Icon: SiNextDotJs,
  },
  {
    name: 'Vue.js',
    level: '85%',
    Icon: FaVuejs,
  },
  {
    name: 'Nuxt.js',
    level: '65%',
    Icon: SiNuxtDotJs,
  },
];

export const tools: ISkill[] = [
  {
    name: 'Premiere Pro',
    level: '90%',
    Icon: SiAdobepremiere,
  },
  {
    name: 'Photoshop',
    level: '70%',
    Icon: SiAdobephotoshop,
  },
  {
    name: 'Figma',
    level: '25%',
    Icon: FiFigma,
  },
];
