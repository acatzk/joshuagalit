import { gql } from 'graphql-request'

export const INSERT_MAIL_MUTATION = gql`
  mutation InsertMailMutation($name: String!, $email: String!, $message: String!) {
    insert_email_employer(objects: {name: $name, email: $email, message: $message}) {
      affected_rows
      returning {
        id
      }
    }
  }
`