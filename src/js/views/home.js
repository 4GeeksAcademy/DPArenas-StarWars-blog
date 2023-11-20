import React from "react";
import "../../styles/home.css";
import { Card, CardImg, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const urlImg = 'https://starwars-visualguide.com/Linkssets/img/characters/1.jpg'

export const Home = () => (
	<Container className="bg-black">
		<Row>
			<Col>
				<Link to="#/characters?page=1">
					<Card className="bg-black text-white"> 
						<CardImg className="overlay" src="https://starwars-visualguide.com/assets/img/categories/character.jpg" />
						<Card.ImgOverlay>
							<span className="category-title tc-red-600 display-block jedi-font">Characters</span>
						</Card.ImgOverlay>
					</Card>
				</Link>
			</Col>
			<Col>
				<Link to="#/films?page=1">
					<Card className="bg-black text-white">
						<div id="films" className="">
							<CardImg className="overlay" src="https://starwars-visualguide.com/assets/img/categories/films.jpg" />
							<Card.ImgOverlay>
								<span className="category-title tc-yellow-400 display-block jedi-font">Films</span>
							</Card.ImgOverlay>
						</div>
					</Card>
				</Link>
			</Col>
			<Col>
				<Link to="#/species?page=1">
					<Card className="bg-black text-white">
						<div id="species" className="">
							<CardImg className="img-overlay" src="https://starwars-visualguide.com/assets/img/categories/species.jpg" />
							<Card.ImgOverlay>
								<span className="category-title tc-deep-orange-600 display-block jedi-font">Species</span>
							</Card.ImgOverlay>
						</div>
					</Card>
				</Link>
			</Col>
		</Row>
		<Row>
			<Col>
				<Link to="#/starships?page=1">
					<Card className="bg-black text-white">
						<div id="starships" className="">
							<CardImg className="img-overlay" src="https://starwars-visualguide.com/assets/img/categories/starships.jpg" />
							<Card.ImgOverlay>
								<span className="category-title tc-white-1 display-block jedi-font">Starships</span>
							</Card.ImgOverlay>
						</div>
					</Card>
				</Link>
			</Col>
			<Col>
				<Link to="#/vehicles?page=1">
					<Card className="bg-black text-white">
						<div id="vehicles" className="">
							<CardImg className="img-overlay" src="https://starwars-visualguide.com/assets/img/categories/vehicles.jpg" />
							<Card.ImgOverlay>
								<span className="category-title tc-blue-200 display-block jedi-font">`ehicles</span>
							</Card.ImgOverlay>
						</div>
					</Card>
				</Link>
			</Col>
			<Col>
				<Link to="#/planets?page=1">
					<Card className="bg-black text-white">
						<div id="planets" className="">
							<CardImg className="img-overlay" src="https://starwars-visualguide.com/assets/img/categories/planets.jpg" />
							<Card.ImgOverlay>
								<span className="category-title tc-yellow-400 display-block jedi-font">Planets</span>
							</Card.ImgOverlay>
						</div>
					</Card>
				</Link>
			</Col>
		</Row>
	</Container >
);




{/* <Card className="bg-black text-white w-25">
<Card.Img src={urlImg} alt="Card image" />
<Card.ImgOverlay>
<Card.Title>Card title</Card.Title>
<Card.Text>
	This is a wider card with supporting text below as a natural lead-in
	to additional content. This content is a little bit longer.
</Card.Text>
<Card.Text>Last updated 3 mins ago</Card.Text>
</Card.ImgOverlay>
</Card>

<Card className="bg-black text-white" style={{ width: '18rem' }}>
<Card.Img variant="top" src={urlImg} />
<Card.Body>
<Card.Title>Card Title</Card.Title>
<Card.Text>
	Some quick example text to build on the card title and make up the
	bulk of the card's content.
</Card.Text>
<Button variant="primary">Go somewhere</Button>
</Card.Body>
</Card> */}