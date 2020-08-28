const { gql } = require('apollo-server');

const typeDefs = gql`
type Query {
  pokemon(id: ID!): Pokemon!
  originalPokes: [Pokemon]!
  startersByType(type: String!): [Pokemon]!
  originalsByType(type: String!): [Pokemon]!
  pokesByType(type: String!): [Pokemon]!
  me: User
}
type Pokemon {
  id: ID!
  name: String!
  region: String
  type1: String!
  type2: String
}
type User {
  id: ID!
  email: String!
}
`

module.exports = typeDefs;