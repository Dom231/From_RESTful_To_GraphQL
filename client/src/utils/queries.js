import { gql } from '@apollo/client';

export const GET_ME = gql `
{ 
    me {
        savedbooks{
            title
            authors
            bookId
        }
    }
}
`;