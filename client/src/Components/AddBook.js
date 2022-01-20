import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";

import { getAuthorsQuery, addBookMutation } from "../Queries/Queries";

function AddBook() {
    const [bookDetails, setBookDetails] = useState({
        name: "",
        genre: "",
        authorId: "",
    });
    const [addBook, { loading, error }] = useMutation(addBookMutation);

    const changeHandler = (e) => {
        setBookDetails({ ...bookDetails, [e.target.name]: e.target.value });
    };

    const submitBookDetails = (e) => {
        e.preventDefault();
        console.log(bookDetails);
        addBook({
            variables: {
                name: bookDetails.name,
                genre: bookDetails.genre,
                authorId: bookDetails.authorId,
            },
        });

        bookDetails.name = "";
        bookDetails.genre = "";
        bookDetails.authorId = "";
    };

    //Get Author Query
    const GetAuthors = () => {
        const { loading, error, data } = useQuery(getAuthorsQuery);

        if (loading) return <p>Loading Author...</p>;
        if (error) return <p>Error </p>;

        return (
            <select name='authorId' onChange={changeHandler}>
                <option> Select Author</option>
                {data.authors.map((author) => {
                    return (
                        <option key={author.id} value={author.id}>
                            {author.name}
                        </option>
                    );
                })}
            </select>
        );
    };

    if (loading) return "Submitting...";
    if (error) return `Submission error! ${error.message}`;

    return (
        <>
            <form id='add-book' onSubmit={submitBookDetails}>
                <div className='field'>
                    <label>Book Name:</label>
                    <input type='text' name='name' onChange={changeHandler} />
                </div>

                <div className='field'>
                    <label>Genre:</label>
                    <input type='text' name='genre' onChange={changeHandler} />
                </div>

                <div className='field'>
                    <label>Author:</label>
                    <GetAuthors />
                </div>

                <button>+</button>
            </form>
        </>
    );
}

export default AddBook;
