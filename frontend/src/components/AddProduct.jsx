import React, {useState} from 'react';
import axios from "axios";
import {Button, Card, Form} from "react-bootstrap";
import "./Login.css";

function AddProduct() {
    const [name, setName] = useState();
    const [price, setPrice] = useState();
    const [promo, setPromo] = useState();
    const [image, setImage] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const role = localStorage.getItem("role");

        const res = await axios.post("http://localhost:8000/api/products/add", {
            name, price, promo, image, role
        })

        const data = await res.data;

        if(data.error){
            alert(data.error);
        } else {
            alert(data.message);
        }
    }
    return (
        <div className="login-container">
            <Card className="login-card">
                <Card.Title><h1>Add Product</h1></Card.Title>
                <Card.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                value={name}
                                placeholder="Enter name"
                                onChange={(e)=>setName(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Price</Form.Label>
                            <Form.Control
                                type="number"
                                value={price}
                                placeholder="Enter price"
                                onChange={(e)=>setPrice(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Discount Price</Form.Label>
                            <Form.Control
                                type="number"
                                value={promo}
                                placeholder="Leave blank if no discount"
                                onChange={(e)=>setPromo(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Image URL</Form.Label>
                            <Form.Control
                                type="text"
                                value={image}
                                placeholder="Enter image URL"
                                onChange={(e)=>setImage(e.target.value)}
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={handleSubmit}>
                            Submit
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
}

export default AddProduct;