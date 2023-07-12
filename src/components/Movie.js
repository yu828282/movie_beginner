import PropTypes from "prop-types";
import { Routes, Route, Link } from 'react-router-dom'
import styles from "./Movie.module.css";

function Movie({id, coverImg, title, summary, genres, year}){
    return (
    <div className={styles.movie}>
      <Link to={`/movie/${id}`}><img src={ coverImg } alt={title} className={styles.movie__img} /></Link>
      <div>
        <h2 className={styles.movie__title}>
          <Link to={`/movie/${id}`}>{title}</Link>
        </h2>  
        <h3 className={styles.movie__year}>{year}</h3>
        <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
        <ul className={styles.movie__genres}>
          {genres && genres.map(g => (<li key={g}> {g} </li>))} 
        </ul>
      </div>
   </div>
  )
}

Movie.propTypes  = { //부모로부터 전달받은 prop의 데이터 type을 검사(데이터 타입이 일치하지 않으면 콘솔에 경고문표시)
    id:PropTypes.number.isRequired,
    coverImg : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired, 
    summary : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;