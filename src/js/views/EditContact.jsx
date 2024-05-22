import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const EditContact = ({ contact }) => {
    let navigate = useNavigate();

    const { actions } = useContext(Context);
    const [name, setName] = useState(contact?.name || "");
    const [phone, setPhone] = useState(contact?.phone || "");
    const [email, setEmail] = useState(contact?.email || "");
    const [address, setAddress] = useState(contact?.address || "");
    const {id} = useParams()
    const updateForm = () => {
        actions.updateContactHome(name, phone, email, address, contact);
        navigate('/');
        actions.getAgendaContacts()
    };
    console.log(contact)

    return (
        <div>
            <div className="container-fluid" id="editButton">
                <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#updateModal">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-fill" viewBox="0 0 16 16">
                        <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z" />
                    </svg>
                </button>
            </div>
            <div className="modal fade" id="updateModal" tabIndex="-1" aria-labelledby="updateModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h2 className="modal-title">Edit Contact</h2>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="name">Full Name</label>
                                    <input type="text" className="form-control" id="name" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email address</label>
                                    <input type="email" className="form-control" id="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone">Phone</label>
                                    <input type="text" className="form-control" id="phone" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="address">Address</label>
                                    <input type="text" className="form-control" id="address" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary btn-lg" onClick={(e) => updateForm(e)} data-bs-dismiss="modal">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default EditContact;
