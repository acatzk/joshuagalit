import { IconType } from 'react-icons';

export interface IContact {
  Icon: IconType;
  text: string;
}

export interface INavigation {
  text: string;
  href: string;
}

export interface IEmoji {
  icon: string;
  text: string;
}

export interface IGitHubLink {
  id?: number;
  Icon?: IconType;
  count: string;
  label?: string;
}
