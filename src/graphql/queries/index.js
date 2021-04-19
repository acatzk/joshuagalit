import { gql } from 'graphql-request'

export const GET_PROJECT_QUERY = gql`
  query GetProjectQuery {
    projects(order_by: {created_at: desc}) {
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
          viewsCount: count
        }
      }
      comments_aggregate {
        aggregate {
          commentsCount: count
        }
      }
    }
  }
`

export const GET_CLIENT_EMAIL_QUERY = gql`
  query GetEmailQuery {
    email_employer(order_by: {created_at: desc}) {
      id
      email
      message
      name
      created_at
    }
  }
`

export const GET_PROJECT_SLUGs = gql`
  query GetProjectBySlugs {
    projects {
      slug
    }
  }
`

export const GET_PROJECT_BY_SLUG_QUERY = gql`
  query GetProjectBySlugQuery($slug: String) {
    projects(order_by: {created_at: desc}, where: {slug: {_eq: $slug}}) {
      id
      title
      description
      demo_url
      created_at
      project_image_url
      source_code_url
      slug
      comments(order_by: {created_at: desc}) {
        id
        name
        comment
        created_at
      }
      views_aggregate {
        aggregate {
          count
        }
      }
    }
  }
`