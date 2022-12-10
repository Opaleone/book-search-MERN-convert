import { gql } from "@apollo/client";

export const SAVE_BOOK = gql`
  mutation saveBook{
    $authors: String!, 
    $description; String!,
    $bookId: String!,
    $image: String!,
    $link: String!,
    $title: String!) {
    saveBook() {
      authors: $authors,
      description: $description,
      bookId: $bookId,
      image: $image,
      link: $link,
      title: $title,
    }
  }
`

export const REMOVE_BOOK = gql`
  mutation removeBook($bookId){

  }
`