import React from 'react'
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
    return (
        <div>
            <Navbar variant="dark" expand="lg" className="bg-body-tertiary nb">
                <Container fluid>
                    <img width={120} src="https://i.namu.wiki/i/VC4ybUEcyxjcNN9bbD94MSuC90nzQOrsa-ZKYd8ZCcbFW62IB2vvvP5hZxbdNPR2oms8avAsSQJXKCQ3L4rTpw.svg" className="logo" alt="" onClick={goToHome}/>
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
                    <Form className="d-flex">
                        <Form.Control variant="outline-danger"
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        />
                        <Button variant="outline-danger" className="search-btn">Search</Button>
                    </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet/>
        </div>
    )
}

export default AppLayout