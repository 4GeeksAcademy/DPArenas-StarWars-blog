import React, { useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Card, Col, Container, Row } from "react-bootstrap";


export const StarshipsDetails = () => {
	const { store, actions } = useContext(Context);
	const starshipDetails = store.currentStarship;
	const params = useParams();
	const subindice = params.idStarship;
	const starship = store.starships[subindice - 1];
	// console.log({ 'params': subindice });
	// console.log({ 'starshipDetails': starshipDetails });
	// console.log({ 'starship': starship });
	const baseUrl = 'https://starwars-visualguide.com/assets/img/starships/';
	const handleError = (event) =>{
        event.target.src ="https://starwars-visualguide.com/assets/img/placeholder.jpg";
            }
	// const starshipsDetails = actions.getstarshipsDetails();

	useEffect(() => {
		// actions.getStarshipsDetails(subindice)
	}, [])

	return (
		<Container className="w-75">
			<Container  className="w-75">
				<Card className=" bg-black text-light border-0 d-flex my-5">
					<Row>
						<div className="col-sm-12 col-md-8 col-lg-6 col-xl-5">
							<Card.Img variant="" src={`${baseUrl}${params.idStarship}.jpg`} onError={handleError} />
						</div>
						<Col className="">
							<Card.Body>
								<Card.Title>{starship ? starship.name : ''}</Card.Title>
								<Card.Text>{starshipDetails ? starshipDetails.description : ''}</Card.Text>
								<Card.Text><strong>Height: </strong> {starshipDetails.properties ? starshipDetails.properties.height : ''}</Card.Text>
								<Card.Text><strong>Mass: </strong>{starshipDetails.properties ? starshipDetails.properties.mass : ''}</Card.Text>
								<Card.Text><strong>Hair color: </strong>{starshipDetails.properties ? starshipDetails.properties.hair_color : ''}</Card.Text>
								<Card.Text><strong>Skin color: </strong>{starshipDetails.properties ? starshipDetails.properties.skin_color : ''}</Card.Text>
								<Card.Text><strong>Eye color: </strong>{starshipDetails.properties ? starshipDetails.properties.eye_color : ''}</Card.Text>
								<Card.Text><strong>Birth year: </strong>{starshipDetails.properties ? starshipDetails.properties.birth_year : ''}</Card.Text>
								<Card.Text><strong>Gender: </strong>{starshipDetails.properties ? starshipDetails.properties.gender : ''}</Card.Text>
							</Card.Body>
						</Col>
					</Row>
				</Card>
			</Container>
			<Link to="/starships">
				<span className="btn btn-dark btn-lg ms-5" style={{ marginBottom: "68px"}} role="button">
					Back starships
				</span>
			</Link>
		</Container >
	);
};
