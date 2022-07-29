const { gql } = require('apollo-server-express');
const typeDefs = gql`
  type Page {
    _id: ID
    pageTitle: String
    pageHeading: String
    content: String
  }

  type Query {
    pages: [Page!]!
    page(pageTitle: String): Page
  }
  type Mutation {
    addPage(pageTitle: String!, pageHeading: String!, content: String!): Page
    updatePage(pageTitle: String!, pageHeading: String!, content: String): Page
  }
`;

module.exports = typeDefs;
