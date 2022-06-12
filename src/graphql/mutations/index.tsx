import { gql } from 'graphql-request'

export const DELETE_MAIL_MUTATION = gql`
  mutation DeleteEmailById($id: uuid!) {
    delete_email_employer(where: { id: { _eq: $id } }) {
      affected_rows
      returning {
        id
      }
    }
  }
`

export const INSERT_FEEDBACK_MUTATION = gql`
  mutation InsertFeedbackMutation($name: String!, $message: String!, $emoji: String) {
    insert_feedbacks_one(object: { name: $name, message: $message, emoji: $emoji }) {
      id
    }
  }
`

export const INSERT_VIEWS_MUTATION = gql`
  mutation InsertViewsMutation($project_id: uuid) {
    insert_views_one(object: { project_id: $project_id }) {
      id
      project_id
    }
  }
`

export const INSERT_PROJECT_COMMENT_MUTATION = gql`
  mutation InsertProjectCommentMutation($project_id: uuid!, $name: String!, $comment: String!) {
    insert_project_comments_one(
      object: { project_id: $project_id, name: $name, comment: $comment }
    ) {
      id
      name
      comment
    }
  }
`

export const DELETE_PROJECT_COMMENT_BY_ID_MUTATION = gql`
  mutation DeleteProjectCommentByIdMutation($id: uuid!) {
    delete_project_comments_by_pk(id: $id) {
      id
      name
      project_id
    }
  }
`

export const INSERT_BLOG_VIEWS_MUTATION = gql`
  mutation InsertBlogViewsMutation($slug: String!) {
    insert_blog_views(objects: { slug: $slug }) {
      returning {
        id
        slug
      }
    }
  }
`
