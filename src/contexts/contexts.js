import { createContext, useState } from "react";
import Cookies from "universal-cookie";

const cookies = new Cookies();

//Context to provide which movies are clicked (to set transparency of the movie card)
export const ViewedMoviesContext = createContext([]);

const ViewedMovies = ({ children }) => {
  const existingCookieData = cookies.get("viewed_movies");
  const [viewedMovies, setViewedMovies] = useState(
    existingCookieData ? existingCookieData : []
  );

  //Sets the viewed movies array into cookies as well as updates the context
  const updateViewedMovies = (movieId) => {
    const filtered = viewedMovies.includes(movieId)
      ? viewedMovies.filter((id) => id !== movieId)
      : [...viewedMovies, movieId];
    cookies.set("viewed_movies", filtered);
    setViewedMovies(filtered);
  };

  return (
    <ViewedMoviesContext.Provider value={[viewedMovies, updateViewedMovies]}>
      {children}
    </ViewedMoviesContext.Provider>
  );
};

export default ViewedMovies;
