import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../styles/Layout.css"

import { Home } from "./views/Home.jsx";
import { Characters } from "./views/Characters.jsx";
import { Planets } from "./views/Planets.jsx";
import { CharactersDetails } from "./views/CharactersDetails.jsx";
import { PlanetsDetails } from "./views/PlanetsDetails.jsx";
import injectContext from "./store/appContext.js";

import { NavbarLayout } from "./component/NavbarLayout.jsx";
import { Footer } from "./component/Footer.jsx";
import { File404 } from "./views/File404.jsx";
import { OnConstruction } from "./views/OnConstruction.jsx";
import { Starships } from "./views/Starships.jsx";
import { StarshipsDetails } from "./views/StarshipsDetails.jsx";

//create your first component
const Layout = () => {
	
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";
	
	return (
		<div id="layout" className="h-100" >
			<BrowserRouter basename={basename}>
				<NavbarLayout />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/people" element={<Characters />} />
					<Route path="/planets" element={<Planets />} />
					<Route path="/starships" element={<Starships />} />
					<Route path="/people/:idCharacter" element={<CharactersDetails />} />
					<Route path="/planets/:idPlanet" element={<PlanetsDetails />} />
					<Route path="/starships/:idStarship" element={<StarshipsDetails />} />
					<Route path="*" element={<File404 />} />
					<Route path="/on-construction" element={<OnConstruction />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
