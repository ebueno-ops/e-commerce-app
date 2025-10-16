// noinspection RequiredAttributes
import React, {useState} from 'react';
import {Container} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import LoginCard from "./LoginCard";
import "./Login.css";

function LoginPage() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [role, setRole] = useState('member');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await axios.post("http://localhost:8000/api/auth/login", {
            email, password, role
        });

        const data = await res.data;

        //if login is successful
        if (data.token) {
            //store token and role in local storage
            localStorage.setItem("token", data.token);
            localStorage.setItem("role", data.role);

            if(data.role === "member"){
                navigate("/products");
            } else if (data.role === "admin"){
                navigate("/admin-dashboard");
            } else if (data.role === "seller"){
                navigate("/seller-dashboard");
            } else {
                navigate("/home");
            }
            //display login success
            alert(data.message);

        } else {
            //display error
            alert(data.error);
        }

    }

    return (
        <Container fluid className="login-container">
            <LoginCard
                email = {email}
                password = {password}
                role = {role}
                setEmail = {setEmail}
                setPassword = {setPassword}
                setRole = {setRole}
                handleSubmit = {handleSubmit}
            />
        </Container>
    );
}

export default LoginPage;