import React from 'react'
import ProjectCommentItem from './ProjectCommentItem'

type Props = {
  projects: {
    id: string
    title: string
    description: string
    demo_url: string
    created_at: string
    project_image_url: string
    source_code_url: string
    slug: string
    comments: {
      id: string
      comment: string
      created_at: string
      user: {
        id: string
        displayName: string
        avatarUrl: string
      }
    }
    views_aggregate: {
      aggregate: {
        viewsCount: number
      }
    }
    comments_aggregate: {
      aggregate: {
        commentsCount: number
      }
    }
  }
}

const ProjectCommentList: React.FC<Props> = (props) => {
  const { projects } = props
  const { comments } = projects[0]

  if (!projects) return <p>No comment yet</p>

  return comments.map((comment: any, i: number) => (
    <ProjectCommentItem key={i} {...comment} user={comment?.user} />
  ))
}

export default ProjectCommentList
