const { gql } = require('apollo-server-express')

const typeDefs = gql `
type User{
    _id: ID!
    userName: String!
    email: String!
    password: String!
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

type Query{ 
    user(id: ID!): [User]
    books : [Book]


}

type Mutation {
    addUser(userName: String!, email: String!, password: String!): User
    addBook(bookId: String!,title: String!): Book
    deleteBook(bookId: String!, title: String!)
    
}
`