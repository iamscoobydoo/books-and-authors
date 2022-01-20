import React from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

//components
import BookList from "./Components/BookList";
import AddBook from "./Components/AddBook";

const client = new ApolloClient({
    uri: "http://localhost:4000/graphql",
    cache: new InMemoryCache(),
});

function App() {
    return (
        <ApolloProvider client={client}>
            <div id='main'>
                <h1>Reading List</h1>
                <BookList />
                <AddBook />
            </div>
        </ApolloProvider>
    );
}

export default App;
