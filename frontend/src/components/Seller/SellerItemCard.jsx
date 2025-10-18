import React, {useState} from 'react';
import { Card, Form} from "react-bootstrap";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function SellerItemCard({ id, name, price, promo_price, image, available, role }) {
    const [payload, setPayload] = useState({
        name, price, promo_price, image, available, role
    });

    const navigate = useNavigate();

    const handleInputChange = async (e) =>{
        const {name, value, type, checked} = e.target;

        const updatePayload = {
            ...payload,
            [name]: type === "checkbox" ? checked : value,
        }

        setPayload(updatePayload);

        try {
            const res = await axios.put(
                `http://localhost:8000/api/products/availability/${id}`,
                updatePayload,
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
        navigate("/seller-dashboard");
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
                <div>
                    Price: {payload.price}<br/>
                    Member Price: {payload.promo_price ?
                        Number(payload.promo_price).toFixed(2)
                        : "No Promotion"}
                    <Form.Check>
                        <Form.Label>Availability:</Form.Label>
                        <Form.Check.Input
                            name="available"
                            type="checkbox"
                            defaultChecked={payload.available}
                            onChange ={handleInputChange}
                        />
                    </Form.Check>
                </div>
            </Card.Body>
        </Card>
    );
}

export default SellerItemCard;