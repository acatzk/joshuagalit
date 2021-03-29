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
    }
  }
`