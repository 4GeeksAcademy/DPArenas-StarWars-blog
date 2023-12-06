import React from "react";
import { Card, CardImg, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useParams } from "react-router-dom";

export const Home = () => {


	return (
		<Container className=" mt-5">
			<Row style={{ marginBottom: "200px"}}>
				<Col lg={4} md={6}>
					<Link to="/people">
						<Card className="bg-black text-white text-center my-4">
							<CardImg className="overlay" src="https://starwars-visualguide.com/assets/img/categories/character.jpg" />
							<Card.ImgOverlay>
								<span style={{ fontFamily: "Star Wars, sans-serif", "backgroundColor": "rgba(0,0,0,.3)" }}
									className="container-fluid position-absolute bottom-0 start-50 translate-middle-x mb-3 text-danger fs-5">Characters
								</span>
							</Card.ImgOverlay>
						</Card>
					</Link>
				</Col>
				<Col lg={4} md={6}>
					<Link to="/planets">
						<Card className="bg-black text-white text-center my-4">
							<CardImg className="img-overlay" src="https://starwars-visualguide.com/assets/img/categories/planets.jpg" />
							<Card.ImgOverlay>
								<span style={{ fontFamily: "Star Wars, sans-serif", "backgroundColor": "rgba(0,0,0,.3)" }}
									className="container-fluid position-absolute bottom-0 start-50 translate-middle-x mb-3 text-warning fs-5">Planets
								</span>
							</Card.ImgOverlay>
						</Card>
					</Link>
				</Col>
				<Col lg={4} md={6}>
					<Link to="/starships">
						<Card className="bg-black text-white text-center my-4">
							<CardImg className="img-overlay" src="https://starwars-visualguide.com/assets/img/categories/starships.jpg" />
							<Card.ImgOverlay>
								<span style={{ fontFamily: "Star Wars, sans-serif", "backgroundColor": "rgba(0,0,0,.3)" }}
									className="container-fluid position-absolute bottom-0 start-50 translate-middle-x mb-3 fs-5">Starships
								</span>
							</Card.ImgOverlay>
						</Card>
					</Link>
				</Col>
				<Col lg={4} md={6}>
					<Link to="/on-construction">
						<Card className="bg-black text-white text-center my-4">
							<CardImg className="overlay" src="https://starwars-visualguide.com/assets/img/categories/films.jpg" />
							<Card.ImgOverlay>
								<span style={{ fontFamily: "Star Wars, sans-serif", "backgroundColor": "rgba(0,0,0,.3)" }}
									className="container-fluid position-absolute bottom-0 start-50 translate-middle-x mb-3 fs-5">Films
								</span>
							</Card.ImgOverlay>
						</Card>
					</Link>
				</Col>
				<Col lg={4} md={6}>
					<Link to="/on-construction">
						<Card className="bg-black text-white text-center my-4">
							<CardImg className="img-overlay" src="https://starwars-visualguide.com/assets/img/categories/species.jpg" />
							<Card.ImgOverlay>
								<span style={{ fontFamily: "Star Wars, sans-serif", "backgroundColor": "rgba(0,0,0,.3)" }}
									className="container-fluid position-absolute bottom-0 start-50 translate-middle-x mb-3 text-danger fs-5">Species
								</span>
							</Card.ImgOverlay>
						</Card>
					</Link>
				</Col>
				<Col lg={4} md={6}>
					<Link to="/on-construction">
						<Card className="bg-black text-white text-center my-4">
							<CardImg className="img-overlay" src="https://starwars-visualguide.com/assets/img/categories/vehicles.jpg" />
							<Card.ImgOverlay>
								<span style={{ fontFamily: "Star Wars, sans-serif", "backgroundColor": "rgba(0,0,0,.3)" }}
									className="container-fluid position-absolute bottom-0 start-50 translate-middle-x mb-3 text-info fs-5 ">Vehicles
								</span>
							</Card.ImgOverlay>
						</Card>
					</Link>
				</Col>
			</Row>
		</Container >
	)
};