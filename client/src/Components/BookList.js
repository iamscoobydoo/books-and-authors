import React from "react";
import { gql, useQuery } from "@apollo/client";

const getBooksQuery = gql`
    {
        books {
            name
            id
        }
    }
`;

function BookList() {
    const { loading, error, data } = useQuery(getBooksQuery);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error </p>;
    return (
        <>
            <ul id='book-list'>
                <li>Book Name</li>
            </ul>
        </>
    );
}

export default BookList;
