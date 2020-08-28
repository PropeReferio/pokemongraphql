const { gql } = require('apollo-server');

const typeDefs = gql`
type Query {
  pokemon(id: ID!): Pokemon!
  # pokemonByID(id: ID!): Pokemon
  me: User
#   launches: [Launch]!
#   launch(id: ID!): Launch
#   launchBySite(site: String!): Launch
#   launchesBySites(site: String!): [Launch]
#   me: User
}
# type Mutation {
#   bookTrips(launchIds: [ID]!): TripUpdateResponse!
#   cancelTrip(launchId: ID!): TripUpdateResponse!
#   login(email: String): String # login token
# }
# type TripUpdateResponse {
#   success: Boolean!
#   message: String
#   launches: [Launch]
# }
type Pokemon {
  id: ID!
  name: String!
  region: String
  type1: String!
  # type2: String
}
type User {
  id: ID!
  email: String!
}
# type Launch {
#   id: ID!
#   site: String
#   mission: Mission
#   rocket: Rocket
#   isBooked: Boolean!
# }
# type Rocket {
#   id: ID!
#   name: String
#   type: String
# }

# type User {
#   id: ID!
#   email: String!
#   trips: [Launch]!
# }

# type Mission {
#   name: String
#   missionPatch(size: PatchSize): String
# }

# enum PatchSize {
#   SMALL
#   LARGE
# }
`;

module.exports = typeDefs;