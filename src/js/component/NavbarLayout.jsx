import React from "react";
import { Button, Image } from "react-bootstrap";
import Star_Wars from '../../img/Star_Wars-logo.png'
import Container from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";

export const NavbarLayout = () => {
	return (
		<Navbar className="bg-black text-white mb-3">
			<Container>
				<Navbar.Brand href="#home">
					<Image
						src={Star_Wars}
						className="navbar-brand ms-2 bg-black d-inline-block align-top" style={{ width: "80px" }} />
				</Navbar.Brand>
				<NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
					<Button className="btn btn-primary me-3">Favorites</Button>
					<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
					<NavDropdown.Divider />
				</NavDropdown>
			</Container>
		</Navbar>
	);
};
