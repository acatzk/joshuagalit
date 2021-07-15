import React from 'react';
import Image from 'next/image';
import Moment from 'react-moment';
import { FiEye } from 'react-icons/fi';
import ProjectComment from './ProjectComment';
import { BiMessageRounded } from 'react-icons/bi';
import SponsorCard from '~/components/SponsorCard';

interface ProjectPostProps {
  projects: any;
  mutate: any;
}

const ProjectPost: React.FC<ProjectPostProps> = ({ projects, mutate }) => {
  const {
    id,
    title,
    description,
    created_at,
    project_image_url,
    views_aggregate: {
      aggregate: { viewsCount },
    },
    comments_aggregate: {
      aggregate: { commentsCount },
    },
  } = projects[0];

  return (
    <div key={id} className="px-4 space-y-6 pb-10">
      <div className="flex items-center justify-center">
        <h1 className="font-semibold text-2xl md:text-3xl tracking-wide">
          {title}
        </h1>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="flex-shrink-0">
            <Image
              width={28}
              height={28}
              className="border-gray-200 dark:border-gray-700 rounded-full bg-gray-200 dark:bg-gray-800"
              src="/images/my-avatar.jpg"
              alt="My Profile Image"
              layout="intrinsic"
            />
          </div>
          <h1 className="text-sm tracking-tight text-gray-700 dark:text-gray-400 line-clamp-1">
            Joshua Galit / <Moment date={created_at} format="MMM DD, YYYY" />
          </h1>
        </div>
        <div className="flex items-center space-x-1 text-gray-500">
          <div
            className="flex items-center space-x-1 cursor-default"
            data-tip="Comments"
          >
            <span className="text-xs font-medium mt-0.5 line-clamp-1">
              {commentsCount}
            </span>
            <BiMessageRounded className="w-4 h-4" />
          </div>
          <span>&middot;</span>
          <div
            className="flex items-center space-x-1 cursor-default"
            data-tip="Views"
          >
            <span className="text-xs font-medium mt-0.5 line-clamp-1">
              {viewsCount}
            </span>
            <FiEye className="w-4 h-4" />
          </div>
        </div>
      </div>
      <div className="space-y-1">
        <h1 className="text-base text-gray-700 dark:text-gray-400">
          {description}
        </h1>
        <div className="flex-shrink-0 overflow-hidden rounded-lg ring-1 ring-gray-300 dark:ring-gray-600 relative">
          <Image
            src={project_image_url}
            width={1000}
            height={550}
            alt={title}
            layout="responsive"
            className="bg-gray-200 dark:bg-gray-800 transition ease-in-out duration-700"
          />
        </div>
      </div>
      <ProjectComment {...projects} mutate={mutate} />
      <SponsorCard />
    </div>
  );
};

export default ProjectPost;
