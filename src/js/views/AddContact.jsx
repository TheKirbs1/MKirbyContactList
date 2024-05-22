import React,{useContext, useState} from "react";
import {Context} from "../store/appContext";





const AddContact = () => {


    const {store, actions} = useContext(Context);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    
    const submitForm = (e) => {
        e.preventDefault();
        console.log(name,phone,email,address)
        actions.saveContact(name,phone,email,address);
        setName("")
        setPhone("")
        setEmail("")
        setAddress("")
     }

    return (
        <div>
            <div className="container-fluid text-end" id="addButton">
                <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Add New Contact
                </button>
            </div>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl">
            <div className="modal-content">
            <div className="modal-header">
                <h2 className="modal-title">Add a new contact</h2>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <form>
                    <div className="form-group">
                        <label htmlFor="Full-Name">Full Name</label>
                        <input type="name" className="form-control" id="Full-Name" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Email">Email address</label>
                        <input type="email" className="form-control" id="Email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Phone-Number">Phone</label>
                        <input type="phone-number" className="form-control" id="Phone-Number" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Address">Address</label>
                        <input type="address" className="form-control" id="Address" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} />
                    </div>
                </form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-primary btn-lg" onClick={(e) => submitForm(e)} data-bs-dismiss="modal">Save</button>
                </div>
                </div>
            </div>
            </div>
        </div>
)}

export default AddContact;