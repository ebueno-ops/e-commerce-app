import React from 'react';
import {Nav,Navbar, Container} from "react-bootstrap";
import logo from "../images/switch_logo.png"
import {useNavigate} from "react-router-dom";

function NavBar() {
    const navigate = useNavigate();

    const role = localStorage.getItem("role");
    const token = localStorage.getItem("token");

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        alert("Logged out successfully");
        navigate("/");
    };

    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="/home">
                    <img src = {logo} alt = "site-logo" style={{width: '50px', height: '50px'}}/>
                    KeyBstore
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/home">Home</Nav.Link>

                    {role === "admin" ?(
                        <Nav.Link href="/admin-dashboard">Admin Dashboard</Nav.Link>
                    ) : role === "seller" ? (
                        <Nav.Link href="/seller-dashboard">Seller Dashboard</Nav.Link>
                    ) : (
                        <Nav.Link href="/products">Products</Nav.Link>)
                    }

                </Nav>
                <Nav className="ms-auto">
                    {!token ? (
                    <Nav.Link href="/login">Login</Nav.Link>
                        ) : (
                            <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
                    )}
                </Nav>
            </Container>
        </Navbar>
    );
}

export default NavBar;