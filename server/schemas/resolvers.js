const { AuthenticationError } = require('apollo-server-express');
const {User, Book} = require('../models')
const { signToken } = require('../utils/auth');

const resolvers = {
    Query :{
        user: async (parent, {_id}) => {
            const params = _id ? {_id} : {}
            return User.find(params)
        }, 
        book : async () => {
            return Book

        }

    
    }, 

    Mutation: {
        
    }
}