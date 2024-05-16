import React from "react"


//this component will take props to populate each contact p tag
const ContactCard = ({id, name, address, phone, email}) => {

    return (
        <>
            <div>
                <div className="contact">
                    <img src="https://xsgames.co/randomusers/avatar.php?g=pixel"/>
                    <div className="contactInfo">
                        <p className="contactName">{name}</p>
                        <p className="contactAddress">{address}</p>
                        <p className="contactphone">{phone}</p>
                        <p className="contactemail">{email}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ContactCard;