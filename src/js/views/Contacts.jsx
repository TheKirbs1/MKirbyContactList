import React, { useContext, useEffect } from "react"
import ContactCard from "../component/ContactCard.jsx";
import { Context } from "../store/appContext";


const Contacts = () => {
    const { store, actions } = useContext(Context)


    return (
        <>
        <div>
        {
            store.contacts.map(contact => {
                return(
                    <div key={contact.id}>
                        <ContactCard name={contact.name} address={contact.address} phone={contact.phone} email={contact.email} />
                        <button >Update</button>
                        <button onClick={() => actions.deleteContact(contact.id)}>Delete</button>
                    </div>
                )
            })
        }
        </div>
        </>
    );
}

export default Contacts;