import React from "react";
import { Button, Container } from "react-bootstrap";
import { Card, CardImg, Image } from "react-bootstrap";
import UnderConstruction from '../../img/Death_star_construction.jpg';
import { Link } from "react-router-dom";

export const OnConstruction = () => {

    return (
        <Container fluid className="text-center py-3" >
            <Card className="container p-0 bg-black text-center my-4">
                <Link to="/">
                <Image fluid className="" src={UnderConstruction}></Image>
                    <Card.ImgOverlay>
                        <h1 style={{ fontFamily: "Star Wars, sans-serif", "backgroundColor": "rgba(0,0,0,.3)" }}
                            className="container-fluid position-absolute bottom-0 start-50 translate-middle-x mb-3 text-white fs-1">Under Construction</h1>
                    </Card.ImgOverlay>
                </Link>
            </Card>
        </Container>
    )
};