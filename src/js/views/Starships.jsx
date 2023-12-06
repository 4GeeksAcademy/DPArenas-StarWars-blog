import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Context } from "../store/appContext";
import { Col, Container, Row } from "react-bootstrap";


export const Starships = () => {
	const { store, actions } = useContext(Context);
	const urlImg = 'https://starwars-visualguide.com/assets/img/starships/'

	const handleError = (event) => {
		event.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg'
	}

	return (
		<Container className="">
			<Container fluid className="mb-3">
				<h1 className="text-light pt-1">Starships</h1>
				<Row className="text-center mb-5 row row-cols-1 row-cols-md-3 row-cols-xl-5 g-2">
					{store.starships.map((item, id) => {
						return (
							<Col key={id}>
								<Card className="border border-dark my-2 mx-2 bg-dark">
									<Card.Img variant="top" src={`${urlImg}${item.uid}.jpg`} onError={handleError} />
									<Card.Body className="text-white bg-black">
										<Card.Title>{item.name}</Card.Title>
										<div className="d-flex justify-content-between">
											<Link to="/on-construction" className="btn text-warning btn-outline-dark" >Learn more!</Link>
											<Button
												className={`btn text-danger ${store.favorites.includes(item) ?
													('fa fa-heart fa-lg')
													:
													('far fa-heart fa-lg')}`}
												variant="outline-dark"
												onClick={() => actions.addRemoveFav(item, id)}>
											</Button>
										</div>
									</Card.Body>
								</Card>
							</Col>
						);
					})}
				</Row>
				<Link to="/">
					<span className="btn btn-dark btn-lg mb-4" role="button">
						Back home
					</span>
				</Link>
			</Container>
		</Container>
	);
};