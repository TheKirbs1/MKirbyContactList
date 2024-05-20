const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            contacts: []
        },
        actions: {
            exampleFunction: () => {
                getActions().changeColor(0, "green");
            },
            loadSomeData: () => {
                // fetch().then().then(data => setStore({ "foo": data.bar }))
            },

            loadAgendaContacts: async () => {
                const response = await fetch("https://playground.4geeks.com/contact/agendas/MKirby/contacts");
                if (!response.ok) {
                    throw new Error(response.status, response.statusText);
                }
                const data = await response.json();
                setStore({ contacts: data.contacts });
            },

            deleteContact: async (contactId) => {
                const response = await fetch(`https://playground.4geeks.com/contact/agendas/MKirby/contacts/${contactId}`, {
                    method: "DELETE",
                });
                if (!response.ok) {
                    throw new Error(response.status, response.statusText);
                }
                getActions().loadAgendaContacts();
            },

            updateContactHome: async (contactId, name, phone, email, address) => {
                const response = await fetch(`https://playground.4geeks.com/contact/agendas/MKirby/contacts/${contactId}`, {
                    method: "PUT",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        full_name: name,
                        phone: phone,
                        email: email,
                        address: address,
                        agenda_slug: "MKirby",
                    }), 
                });
                if (!response.ok) {
                    throw new Error(response.status, response.statusText);
                }
                getActions().loadAgendaContacts();  // Reload contacts to get updated list
            },

            createNewContact: contactObject => {
                let options = {
                    method: "POST",
                    body: JSON.stringify(contactObject),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                };
                fetch("https://playground.4geeks.com/contact/agendas/MKirby/contacts", options)
                    .then(res => {
                        if (!res.ok) throw Error(res.statusText);
                        return res;
                    })
                    .then(res => console.log("successfully created", res));
            },

            addContact: (newContact) => {
                const store = getStore();
                let revisedStore = [...store.contacts, newContact];
                getActions().createNewContact(newContact);
                setStore({ contacts: revisedStore });
            },

            saveContact: (name, phone, email, address, id) => {
                let newContact = {
                    name: name,
                    phone: phone,
                    email: email,
                    address: address,
                    id: id
                };
                getActions().addContact(newContact);
            },

            // updateContact: (name, phone, email, address, id) => {
            //     const store = getStore();
            //     let updatedContacts = store.contacts.map(contact => {
            //         if (contact.id === id) {
            //             return { ...contact, name, phone, email, address };
            //         }
            //         return contact;
            //     });
            //     setStore({ contacts: updatedContacts });
            //     getActions().updateContactHome(id, name, phone, email, address);
            // }
        }
    };
};

export default getState;
