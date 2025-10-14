import React from 'react';
import {Button, Form, Card} from "react-bootstrap";
import "./Login.css"

function LoginCard(props) {
    const {
        email, password, role, setEmail, setPassword, setRole, handleSubmit
    } = props;

    return (
        <Card className="login-card">
            <Card.Title><h1>Login</h1></Card.Title>
            <Card.Body>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        value={email}
                        placeholder="Enter email"
                        onChange={(e)=>setEmail(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        value={password}
                        placeholder="Enter password"
                        onChange={(e)=>setPassword(e.target.value)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor="role">Role:</Form.Label>
                    <Form.Select id="role" value = {role} onChange={(e)=>setRole(e.target.value)}>
                        <option value="member">Member</option>
                        <option value="seller">Seller</option>
                        <option value="admin">Admin</option>
                    </Form.Select>
                </Form.Group>
                <Button variant="primary" type="submit" onClick={handleSubmit}>
                    Submit
                </Button>
            </Form>
            </Card.Body>
            </Card>
    );
}

export default LoginCard;