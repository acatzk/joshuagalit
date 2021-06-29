import { MdEmail } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';
import { ImLocation2 } from 'react-icons/im';
import { FiUsers, FiStar } from 'react-icons/fi';
import {
  IContact,
  INavigation,
  IEmoji,
  IGitHubLink,
  IHeaderTab,
  IService,
} from './type';
import {
  FaGithub,
  FaLinkedin,
  FaDribbble,
  FaStackOverflow,
} from 'react-icons/fa';
import { FaServer } from 'react-icons/fa';
import { RiComputerLine } from 'react-icons/ri';
import { MdDeveloperMode } from 'react-icons/md';
import { AiOutlineAntDesign, AiOutlineApi } from 'react-icons/ai';

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
      <FaDribbble className="w-6 h-6 text-[#ea4c89] text-opacity-75 hover:text-opacity-100 dark:text-gray-400 dark:hover:text-white transition ease-in-out duration-200" />
    ),
    href: 'https://dribbble.com/angryboy',
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
    title: 'Skills',
    route: '/skills',
  },
];

export const services: IService[] = [
  {
    title: 'Frontend Development',
    about:
      'I can build a beatiful and scalable SPA React.js, Next.js and Vue.js',
    Icon: RiComputerLine,
  },
  {
    title: 'Backend Development',
    about:
      'Handle database, server, API using Express & other popular frameworks',
    Icon: FaServer,
  },
  {
    title: 'API Development',
    about: 'I can develop robust REST API using django-rest-api & Node API',
    Icon: AiOutlineApi,
  },
  {
    title: 'Competitive Coder',
    about: 'A daily problem solver in HackerRank and <b>Leet Code</b>',
    Icon: MdDeveloperMode,
  },
  {
    title: 'UI/UX designer',
    about: 'Stunning user interface designer using Figma and Framer',
    Icon: AiOutlineAntDesign,
  },
  {
    title: 'Whatever',
    about:
      'Laboris sit ipsum amet culpa qui excepteur commodo dolor dolore sunt',
    Icon: RiComputerLine,
  },
];
