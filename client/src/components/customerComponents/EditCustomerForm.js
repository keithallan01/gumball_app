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

const EditCustomerForm = (props) => {

    const [newCustomer, setNewCustomer] = useState({
        id: props.customer.id,
        firstName: props.customer.firstName,
        lastName: props.customer.lastName,
        address: props.customer.address,
        town: props.customer.town,
        telephoneNumber: props.customer.telephoneNumber,
        emailAddress: props.customer.emailAddress
    })

    const [open, setOpen] = useState(false)

    const handleInputChange = e => {
        const { id, value } = e.target
        setNewCustomer({ ...newCustomer, [id]: value })
    }

    const handleUpdate = e => {
        e.preventDefault();
        props.onCustomerUpdate(newCustomer);
        setOpen(false);
    };

    return (
        <div className="edit-customer-form">
            <Button
                className="btn-warning"
                onClick={() => setOpen(true)}
            >
                Edit
            </Button>
            <Modal
                isOpen={open}
                toggle={() => setOpen(true)}
            >
                <ModalHeader toggle={() => setOpen(true)}>
                    Edit Customer
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
                    <Button color="primary" onClick={handleUpdate}>
                        update Customer
                        </Button>{" "}
                    <Button color="secondary" onClick={() => setOpen(false)}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default EditCustomerForm;