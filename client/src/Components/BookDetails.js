import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";

import { getBookQuery } from "../Queries/Queries";

function BookDetails({ bookId }) {
    const { loading, error, data } = useQuery(getBookQuery, { variables: { id: bookId } });

    const displayBookData = () => {
        if (loading) return <p>Loading Book Details...</p>;
        if (error) return <p>Error </p>;
        const { book } = data;

        if (book) {
            return (
                <div>
                    <h2>{book.name}</h2>
                    <p>Genre - {book.genre}</p>
                    <p>By - {book.author.name}</p>
                    <p>All books by this author -</p>
                    <ul className='other-books'>
                        {book.author.books.map((item) => {
                            return <li key={item.id}>{item.name}</li>;
                        })}
                    </ul>
                </div>
            );
        } else {
            return <div>No Book Selected...</div>;
        }
    };

    return (
        <>
            <div id='book-details'>{displayBookData()}</div>
        </>
    );
}

export default BookDetails;
