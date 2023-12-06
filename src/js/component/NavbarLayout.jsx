import React from "react";
import { Badge, Col, Image, Row } from "react-bootstrap";
import Star_Wars from '../../img/Star_Wars-logo.png'
import { Container } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import { Navbar } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import { Btnfavorites } from "./Btnfavorites.jsx";

export const NavbarLayout = () => {
	return (
		<nav className="navbar navbar-black bg-black mb-3">
			<div className="container-fluid d-flex justify-content-between mx-md-4 mt-4 mb-1">
				<div>
					<Link className="navbar-brand bg-transparent" to="/"><img height="55" src={Star_Wars} /></Link>
				</div>
				<div>
					<ul className="nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<Link to="/people" className="text-light btn btn-black">Characters</Link>
						</li>
						<li className="nav-item">
							<Link to="/planets" className="text-light btn btn-black">Planets</Link>
						</li>
						<li className="nav-item">
							<Link to="/starships" className="text-light btn btn-black">Starships</Link>
						</li>
						<li className="nav-item">
							<div className="dropdown">
								<Btnfavorites/>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</nav>
		);
};
{/* <Navbar className="d-flex container-fluid bg-black">
			<Container fluid className="d-flex mx-md-4 mt-2 mb-1">
				<Row className="container-fluid">
					<Col>
						<Link to='/'>
							<Navbar.Brand>
								<Image
									src={Star_Wars}
									className="navbar-brand" style={{ width: "120px" }} />
							</Navbar.Brand>
						</Link>
					</Col>
						<Nav className="col ms-auto text-light mb-2 justify-content-end">
							<Link to="/people" className="text-light btn btn-black">Characters</Link>
							<Link to="/planets" className="text-light btn btn-black">Planets</Link>
							<Link to="/starships" className="text-light btn btn-black">Starships</Link>
							<Btnfavorites />
						</Nav>
				</Row>
			</Container>
		</Navbar > */}

