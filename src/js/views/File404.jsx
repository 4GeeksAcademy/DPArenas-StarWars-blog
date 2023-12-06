import React from "react";
import { Button, Container, Image } from "react-bootstrap";
import Starwars404 from '../../img/Starwars404.png'
import { Link } from "react-router-dom";

export const File404 = () => {

return (
    <Container fluid className="text-center w-75" style={{ marginBottom: "-15px"}}>
        <Link to="/">
            <Image fluid src={Starwars404}></Image>
        </Link>
    </Container>
)};