import React from 'react';
import {Card, Button} from "react-bootstrap";

function ItemCard(props) {
    const {
          name, price, role, image, discount_price
    } = props;

    return (
        <Card className="h-100 w-100">
            <Card.Img
                variant="top"
                src={image} alt={name}
                style={{ height: "180px", objectFit: "cover" }}

            />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                {/* shows discount prices for member */}
                {role === "member" && discount_price > 0 ?(
                    <div>
                    <Card.Text style={{textDecoration:"line-through"}}>
                        Price: ${price}
                    </Card.Text>
                    <Card.Text style ={{color: "red"}}>
                        Member Price: ${discount_price} if quantity > 2
                    </Card.Text>
                    </div>
                ) :
                    <Card.Text>
                        Price: ${price}
                    </Card.Text>
                }
                <Button className="btn addcart-btn" variant="outline-dark">Add to Cart</Button>
            </Card.Body>
        </Card>
    );
}

export default ItemCard;