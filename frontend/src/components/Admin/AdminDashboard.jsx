import React from 'react';
import {Button, Container} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import AdminProductList from "./AdminProductList";

function AdminDashboard() {
    const navigate = useNavigate();

    const handleClick = () =>{
        navigate("/products/add");
    }
    return (
        <Container>
            <h1>Admin Dashboard</h1>
            <div className="text-center">
            <Button variant="warning" value= "add" type="submit" onClick={handleClick}>
                Add Product
            </Button>
            </div>
            <AdminProductList />
        </Container>
    );
}

export default AdminDashboard;