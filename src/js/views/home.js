import React from "react";
import Contacts from "./Contacts.jsx";
import AddContact from "./AddContact.jsx";
import EditContact from "./EditContact.jsx";

import "../../styles/home.css";

export const Home = () => (
	<div className="text-center mt-5">
		<div>
			<AddContact />
		</div>
		<div> 
			<Contacts />
		</div>
	</div>
);
