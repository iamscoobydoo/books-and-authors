require("dotenv").config();
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const mongoose = require("mongoose");

const schema = require("./schema/schema");
const app = express();

mongoose.connect(
    `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.kckor.mongodb.net/libraryData?retryWrites=true&w=majority`
);
mongoose.connection.once("open", () => {
    console.log("Connected to DB!");
});

app.use(
    "/graphql",
    graphqlHTTP({
        schema,
        graphiql: true,
    })
);

app.listen(4000, () => {
    console.log("Listening on PORT 4000");
});
