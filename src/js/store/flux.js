const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},

			//GET Single Agenda
			loadAgendaContacts: async () => {
				const response = await fetch("https://playground.4geeks.com/contact/agendas/MKirby/contacts");
					if (!response.ok) {
						throw new Error(response.status, response.statusText)
					}
					const data = await response.json()
					setStore({contacts: data.contacts});
			},


			deleteContact: async (contactId) => {
				const response = await fetch(`https://playground.4geeks.com/contact/agendas/MKirby/contacts/${contactId}`, {
					method: "DELETE",
				});
				if (!response.ok) {
					throw new Error(response.status, response.statusText)
				}
				getActions().loadAgendaContacts()
			},



			// updateContact: async (contactId) => {
			// 	const respone = await fetch(`https://playground.4geeks.com/contact/agendas/MKirby/contacts/${contactId}`, {
			// 		method: 'PUT',
			// 		body: SON.stringify(contactId), 
			// 		headers: {
			// 			'Content-Type': 'application/json'
			// 		}
			// 	});
			// 	if (!response.ok) {
			// 		throw new Error(response.status, response.statusText)
			// 	}
			// 	setStore({contacts: data.contacts})
			// }

			createNewContact: contactObject => {
				let options = {
					method: "POST",
					body: JSON.stringify(contactObject),
					headers: {
						'Content-Type': 'application/json'
					}
				}
				fetch("https://playground.4geeks.com/contact/agendas/MKirby/contacts", options)
				.then (res => {
					if (!res.ok) throw Error (res.statusText);
					return res
				})
				.then (res => console.log("successfully created", res))
			},

			addContact: (newContact) => {
				const store =getStore();
				let revisedStore = [...store.contacts, newContact];
				getActions().createNewContact(newContact);
				setStore({contacts: revisedStore});
			},

			saveContact: (name, phone, email, address, id) => {
				let newContact = {
					name: name,
					phone: phone,
					email: email,
					address: address,
					id: id
				}
				getActions().addContact(newContact);
			}









			// You will need function to:
			// POST new contact through the API
			// PUT (updated) contacts through the API
		}
	};
};

export default getState;
