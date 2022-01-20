import React from "react";
import { useQuery } from "@apollo/client";

import { getBooksQuery } from "../Queries/Queries";

function BookList() {
    const { loading, error, data } = useQuery(getBooksQuery);

    if (loading) return <p>Loading Books...</p>;
    if (error) return <p>Error </p>;

    return (
        <>
            <ul id='book-list'>
                {data.books.map((book) => {
                    return <li key={book.id}>{book.name}</li>;
                })}
            </ul>
        </>
    );
}

export default BookList;
