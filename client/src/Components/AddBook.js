import React, { useState } from "react";
import { useQuery } from "@apollo/client";

import { getAuthorsQuery } from "../Queries/Queries";

function AddBook() {
    const [bookDetails, setBookDetails] = useState({
        name: "",
        genre: "",
        authorId: "",
    });

    const changeHandler = (e) => {
        setBookDetails({ ...bookDetails, [e.target.name]: e.target.value });
    };

    const submitBookDetails = (e) => {
        e.preventDefault();
        console.log(bookDetails);
    };

    const { loading, error, data } = useQuery(getAuthorsQuery);

    if (loading) return <p>Loading Author...</p>;
    if (error) return <p>Error </p>;

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
                </div>

                <button>+</button>
            </form>
        </>
    );
}

export default AddBook;
