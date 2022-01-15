const graphql = require("graphql");

const { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLID } = graphql;

const BookType = new GraphQLObjectType({
    name: "Book",
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        genre: { type: GraphQLString },
    }),
});

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        book: {
            type: BookType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                //code to get data from db
            },
        },
    },
});

module.exports = new GraphQLSchema({
    query: RootQuery,
});
