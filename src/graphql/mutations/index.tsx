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
    insert_feedbacks(objects: { name: $name, message: $message, emoji: $emoji }) {
      affected_rows
      returning {
        id
      }
    }
  }
`

export const INSERT_VIEWS_MUTATION = gql`
  mutation InsertViewsMutation($project_id: uuid) {
    insert_views(objects: { project_id: $project_id }) {
      returning {
        id
        project {
          id
          title
          description
          demo_url
          created_at
          project_image_url
          source_code_url
          slug
          views_aggregate {
            aggregate {
              count
            }
          }
          comments_aggregate {
            aggregate {
              commentsCount: count
            }
          }
          comments(order_by: { created_at: desc }) {
            id
            name
            comment
            created_at
          }
        }
      }
    }
  }
`

export const INSERT_PROJECT_COMMENT_MUTATION = gql`
  mutation InsertProjectCommentMutation($project_id: uuid!, $name: String!, $comment: String!) {
    insert_project_comments(objects: { project_id: $project_id, name: $name, comment: $comment }) {
      returning {
        id
        name
        comment
        project_id
        created_at
        project {
          id
          title
          description
          demo_url
          created_at
          project_image_url
          source_code_url
          slug
          views_aggregate {
            aggregate {
              count
            }
          }
          comments_aggregate {
            aggregate {
              commentsCount: count
            }
          }
          comments(order_by: { created_at: desc }) {
            id
            name
            comment
            created_at
          }
        }
      }
    }
  }
`

export const DELETE_PROJECT_COMMENT_BY_ID_MUTATION = gql`
  mutation DeleteProjectCommentByIdMutation($id: uuid) {
    delete_project_comments(where: { id: { _eq: $id } }) {
      returning {
        id
        project {
          id
          title
          description
          demo_url
          created_at
          project_image_url
          source_code_url
          slug
          views_aggregate {
            aggregate {
              count
            }
          }
          comments_aggregate {
            aggregate {
              commentsCount: count
            }
          }
          comments(order_by: { created_at: desc }) {
            id
            name
            comment
            created_at
          }
        }
      }
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
