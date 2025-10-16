import React, {useState} from 'react';
import {Button, Card, Form} from "react-bootstrap";
import ErrorPage from "../ErrorPage";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function AdminItemCard({ id, name, price, promo_price, image, role }) {
    const [payload, setPayload] = useState({
        name, price, promo_price, image, role
    });
    const [enable, setEnable] = useState(true);
    const navigate = useNavigate();

    //toggle item input boxes
    const toggleEnable = () => {
        setEnable(!enable);
    }

    const handleInputChange = async (e) =>{
        const {name, value} = e.target;
        setPayload((input) => ({...input, [name]:value
        }));
    }

    //delete item
    const handleDelete = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.delete(
                `http://localhost:8000/api/products/delete/${id}`,
                {
                    id,
                    data: {role}
                }
            )
            const data = await res.data;

            if(data.message){
                alert(data.message);
                window.location.reload();
            } else {
                alert(data.error);
            }

        }catch(err){
            console.log(err);
        }
        navigate("/admin-dashboard");
    }

    //save edit
    const handleSave = async () => {
        try {
            const res = await axios.put(
                `http://localhost:8000/api/products/edit/${id}`,
                payload,
            )
            alert(res.data.message);

        }catch(err){
            console.log(err);
        }
    }

    return (
        <Card className="h-100 w-100">
            <Card.Img
                variant="top"
                src={payload.image} alt={payload.name}
                style={{ height: "180px", objectFit: "cover" }}
            />
            <Card.Body>
                <Card.Title>{payload.name}</Card.Title>
                        <Card.Text>
                            Name:
                            <Form.Control
                                name="name"
                                type="text"
                                disabled={enable}
                                defaultValue={payload.name}
                                onChange ={handleInputChange}
                            />
                                Price:
                            <Form.Control
                                name="price"
                                type="number"
                                disabled={enable}
                                defaultValue={payload.price}
                                step="0.01"
                                onChange ={handleInputChange}
                            />
                                Discount Price:
                            <Form.Control
                                name="promo_price"
                                type="number"
                                disabled={enable}
                                defaultValue={payload.promo_price}
                                onChange ={handleInputChange}
                            />
                            Image URL:
                            <Form.Control
                                name="image"
                                type="text"
                                disabled={enable}
                                defaultValue={payload.image}
                                onChange ={handleInputChange}
                            />
                        </Card.Text>

                <Button
                    className="btn"
                    variant="outline-dark"
                    onClick={toggleEnable}
                    >Edit
                </Button>
                <Button
                    className="btn"
                    variant="outline-dark"
                    type = "submit"
                    onClick={handleSave}
                    >Save
                </Button>
                <Button
                    className="btn"
                    variant="outline-dark"
                    onClick={handleDelete}
                    >Delete
                </Button>
            </Card.Body>
        </Card>
    );
}

export default AdminItemCard;