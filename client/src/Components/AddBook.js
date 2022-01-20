import React from "react";
import { gql, useQuery } from "@apollo/client";

const getAuthorsQuery = gql`
    {
        authors {
            name
            id
        }
    }
`;

function AddBook() {
    const { loading, error, data } = useQuery(getAuthorsQuery);

    if (loading) return <p>Loading Author...</p>;
    if (error) return <p>Error </p>;

    return (
        <>
            <form id='add-book'>
                <div className='field'>
                    <label>Book Name:</label>
                    <input type='text' />
                </div>

                <div className='field'>
                    <label>Genre:</label>
                    <input type='text' />
                </div>

                <div className='field'>
                    <label>Author:</label>
                    <select>
                        <option> Select Author</option>
                        {data.authors.map((author) => {
                            return <option key={author.id}>{author.name}</option>;
                        })}
                    </select>
                </div>

                <button>+</button>
            </form>
        </>
    );
}

export default AddBook;
