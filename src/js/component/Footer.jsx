import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
	const baseurl = 'http://www.4geeksacademy.com'

	return (
		<footer className="py-3 text-center text-white">
			<p className="fw-bold">
				<span className=" bg-dark">
				Made with <i className="fa fa-heart text-danger" /> {"by "}
					<Link to={'https://github.com/Danielperezarenas'} className="btn-outline-dark text-info" >Daniel Pérez Arenas</Link>{" & "}
					<Link to={baseurl} target="_blank" className="btn-outline-dark link-info">4Geeks Academy</Link>
				</span>
			</p>
		</footer>
	)
};
