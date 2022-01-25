import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";

import { getBookQuery } from "../Queries/Queries";

function BookDetails({ bookId }) {
    const { loading, error, data } = useQuery(getBookQuery, { variables: { id: bookId } });

    if (loading) return <p>Loading Books...</p>;
    if (error) return <p>Error </p>;

    const displayBookData = () => {
        const { book } = data;
        if (book) {
            return (
                <div>
                    <h2>{book.name}</h2>
                    <p>{book.genre}</p>
                    <p>{book.author.name}</p>
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
