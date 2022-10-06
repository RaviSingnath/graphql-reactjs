import { gql } from '@apollo/client';

export const SEARCH_TOPIC = gql`
query ($q: String!){
  search(query: $q, type: REPOSITORY, first: 50) {
    repositoryCount
    nodes {
      ... on Repository {
        id
        name
        description
        url
        repositoryTopics(first: 50) {
          edges {
            node {
              topic {
                id
                name
                stargazerCount
              }
            }
          }
        }
      }
    }
  }
}
`;
