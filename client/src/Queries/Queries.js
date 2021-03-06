import { gql } from "@apollo/client";

const getBooksQuery = gql`
    {
        books {
            name
            genre
            id
        }
    }
`;

const getAuthorsQuery = gql`
    {
        authors {
            name
            id
        }
    }
`;

const getBookQuery = gql`
    query GetBook($id: ID) {
        book(id: $id) {
            id
            name
            genre
            author {
                id
                name
                age
                books {
                    name
                    id
                }
            }
        }
    }
`;

const addBookMutation = gql`
    mutation AddBook($name: String!, $genre: String!, $authorId: ID!) {
        addBook(name: $name, genre: $genre, authorId: $authorId) {
            name
            id
        }
    }
`;

export { getBooksQuery, getAuthorsQuery, getBookQuery, addBookMutation };
