import gql from 'graphql-tag';

export const QUERY_ME = gql`
{
  me {
    _id
  }
}
`

// export const trainers = gql`

// `