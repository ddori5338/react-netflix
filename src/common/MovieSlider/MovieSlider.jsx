import React from 'react'
import './MovieSlider.style.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MovieCard from '../MovieCard/MovieCard'

const MovieSlider = ({title, movies, responsive}) => {
    return (
        <div>
            <h2 className='head'>{title}</h2>
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
                {movies.map((movie, index) => <MovieCard movie={movie} key={index} />)}
            </Carousel>
        </div>
    )
}

export default MovieSlider
