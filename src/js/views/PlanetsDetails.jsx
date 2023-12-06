import React, { useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Card, Col, Container, Row } from "react-bootstrap";


export const PlanetsDetails = () => {
	const { store, actions } = useContext(Context);
	const planetsDetails = store.currentPlanet;
	const params = useParams();
	const subindice = params.idPlanet;
	const planet = store.planets[subindice - 1];
	const baseUrl = 'https://starwars-visualguide.com/assets/img/planets/';
	const handleError = (event) =>{
        event.target.src ="https://starwars-visualguide.com/assets/img/placeholder.jpg";
            }

	useEffect(() => {
		actions.getPlanetsDetails(subindice)
	}, [])

	return (
		<Container className="w-75">
			<Container className="w-75">
				<Card className="bg-dark text-light border-0 d-flex my-5">
					<Row>
						<div className="col-sm-12 col-md-6 col-lg-6 col-xl-5">
							<Card.Img variant="" src={`${baseUrl}${params.idPlanet}.jpg`} onError={handleError} />
						</div>
						<Col className="">
							<Card.Body>
								<Card.Title className="pb-2">{planet ? planet.name : ''}</Card.Title>
								<Card.Text><strong>Diameter: </strong>{planetsDetails ? planetsDetails.diameter : ''}</Card.Text>
								<Card.Text><strong>Rotation_period: </strong>{planetsDetails ? planetsDetails.rotation_period : ''}</Card.Text>
								<Card.Text><strong>Population: </strong>{planetsDetails ? planetsDetails.population : ''}</Card.Text>
								<Card.Text><strong>Climate: </strong>{planetsDetails ? planetsDetails.climate : ''}</Card.Text>
								<Card.Text><strong>Trrain: </strong>{planetsDetails ? planetsDetails.terrain : ''}</Card.Text>
								<Card.Text><strong>Gravity: </strong>{planetsDetails ? planetsDetails.gravity : ''}</Card.Text>
							</Card.Body>
						</Col>
					</Row>
				</Card>
			</Container>
			<Link to="/planets">
				<span className="btn btn-dark btn-lg ms-5" style={{ marginBottom: "68px"}} role="button">
					Back Planets
				</span>
			</Link>
		</Container >
	);
};
