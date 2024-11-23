import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Alert, Button } from "react-bootstrap";
import API from "../api";

const Dashboard = () => {
    const [user, setUser] = useState(null);
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await API.get("/user");
                setUser(res.data);
            } catch (err) {
                setMessage("Unauthorized! Redirecting...");
                setTimeout(() => navigate("/login"), 2000);
            }
        };
        fetchUser();
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    return (
        <Container className="mt-5 text-center">
            <h2>Dashboard</h2>
            {message && <Alert variant="danger">{message}</Alert>}
            {user && <h4>Welcome, {user.name}!</h4>}
            <Button variant="danger" onClick={handleLogout} className="mt-3">
                Logout
            </Button>
        </Container>
    );
};

export default Dashboard;
