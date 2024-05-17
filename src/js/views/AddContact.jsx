import React from "react"

const AddContact = () => {

    return (
        <form>
            <div class="form-group">
                <label for="Full-Name">Full Name</label>
                <input type="name" class="form-control" id="Full-Name" placeholder="Full Name"/>
            </div>
            <div class="form-group">
                <label for="Email">Email address</label>
                <input type="email" class="form-control" id="Email" placeholder="Enter email" />
            </div>
            <div class="form-group">
                <label for="Phone-Number">Phone</label>
                <input type="phone-number" class="form-control" id="Phone-Number" placeholder="Phone" />
            </div>
            <div class="form-group">
                <label for="Address">Address</label>
                <input type="address" class="form-control" id="Address" placeholder="Address" />
            </div>
        </form>
    )
}

export default AddContact;