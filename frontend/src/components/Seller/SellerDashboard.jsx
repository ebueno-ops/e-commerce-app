import React from 'react';
import {Button, Container} from "react-bootstrap";
import SellerProductList from "./SellerProductList";

function SellerDashboard() {
    return (
        <Container>
            <h1>Seller Dashboard</h1>
            <SellerProductList />
        </Container>
    );
}

export default SellerDashboard;