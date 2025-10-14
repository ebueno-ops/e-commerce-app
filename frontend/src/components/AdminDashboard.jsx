import React from 'react';
import {Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

function AdminDashboard() {
    const navigate = useNavigate();
    return (
        <div>
            <h1>Admin Dashboard</h1>
            <Button variant="primary" type="submit" onClick={navigate("/products/add")}>
                Add Product
            </Button>
        </div>
    );
}

export default AdminDashboard;