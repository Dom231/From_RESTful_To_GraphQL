const { AuthenticationError } = require('apollo-server-express');
const {User, Book} = require('../models')
const { signToken } = require('../utils/auth');

const resolvers = {
    Query :{
        me: async (parent, args, context) => {
            if (context.user) {
              return User.findOne({ _id: context.user._id });
            }
            throw new AuthenticationError('You need to be logged in!');
          },
       

    
    }, 
    Mutations: {
        addUser: async (parent, { userName, email, password }) => {
            const user = await User.create({ userName, email, password });
            const token = signToken(user);
      
            return { token, user };
          },

        login: async (parent, { userName, email, password }) => {
            const user = await Profile.findOne({ userName,email });
      
            if (!user) {
              throw new AuthenticationError('No user with this email found!');
            }
      
            const correctPw = await user.isCorrectPassword(password);
      
            if (!correctPw) {
              throw new AuthenticationError('Incorrect password!');
            }
      
            const token = signToken(user);
            return { token, user };
          },
          removeBook: async (parent, args, context) => {
            if (context.user) {
              return User.findOneAndDelete({ bookId});
            }
            throw new AuthenticationError('You need to be logged in!');
          },
        }
    }