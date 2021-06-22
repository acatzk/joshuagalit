import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface SponsorCardProps {}

const SponsorCard: React.FC<SponsorCardProps> = () => {
  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-500 p-6 rounded-lg max-w-2xl transition ease-in-out duration-700">
      <div className="flex flex-start">
        <div className="flex flex-row space-x-4">
          <div className="flex-shrink-0  overflow-hidden">
            <Image
              className="rounded-lg border border-gray-200 dark:border-gray-700"
              src="/images/my-avatar.jpg"
              alt="My Avatar Picture"
              width={56}
              height={56}
              layout="intrinsic"
              quality={100}
            />
          </div>
          <div className="flex flex-row justify-between flex-wrap md:flex-nowrap space-x-0 md:space-x-2 space-y-2 md:space-y-0">
            <div className="space-y-2">
              <h1 className="text-xl font-semibold max-w-sm">
                Sponsor Joshua Galit on GitHub Sponsors
              </h1>
              <p className="tracking-wide text-gray-600 dark:text-gray-400 text-sm">
                Hi 👋 I'm{' '}
                <span className="font-semibold text-blue-twitter">
                  Joshua Galit
                </span>{' '}
                and I'm a self taught web developer using modern technologies.
                Ability to follow established procedures and work under little
                or no supervision. Follow and Star me on{' '}
                <a
                  href="https://github.com/acatzk"
                  target="_blank"
                  className="font-semibold text-blue-twitter hover:underline"
                >
                  GitHub
                </a>{' '}
                💕
              </p>
            </div>
            <div>
              <motion.button
                whileHover={{ y: -2 }}
                className="flex items-center space-x-2 bg-white border rounded-lg text-gray-900 px-4 py-1.5 hover:shadow-xl focus:outline-none"
              >
                <HeartIcon className="w-4 h-4 text-[#ea4aaa] fill-current transition ease-in-out duration-150" />
                <span className="text-sm">Sponsor</span>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponsorCard;

const HeartIcon: React.FC<{ className: string }> = ({ className }) => {
  return (
    <svg className={className} viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M4.25 2.5c-1.336 0-2.75 1.164-2.75 3 0 2.15 1.58 4.144 3.365 5.682A20.565 20.565 0 008 13.393a20.561 20.561 0 003.135-2.211C12.92 9.644 14.5 7.65 14.5 5.5c0-1.836-1.414-3-2.75-3-1.373 0-2.609.986-3.029 2.456a.75.75 0 01-1.442 0C6.859 3.486 5.623 2.5 4.25 2.5zM8 14.25l-.345.666-.002-.001-.006-.003-.018-.01a7.643 7.643 0 01-.31-.17 22.075 22.075 0 01-3.434-2.414C2.045 10.731 0 8.35 0 5.5 0 2.836 2.086 1 4.25 1 5.797 1 7.153 1.802 8 3.02 8.847 1.802 10.203 1 11.75 1 13.914 1 16 2.836 16 5.5c0 2.85-2.045 5.231-3.885 6.818a22.08 22.08 0 01-3.744 2.584l-.018.01-.006.003h-.002L8 14.25zm0 0l.345.666a.752.752 0 01-.69 0L8 14.25z"
      ></path>
    </svg>
  );
};
