import gql from "graphql-tag";
const ARTICLES_QUERY = gql`  
  query Articles {
    articles {
      id
      title
      slug
      category {
        id
        name
      }
      image {
        url
      }
    }
  }
`;
export default ARTICLES_QUERY;