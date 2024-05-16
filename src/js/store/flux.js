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
			}

			createNewContact: async (contactObject) => {
				const response = await fetch("https://playground.4geeks.com/contact/agendas/MKirby/contacts"),
				method: "POST",
				body: JSON.stringify(contactObject),
				headers: {
					'Content-Type': 'application/json'
				}
			}

			// You will need function to:
			// POST new contact through the API
			// PUT (updated) contacts through the API
		}
	};
};

export default getState;
