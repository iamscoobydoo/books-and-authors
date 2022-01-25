import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";

import { getAuthorsQuery, addBookMutation, getBooksQuery } from "../Queries/Queries";

function BookDetails() {
    return (
        <>
            <div id='book-details'>
                <p>Book Details here</p>
            </div>
        </>
    );
}

export default BookDetails;
