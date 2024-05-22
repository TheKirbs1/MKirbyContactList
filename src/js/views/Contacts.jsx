import React, { useContext, useEffect } from "react"
import ContactCard from "../component/ContactCard.jsx";
import { Context } from "../store/appContext";
import EditContact from "./EditContact.jsx";

import "../../styles/contacts.css";

const Contacts = () => {
    const { store, actions } = useContext(Context)

    console.log(store.contacts)
    return (
        <div className="contactInfo">
        {
            store.contacts.map((contact, id) => {
                return(
                    <div key={id} className="fullContact bg-light">
                        <ContactCard name={contact.name} address={contact.address} phone={contact.phone} email={contact.email} />
                       
                        {/* <button onClick={() => actions.updateContactHome(contact.id)}> */}
                           <EditContact contact={contact.id} />
                        {/* </button> */}

                        <button onClick={() => actions.deleteContact(contact.id)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                            </svg>
                        </button>
                    </div>
                )
            })
        }
        </div>
    );
}

export default Contacts;