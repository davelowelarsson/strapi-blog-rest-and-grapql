import gql from 'graphql-tag';
const CATEGORY_ARTICLES_QUERY = gql`  
  query Category($id: ID!){
    category(id: $id) {
      name
      articles {
        id
        slug
        title
        content
        image {
          url
        }
        category {
          id
          slug
          name
        }
      }
    }
  }
`;
export default CATEGORY_ARTICLES_QUERY;