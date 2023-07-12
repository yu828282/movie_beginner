import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import styles from "./Home.module.css";

function Home({ genre }){
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async () => {
      const json = await (
        await fetch(
          `https://yts.mx/api/v2/list_movies.json?sort_by=download_count`
        )
      ).json();
      setMovies(json.data.movies);
      setLoading(false);
    };
    useEffect(()=> {
      // fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`)
      // .then(response => response.json())
      // .then((json)=> {
      //   setMovies(json.data.movies);
      //   setLoading(false);
      getMovies();
      }, []);  
      
    return (
        <div className={styles.container}>
        {loading ? (<h1 className={styles.loader}>로딩중...</h1>) : (
        <div className={styles.movies}>
            {movies.map(movie => <Movie key={movie.id} id={movie.id} coverImg = {movie.medium_cover_image} year={movie.year} title = {movie.title} summary = {movie.summary} genres = {movie.genres}></Movie> )}
        </div> 
        )}
      </div>
    );
  } 
  export default Home;
