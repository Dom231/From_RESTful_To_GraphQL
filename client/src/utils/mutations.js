import { gql } from '@apollo/client';

export const LOGIN_USER = gql `
mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      _id
    }
  }
}

`;
export const ADD_USER = gql `mutation addUser(
    $username: String!
    $email: String!
    $password: String!
  ) {
    addUser(
     userName: $String
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;
export const SAVE_BOOK = gql `mutation saveBook(
    $author: [String]!
    $bookId: String!
    $title: String!
){
    saveBook(
        authors: $authors
        bookId: $bookId
        title: $title
    ){
        savedBooks{
            authors
            bookId
            title
        }
    }
}
`;
export const REMOVE_BOOK = gql `mutation removeBook(
    $bookId: String!
    $title: String!
){
    removeBook(
        bookId: $bookId
        title: $title
    ){
        savedBooks{
            authors
            title
            bookId
        }
    }
}
`;
