import React, {useState} from 'react';
import axios from "axios";
import {Button, Card, Form} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import "../Login.css";


function AddProduct() {
    const [name, setName] = useState();
    // const [price, setPrice] = useState();
    // const [promo, setPromo] = useState();
    // const [image, setImage] = useState();
    const role = localStorage.getItem("role");
    const navigate = useNavigate();

    const [payload, setPayload] = useState({
        name:"",
        price:0.00,
        promo_price:0.00,
        image:"",
        role: role
    });

    const handleInputChange = async (e) =>{
        const {name, value} = e.target;
        setPayload((input) => ({...input, [name]:value
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await axios.post("http://localhost:8000/api/products/add", {
            name:payload.name,
            price:payload.price,
            promo_price:payload.promo_price,
            image:payload.image,
            role: payload.role
        })

        const data = await res.data;

        if(data.message){
            navigate("/admin-dashboard");
        }
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
                                name="name"
                                type="text"
                                value={payload.name}
                                placeholder="Enter name"
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Price</Form.Label>
                            <Form.Control
                                name="price"
                                type="number"
                                value={payload.price}
                                placeholder="Enter price"
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Discount Price</Form.Label>
                            <Form.Control
                                name="promo_price"
                                type="number"
                                value={payload.promo_price}
                                placeholder="Leave blank if no discount"
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Image URL</Form.Label>
                            <Form.Control
                                name="image"
                                type="text"
                                value={payload.image}
                                placeholder="Enter image URL"
                                onChange={handleInputChange}
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