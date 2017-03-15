import { makeExecutableSchema } from 'graphql-tools';
import resolvers from './resolvers';

const schema = `
type User {
    id: Int!
    username: String!
    password: String!
    email: String!
    penname: String
    gender: String
    date_of_birth: String
    location: String
    bio: String
    created_at: String
    updated_at: String
}

# This is a query description!
type Query {
    # Query for all the users
    users: [User] 
    # Query for a specific user
    user(id: Int!): User 
}
`;

export default makeExecutableSchema({
    typeDefs: schema,
    resolvers,
});


