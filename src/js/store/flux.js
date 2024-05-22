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
			
			// changeColor: (index, color) => {
			// 	//get the store
			// 	const store = getStore();

			// 	//we have to loop the entire demo array to look for the respective index
			// 	//and change its color
			// 	const demo = store.demo.map((elm, i) => {
			// 		if (i === index) elm.background = color;
			// 		return elm;
			// 	});

			// 	//reset the global store
			// 	setStore({ demo: demo });
			// }

			// GET Single Agenda
			loadAgendaContacts: async () => {
				const response = await fetch('https://playground.4geeks.com/contact/agendas/MKirby/contacts');
				if (!response.ok) {
					throw new Error(response.status, response.statusText)
				}
				const data = await response.json();
				setStore({contacts: data.contacts});
			}, 
			
			

			//You will need functions to: 
			// POST new contacts through the API 
			createNewContact: async (newContact) => {
				try {
					const response = await fetch('https://playground.4geeks.com/contact/agendas/MKirby/contacts', {
						method: "POST",
						body: JSON.stringify(newContact),
						headers: {
							'Content-Type': 'application/json'
						}
					});
					if (!response.ok) {
						throw new Error(`${response.status}: ${response.statusText}`);
					}
					const data = await response.json();
					console.log("Successfully created!", data);
					return data; // Return the created contact data
				} catch (error) {
					console.error("Error creating contact:", error);
					throw error; // Rethrow the error for further handling
				}
			},
			// Save new contact function 
			saveNewContact:(newContact) => {
				const store = getStore();
				let revisedStore = [...store.contacts, newContact];
				getActions().createNewContact(newContact)
				setStore({contacts: revisedStore})
			},
			setNewContact:(name,address,email,phone) => {
				let newContact = {
					name:name,
					address:address, 
					email:email,
					phone:phone
				};
				getActions().saveNewContact(newContact)
			},
			// updatedContactObject: (name, address, email, phone, contactId) => {
			// 	let contactObject ={
			// 		name:name,
			// 		address:address,
			// 		email:email,
			// 		phone:phone
			// 	};
			// 	getActions().updateContact(contactId, contactObject)
			// },


			// PUT (updated) contacts through the API
			updateContact: async (contactId, contactObject) => {
                try {
                    const response = await fetch(`https://playground.4geeks.com/contact/agendas/MKirby/contacts/${contactId}`, {
                        method: 'PUT',
                        body: JSON.stringify(contactObject),
                        headers: {
                            'Content-Type': 'application/json',
                        }
                    });
                    if (!response.ok) {
                        throw new Error(`${response.status}: ${response.statusText}`);
                    }
                    const data = await response.json();
                    const store = getStore();
                    const updatedContacts = store.contacts.map(contact =>
                        contact.id === parseInt(contactId) ? data : contact
                    );
                    setStore({ contacts: updatedContacts });
                } catch (error) {
                    console.error('Error updating contact:', error);
                    throw error;
                }
            },
			
			// DELETE contacts though the API
			deleteContact: async (contactId) => {
				const response = await fetch('https://playground.4geeks.com/contact/agendas/MKirby/contacts/'+ contactId, {
					method: "DELETE",
				});
				if(!response.ok){
					throw new Error(response.status, response.statusText)
				}
				getActions().loadAgendaContacts();
			},
		}
	};
};

export default getState;


















// const getState = ({ getStore, getActions, setStore }) => {
//     return {
//         store: {
//             contacts: []
//         },
//         actions: {
//             exampleFunction: () => {
//                 getActions().changeColor(0, "green");
//             },
//             loadSomeData: () => {
//                 // fetch().then().then(data => setStore({ "foo": data.bar }))
//             },

//             loadAgendaContacts: async () => {
//                 const response = await fetch("https://playground.4geeks.com/contact/agendas/MKirby/contacts");
//                 if (!response.ok) {
//                     throw new Error(response.status, response.statusText);
//                 }
//                 const data = await response.json();
//                 setStore({ contacts: data.contacts });
//             },

//             deleteContact: async (contactId) => {
//                 const response = await fetch(`https://playground.4geeks.com/contact/agendas/MKirby/contacts/${contactId}`, {
//                     method: "DELETE",
//                 });
//                 if (!response.ok) {
//                     throw new Error(response.status, response.statusText);
//                 }
//                 getActions().loadAgendaContacts();
//             },

            

//             createNewContact: contactObject => {
//                 let options = {
//                     method: "POST",
//                     body: JSON.stringify(contactObject),
//                     headers: {
//                         'Content-Type': 'application/json'
//                     }
//                 };
//                 fetch("https://playground.4geeks.com/contact/agendas/MKirby/contacts", options)
//                     .then(res => {
//                         if (!res.ok) throw Error(res.statusText);
//                         return res;
//                     })
//                     .then(res => console.log("successfully created", res));
//             },

//             addContact: (newContact) => {
//                 const store = getStore();
//                 let revisedStore = [...store.contacts, newContact];
//                 getActions().createNewContact(newContact);
//                 setStore({ contacts: revisedStore });
//             },

//             saveContact: (name, phone, email, address, id) => {
//                 let newContact = {
//                     name: name,
//                     phone: phone,
//                     email: email,
//                     address: address,
//                     id: id
//                 };
//                 getActions().addContact(newContact);
//             },

//             updateContact: async (contactId, contactObject) => {
//                 try {
//                     const response = await fetch(`https://playground.4geeks.com/contact/agendas/MKirby/contacts/${contactId}`, {
//                         method: 'PUT',
//                         body: JSON.stringify(contactObject),
//                         headers: {
//                             'Content-Type': 'application/json',
//                         }
//                     });
//                     if (!response.ok) {
//                         throw new Error(`${response.status}: ${response.statusText}`);
//                     }
//                     const data = await response.json();
//                     const store = getStore();
//                     const updatedContacts = store.contacts.map(contact =>
//                         contact.id === parseInt(contactId) ? data : contact
//                     );
//                     setStore({ contacts: updatedContacts });
//                 } catch (error) {
//                     console.error('Error updating contact:', error);
//                     throw error;
//                 }
//             },

//         }
//     };
// };

// export default getState;







// getAgendaContacts: async () => {
//     const response = await fetch("https://playground.4geeks.com/contact/agendas/MKirby",{
//     method: "GET",
//     header: {
//         'Content-Type': 'application/json'
//     }
// })
//     if (!response.ok) {
//         throw new Error(response.status, response.statusText);
//     }
//     const data = await response.json();
//     setStore({ contacts: data });
//     return getStore().contacts 
//     },

// updateContactHome: (Id, name, phone, email, address) => {
//     const store = getStore()
//     console.log(Id)
//     fetch(`https://playground.4geeks.com/contact/agendas/MKirby/contacts/${Id}`, {
//         method: "PUT",
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//                 name: name,
//                 phone: phone,
//                 email: email,
//                 address: address,
//                 slug: "MKirby"
//         }),
//     })
//     .then((response)=> {
//         if (!response.ok) {
//             throw new Error(response.status, response.statusText);
//         }
//         return response.json()
//     })

//     .then((updateContact)=> {
//         const updatedContactId = store.contacts.map((user) =>{
//             if(user.id === contactId) {
//                 return {
//                     ...user,
//                     name: updateContact.name,
//                     phone: updateContact.phone,
//                     email: updateContact.email,
//                     address: updateContact.address
//                 }
//             }
//             return user
//         })
//         setStore({
//             contacts: updatedContactId
//         })
//     })
//     .catch((error)=>{
//         console.log(error)
//     })
// },