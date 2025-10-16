import React, {useEffect, useState} from 'react';
import axios from "axios";
import ItemCard from "../ItemCard";
import {Col,Container,Row} from "react-bootstrap";
import AdminItemCard from "./AdminItemCard";

function AdminProductList() {
    const [items, setItems] = useState([]);
    const role = localStorage.getItem("role");

    //fetch products
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
        <Container className="mt-2">
            <Row className="g-2">
                {items.map(item=>(
                    <Col key={item.id} xs={1} md={6} lg={4}>
                        <AdminItemCard
                            id = {item.id}
                            image = {item.image}
                            name = {item.name}
                            price = {item.price}
                            promo_price = {item.promo_price}
                            available = {item.available}
                            role = {role}
                        />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default AdminProductList;