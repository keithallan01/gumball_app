import React, { useState } from "react";
import {
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    FormGroup,
    Label,
    Input
} from "reactstrap";

const AddCustomerForm = (props) => {

    const [newCustomer, setNewCustomer] = useState({
        id: "",
        firstName: "",
        lastName: "",
        address: "",
        town: "",
        telephoneNumber: "",
        emailAddress: ""
    })

    const [open, setOpen] = useState(false)

    const handleInputChange = e => {
        const { id, value } = e.target
        setNewCustomer({ ...newCustomer, [id]: value })
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.onCustomerSubmit(newCustomer);
        setOpen(false);
    };

    return (
        <div className="add-customer-form container">
            <Button
                className="my-3"
                color="primary"
                onClick={() => setOpen(true)}
            >
                Add Customer
                </Button>
            <Modal
                isOpen={open}
                toggle={() => setOpen(true)}
            >
                <ModalHeader toggle={() => setOpen(false)}>
                    Add New Customer
                    </ModalHeader>
                <ModalBody>
                    <FormGroup>
                        <Label for="firstName">First Name</Label>
                        <Input
                            type="text"
                            id="firstName"
                            defaultValue={newCustomer.firstName}
                            onChange={handleInputChange}
                        />

                        <Label for="lastName">Last Name</Label>
                        <Input
                            type="text"
                            id="lastName"
                            defaultValue={newCustomer.lastName}
                            onChange={handleInputChange}
                        />

                        <Label for="address">Address</Label>
                        <Input
                            type="textarea"
                            id="address"
                            defaultValue={newCustomer.address}
                            onChange={handleInputChange}
                        />

                        <Label for="town">Town</Label>
                        <Input
                            id="town"
                            defaultValue={newCustomer.town}
                            onChange={handleInputChange}
                        />

                        <Label for="emailAddress">Email</Label>
                        <Input
                            type="text"
                            id="emailAddress"
                            defaultValue={newCustomer.emailAddress}
                            onChange={handleInputChange}
                        />

                        <Label for="telephoneNumber">Tel No</Label>
                        <Input
                            type="text"
                            id="telephoneNumber"
                            defaultValue={newCustomer.telephoneNumber}
                            onChange={handleInputChange}
                        />
                    </FormGroup>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={handleSubmit}>
                        Add Customer
                        </Button>{" "}
                    <Button color="secondary" onClick={() => setOpen(false)}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default AddCustomerForm;