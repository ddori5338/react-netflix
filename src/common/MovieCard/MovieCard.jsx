import React from 'react'
import Badge from 'react-bootstrap/Badge';
import './MovieCard.style.css'
import { useMovieGenreQuery } from '../../hooks/useMovieGenre';

const MovieCard = ({movie}) => {

    const {data:genreData} = useMovieGenreQuery()
    
    const showGenre = (genreIdList) => {
        if (!genreData) return []
        const genreNameList = genreIdList.map((id) => {
            const genreObj = genreData.find((genre) => genre.id === id)
            return genreObj.name
        })
        return genreNameList
    }
    return (
        <div
        style={{backgroundImage: `url(https://media.themoviedb.org/t/p/w300_and_h450_bestv2${movie.poster_path})`}}
        className='movie-card'>
            <div className='overlay'>
                {movie.title.length > 30 ? <h3>{movie.title}</h3> : <h2>{movie.title}</h2>}
                {showGenre(movie.genre_ids).map((id) => <Badge bg="danger">{id}</Badge>)}
                <div className='info'>
                    <div className='vote-avg'>{Math.round(movie.vote_average*10)}% Match</div>
                    <div>{movie.release_date}</div>
                    <div className='info-btm'>
                        <div>Popularity: {Math.round(movie.popularity*100)/100}</div>
                        <div className={movie.adult?'over18':'under18'}>{movie.adult?'OVER18':'UNDER18'}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieCard
