import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Col,Container,Row} from "react-bootstrap";
import SellerItemCard from "./SellerItemCard";

function SellerProductList() {
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

    const availableItems = items.filter(
        (item) =>
            item.available ===1
    );

    const unavailableItems = items.filter(
        (item) =>
            item.available ===0 || item.available === null
    );

    return (
        <Container className="mb-4">
            <Row className="g-2">
                <h3>Available Items</h3>
                {availableItems.map(item=>(
                    <Col key={item.id} xs={12} md={6} lg={4}>
                        <SellerItemCard
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
            <h3 style ={{paddingTop: "40px"}}>Unavailable Items</h3>
            <Row className="g-2">
                {unavailableItems.map(item=>(
                    <Col key={item.id} xs={1} md={6} lg={4}>
                        <SellerItemCard
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

export default SellerProductList;