import ProjectItem from './ProjectItem';

interface ProjecdtListProps {
  projects: [];
}

const ProjectList: React.FC<ProjecdtListProps> = ({ projects }) => {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700 px-4">
      {projects.map((project, i) => (
        <ProjectItem key={i} {...project} />
      ))}
    </div>
  );
};

export default ProjectList;
