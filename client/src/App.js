import React from "react";
import { ApolloClient, ApolloProvider } from "@apollo/client";

//components
import BookList from "./Components/BookList";

const client = new ApolloClient({
    uri: "http://localhost:4000/graphql",
});

function App() {
    return (
        <ApolloProvider client={client}>
            <div id='main'>
                <h1>Reading List</h1>
                <BookList />
            </div>
        </ApolloProvider>
    );
}

export default App;
