import React from 'react';
import { AiOutlineLike } from 'react-icons/ai';
import { BiComment } from 'react-icons/bi';
import { RiShareForwardLine } from 'react-icons/ri';
import TimeAgoFormat from '~/lib/react-timeago';
import { IoMdGlobe } from 'react-icons/io';
import { BsThreeDots } from 'react-icons/bs';
import Image from 'next/image';

const DiaryItem: React.FC<{}> = () => {
  let image =
    'https://instagram.fdvo1-1.fna.fbcdn.net/v/t51.2885-15/fr/e15/s1080x1080/209268471_252863646643015_7559986448139802889_n.jpg?tp=1&_nc_ht=instagram.fdvo1-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=Su3APeTPvZUAX-OjUok&edm=AIQHJ4wBAAAA&ccb=7-4&oh=74cd112ab0a2ac17933cf138420d4c96&oe=60E38ABD&_nc_sid=7b02f1';

  return (
    <div className="mx-auto max-w-xl border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-md bg-white dark:bg-dark-dim transition ease-in-out duration-700">
      <div className="flex items-center justify-between p-2 px-3">
        <div className="flex items-center space-x-3">
          <Image
            src="/images/my-animated-avatar.jpg"
            height={36}
            width={36}
            alt="Avatar"
            className="rounded-full"
          />
          <div className="flex flex-col">
            <div className="flex items-center space-x-2">
              <h1 className="text-sm font-semibold line-clamp-1 text-black dark:text-white">
                Joshua Galit
              </h1>
              <span>
                <IoMdGlobe className="w-3.5 h-3.5 text-gray-600 dark:text-gray-400" />
              </span>
              <span className="text-xs font-normal text-gray-600 dark:text-gray-400 line-clamp-1">
                <TimeAgoFormat date="July 27, 2021" />
              </span>
            </div>
            <div className="flex items-center text-gray-600 dark:text-gray-400 space-x-1">
              <h2 className="leading-none font-normal text-xs ">Posted</h2>
              <span className="leading-tight">&middot;</span>
              <span className="text-xs font-medium line-clamp-1">
                Jun 01, 2021
              </span>
            </div>
          </div>
        </div>
        <button className="focus:outline-none transform active:scale-95 text-gray-600 dark:text-gray-400">
          <BsThreeDots className="w-4 h-4" />
        </button>
      </div>
      <div>
        <Image
          src={image}
          width={508}
          height={500}
          layout="responsive"
          objectFit="cover"
          quality={100}
        />
      </div>
      <div>
        <div className="flex items-center justify-center px-1 my-1">
          <button className="flex items-center justify-center space-x-2 p-1 w-full rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400 focus:outline-none transform active:scale-95 transition ease-in-out duration-150">
            <AiOutlineLike className="w-5 h-5" />
            <span className="font-medium">Like</span>
          </button>
          <button className="flex items-center justify-center space-x-2 p-1 w-full rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400 focus:outline-none transform active:scale-95 transition ease-in-out duration-150">
            <BiComment className="w-5 h-5" />
            <span className="font-medium">Comment</span>
          </button>
          <button className="flex items-center justify-center space-x-2 p-1 w-full rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400 focus:outline-none transform active:scale-95 transition ease-in-out duration-150">
            <RiShareForwardLine className="w-5 h-5" />
            <span className="font-medium">Share</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DiaryItem;
