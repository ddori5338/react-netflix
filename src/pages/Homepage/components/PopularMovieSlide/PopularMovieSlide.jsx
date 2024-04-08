import React from 'react'
import { usePopularMoviesQuery } from '../../../../hooks/usePopularMovies'
import { Alert } from 'react-bootstrap'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MovieCard from '../MovieCard/MovieCard';
import './PopularMovieSlide.style.css'


const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 6,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    }
};
const PopularMovieSlide = () => {
    const {data, isLoading, isError, error} = usePopularMoviesQuery()
    if (isLoading) {
        return <h1>Loading...</h1>
    }
    if (isError) {
        return <Alert variant="danger">{error.message}</Alert>
    }
    
    return (
        <div>
            <h2 className='head'>Popular Movies</h2>
            <Carousel
            infinite={true}
            centerMode={true}
            itemClass="carousel-item-padding-40-px"
            containerClass="carousel-container"
            responsive={responsive}
            swipeable={true}
            draggable={true}
            // showDots={true}
            // ssr={true} // means to render carousel on server-side.
            // autoPlay={this.props.deviceType !== "mobile" ? true : false}
            // autoPlaySpeed={1000}
            // keyBoardControl={true}
            // customTransition="all .5"
            transitionDuration={500}
            // removeArrowOnDeviceType={["tablet", "mobile"]}
            // deviceType={this.props.deviceType}
            // dotListClass="custom-dot-list-style"
            >
                {data.results.map((movie, index) => <MovieCard movie={movie} key={index} />)}
            </Carousel>;
        </div>
    )
}

export default PopularMovieSlide
