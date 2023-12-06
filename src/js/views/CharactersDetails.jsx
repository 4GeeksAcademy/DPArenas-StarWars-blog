import React, { useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Card, Col, Container, Row } from "react-bootstrap";


export const CharactersDetails = () => {
	const { store, actions } = useContext(Context);
	const charDetails = store.currentCharacter;
	const params = useParams();
	const subindice = params.idCharacter;
	const person = store.characters[subindice - 1];
	// console.log({ 'params': subindice });
	// console.log({ 'charDetails': charDetails });
	// console.log({ 'person': person });
	const baseUrl = 'https://starwars-visualguide.com/assets/img/characters/';
	const handleError = (event) =>{
        event.target.src ="https://starwars-visualguide.com/assets/img/placeholder.jpg";
            }
	// const charactersDetails = actions.getCharactersDetails();

	useEffect(() => {
		actions.getCharactersDetails(subindice)
	}, [])

	return (
		<Container className="w-75">
			<Container  className="w-75">
				<Card className=" bg-black text-light border-0 d-flex my-5">
					<Row>
						<div className="col-sm-12 col-md-8 col-lg-6 col-xl-5">
							<Card.Img variant="" src={`${baseUrl}${params.idCharacter}.jpg`} onError={handleError} />
						</div>
						<Col className="">
							<Card.Body>
								<Card.Title>{person ? person.name : ''}</Card.Title>
								<Card.Text>{charDetails ? charDetails.description : ''}</Card.Text>
								<Card.Text><strong>Height: </strong> {charDetails.properties ? charDetails.properties.height : ''}</Card.Text>
								<Card.Text><strong>Mass: </strong>{charDetails.properties ? charDetails.properties.mass : ''}</Card.Text>
								<Card.Text><strong>Hair color: </strong>{charDetails.properties ? charDetails.properties.hair_color : ''}</Card.Text>
								<Card.Text><strong>Skin color: </strong>{charDetails.properties ? charDetails.properties.skin_color : ''}</Card.Text>
								<Card.Text><strong>Eye color: </strong>{charDetails.properties ? charDetails.properties.eye_color : ''}</Card.Text>
								<Card.Text><strong>Birth year: </strong>{charDetails.properties ? charDetails.properties.birth_year : ''}</Card.Text>
								<Card.Text><strong>Gender: </strong>{charDetails.properties ? charDetails.properties.gender : ''}</Card.Text>
							</Card.Body>
						</Col>
					</Row>
				</Card>
			</Container>
			<Link to="/people">
				<span className="btn btn-dark btn-lg ms-5" style={{ marginBottom: "68px"}} role="button">
					Back Characters
				</span>
			</Link>
		</Container >
	);
};
