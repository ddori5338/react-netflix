import React, { useState } from 'react'
import { useSearchMoviesQuery } from '../../hooks/useSearchMovie'
import { useSearchParams } from 'react-router-dom'
import { Spinner, Container, Row, Col } from 'react-bootstrap';
import { Alert } from 'react-bootstrap'
import './MoviePage.style.css'
import MovieCard from '../../common/MovieCard/MovieCard';
import ReactPaginate from 'react-paginate';

// 유입 경로
// 1. nav바에서 클릭해서 온 경우 => popular movie 보여주기
// 2. keyword를 입력해서 온 경우 => keyword와 관련된 영화들을 보여주기

// 페이지네이션 설치
// page state 만들기
// 페이지네이션 클릭할 때마다 page 바꿔주기
// page 값이 바뀔 때마다 useSearchMovie에 page값 넣어서 fetch

const MoviePage = () => {
    const [query, setQuery] = useSearchParams();
    const [page, setPage] = useState(1);
    const keyword = query.get("q");

    const {data, isLoading, isError, error} = useSearchMoviesQuery({keyword, page})
    if (isLoading) {
        return (
            <div className="spinner-area">
                <Spinner
                    animation="border"
                    variant="danger"
                    style={{ width: "5rem", height: "5rem"}}
                />
            </div>
        )
    }
    if (isError) {
        return <Alert variant="danger">{error.message}</Alert>
    }
    console.log('data?', data)

    const handlePageClick = ({selected}) => {
        setPage(selected + 1)
    };

    return (
        <Container>
            <Row>
                <Col lg={4} xs={12}>filter</Col>
                <Col lg={8} xs={12}>
                    <Row>
                        {data?.results.map((movie, index) => (
                            <Col key={index} lg={4} xs={12}>
                                <MovieCard movie={movie} />
                            </Col>
                        ))}
                    </Row>
                    <ReactPaginate
                        nextLabel="next >"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={3}
                        marginPagesDisplayed={2}
                        pageCount={data?.total_pages} // 전체페이지 수
                        previousLabel="< previous"
                        pageClassName="page-item"
                        pageLinkClassName="page-link"
                        previousClassName="page-item"
                        previousLinkClassName="page-link"
                        nextClassName="page-item"
                        nextLinkClassName="page-link"
                        breakLabel="..."
                        breakClassName="page-item"
                        breakLinkClassName="page-link"
                        containerClassName="pagination"
                        activeClassName="active"
                        renderOnZeroPageCount={null}
                        forcePage={page - 1}
                    />
                </Col>
            </Row>
        </Container>
    )
}

export default MoviePage
