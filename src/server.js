const { GraphQLServer } = require('graphql-yoga');
const path = require('path');
const resolvers = require('./resolvers');
const mongoose = require('mongoose');


mongoose.connect('mongodb://127.0.0.1/graphqlnode',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
});

const server = new GraphQLServer({
    typeDefs: path.resolve(__dirname, 'schema.graphql'),
    resolvers
});


server.start();