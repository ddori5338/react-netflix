import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet } from 'react-router-dom';
import './AppLayout.style.css';
import { useNavigate } from "react-router-dom";

const AppLayout = () => {
    const navigate = useNavigate();
    const goToHome = () => {
        navigate("/");
    }

    const [keyword, setKeyword] = useState('')

    const searchByKeyword = (event) => {
        event.preventDefault()
        // change url
        navigate(`/movies?q=${keyword}`)
        setKeyword('')
    }

    return (
        <div>
            <Navbar variant="dark" expand="lg" className="bg-body-tertiary nb">
                <Container fluid>
                    <img width={60} src="https://cdn-icons-png.flaticon.com/512/4221/4221419.png" className="logo" alt="" onClick={goToHome}/>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="/" className="text-white">Home</Nav.Link>
                        <Nav.Link href="movies" className="text-white">Movies</Nav.Link>

                    </Nav>
                    <Form className="d-flex" onSubmit={searchByKeyword}>
                        <Form.Control variant="outline-danger"
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        value={keyword}
                        onChange={(event) => setKeyword(event.target.value)}
                        />
                        <Button variant="outline-danger"
                        className="search-btn"
                        type="submit">
                            Search
                        </Button>
                    </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet/>
        </div>
    )
}

export default AppLayout
