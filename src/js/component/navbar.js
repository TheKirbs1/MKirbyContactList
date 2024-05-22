import React from "react";
import { Link } from "react-router-dom";
import AddContact from "../views/AddContact.jsx";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light">
			<Link to="/">
				<span className="navbar-brand"><h1>Contact List</h1></span>
			</Link>
			<div className="ml-auto">
					<Link to="/addcontact">
					<button className="btn btn-primary"><h2>Add a Contact</h2></button>
					</Link>
			</div>
		</nav>
	);
};