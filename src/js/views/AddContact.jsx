import React,{useContext, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {Context} from "../store/appContext";





const AddContact = () => {

    let navigate = useNavigate();

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
                <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Add New Contact
                </button>
            </div>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title">Add a new contact</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <form>
                    <div className="form-group">
                        <label for="Full-Name">Full Name</label>
                        <input type="name" className="form-control" id="Full-Name" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label for="Email">Email address</label>
                        <input type="email" className="form-control" id="Email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label for="Phone-Number">Phone</label>
                        <input type="phone-number" className="form-control" id="Phone-Number" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label for="Address">Address</label>
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
            





{/*         
        // <form>
        //     <div className="form-group">
        //         <label for="Full-Name">Full Name</label>
        //         <input type="name" className="form-control" id="Full-Name" placeholder="Full Name"/>
        //     </div>
        //     <div className="form-group">
        //         <label for="Email">Email address</label>
        //         <input type="email" className="form-control" id="Email" placeholder="Enter email" />
        //     </div>
        //     <div className="form-group">
        //         <label for="Phone-Number">Phone</label>
        //         <input type="phone-number" className="form-control" id="Phone-Number" placeholder="Phone" />
        //     </div>
        //     <div className="form-group">
        //         <label for="Address">Address</label>
        //         <input type="address" className="form-control" id="Address" placeholder="Address" />
        //     </div>
        //     <button type="button" className="btn btn-primary btn-lg">Save</button>
        // </form> */}


export default AddContact;