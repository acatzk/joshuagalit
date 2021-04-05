import ProjectItem from './ProjectItem'

export default function ProjectList ({ projects }) {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700 px-4">
      {projects.map(project => <ProjectItem key={project.id} {...project} />)}
    </div>
  )
}