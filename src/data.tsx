import { MdEmail } from 'react-icons/md'
import { FaPhoneAlt } from 'react-icons/fa'
import { ImLocation2 } from 'react-icons/im'
import { IContact, INavigation, ISocialLink, IEmoji } from './type'
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

export const socialLinks:ISocialLink[] = [
  {
    Icon: FaFacebook,
    href: 'https://www.facebook.com/acatzk'
  },
  {
    Icon: FaTwitter,
    href: 'https://twitter.com/angryboy_19'
  },
  {
    Icon: FaGithub,
    href: 'https://github.com/acatzk'
  },
  {
    Icon: FaLinkedin,
    href: 'https://www.linkedin.com/in/joshua-galit-7b6b84200/'
  },
  {
    Icon: FaDribbble,
    href: 'https://dribbble.com/angryboy'
  },
  {
    Icon: FaStackOverflow,
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