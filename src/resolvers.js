const User = require('./User');

module.exports = {
    Query :{
        users:(_, {page, per_page, filters}) => User.find(),  
        user:(_, { id } ) => User.findById(id),
    },

    Mutation:{
        createUser: (_, {name, email}) => User.create({name, email}),
    }
}