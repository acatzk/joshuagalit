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

export const DELETE_MAIL_MUTATION = gql`
  mutation DeleteEmailById($id: uuid!) {
    delete_email_employer(where: {id: {_eq: $id}}) {
      affected_rows
      returning {
        id
      }
    }
  }
`

export const INSERT_FEEDBACK_MUTATION = gql`
  mutation InsertFeedbackMutation($name: String!, $message: String!, $emoji: String) {
    insert_feedbacks(objects: {name: $name, message: $message, emoji: $emoji}) {
      affected_rows
      returning {
        id
      }
    }
  }
`