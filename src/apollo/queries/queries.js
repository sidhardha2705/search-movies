import { gql } from "@apollo/client";

const movieTypeForList = `
  id
  title
  poster(size: W342)
  rating
`;

export const SEARCH_MOVIES = gql`
  query SearchMovies($term: String!) {
    search(term: $term, first: 20) {
      edges {
        node {
          ... on Movie {
           ${movieTypeForList}
           
          }
        }
      }
    }
  }
`;

export const FETCH_POPULAR_MOVIES = gql`
  {
    movies {
      popular(first: 10) {
        edges {
          node {
            ${movieTypeForList}
          }
        }
      }
    }
  }
`;

export const FETCH_SINGLE_MOVIE = gql`
  query FetchSingleMovie($id: String!) {
    movies {
      movie(id: $id) {
        title
        id
        poster(size: W500)
        rating
        releaseDate
        overview
        rating
      }
    }
  }
`;
