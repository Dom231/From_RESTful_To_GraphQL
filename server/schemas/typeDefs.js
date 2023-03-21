const { gql } = require('apollo-server-express')

const typeDefs = gql `
type User{
    _id: ID!
    userName: String!
    email: String!
    bookCount
    savedBooks: [Book]
}

type Book{
    authors : String
    description : String
    bookId : String!
    image: String
    link: String
    title: String!
}

type Auth {
    token: String
    user : User 
}

type Query{ 
    me : [User]


}

type Mutation {
    login(email: String!, password: String!); Auth
    addUser(userName: String!, email: String!, password: String!): Auth
    saveBook(bookId: String!,title: String!): User
    removeBook(bookId: String!, title: String!): User
    
}
`

module.exports = typeDefs;