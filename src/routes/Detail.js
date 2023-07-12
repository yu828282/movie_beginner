import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css";

function Detail(){
    const { id } = useParams(); //리엑트 라우터에서 받을 변수
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState({});
    const [genres, setGenres] = useState([]);
    const getMovie = useCallback(async () => {
      const json = await (
          await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
        setLoading(false);
      //SetLoading((current) => !current);
        setMovie(json.data.movie);
        setGenres(json.data.movie.genres); 
      }, [id]);
    useEffect(() => {
      if (id !== "" && id.length > 1) {
        getMovie();
      }
    }, [getMovie, id]); 
    return (
      <div className={styles.container}>
        {loading ? (
          <div className={styles.loader}>
            <span>불러오는 중...</span>
          </div>
        ) : (
          <div className={styles.movie}>
            <div className={styles.movie__bgimg} style={{backgroundImage : "url("+`${movie.background_image_original}`+")"}}>
            </div>
            <div className={styles.movie__header}>
              <div className={styles.movie__big__title}>
                <img
                  src={movie.medium_cover_image}
                  alt={movie.title}
                  className={styles.movie__img}
                />
                <div>
                  <h1 className={styles.movie__title}>{movie.title}</h1>
                  <div className={styles.movie__year}>
                    <span>{movie.year}년 개봉 / </span>
                    <span>상영시간 {movie.runtime}분</span>
                  </div>
                </div>
              </div>
              <div className={styles.movie__rate__row}>
                <div className={styles.movie__rate}>⭐별점: {movie.rating} </div>
                <div className={styles.movie__rate}>
                ⬆️다운로드: {movie.download_count}
                </div>
                <div className={styles.movie__rate}>
                👍추천: {movie.like_count}
                </div>
              </div>
            </div>
            <div className={styles.movie__content}>
              <div>{movie.description_full}</div>
              <div className={styles.movie__genres}>
                {genres.map((g) => (
                  <span key={g}>장르 : {g} </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
  export default Detail;