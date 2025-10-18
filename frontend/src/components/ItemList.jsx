import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Row, Col, Container} from "react-bootstrap";
import ItemCard from "./ItemCard";

export default function Items() {
    const [items, setItems] = useState([]);

    const role = localStorage.getItem("role");

    useEffect(() => {
        const fetch = async () => {
            try{
                const res = await axios.get("http://localhost:8000/api/products/");
                setItems(res.data);
            }catch(e){
                console.log(e);
            }
        }
        fetch();
    }, []);

    return (
        <Container className="container mt-4">
            <Row className="g-2">
                {/* shows only available items */}
                {items
                    .filter(item => item.available === 1)
                    .map(item => (
                    <Col key={item.id} xs={12} md={6} lg={4}>
                        <ItemCard
                            id = {item.id}
                            image = {item.image}
                            name = {item.name}
                            price = {item.price}
                            discount_price = {item.promo_price}
                            role = {role}
                        />

                    </Col>
                ))}
            </Row>
        </Container>
    );
}
