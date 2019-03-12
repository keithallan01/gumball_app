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

const AddListingForm = props => {
  const [newListing, setNewListing] = useState({
    id: "",
    item: "",
    description: "",
    category: "",
    askingPrice: "",
    searchCounter: 0,
    customer: ""
  });

  const [open, setOpen] = useState(false);

  const handleInputChange = e => {
    const { id, value } = e.target;
    setNewListing({ ...newListing, [id]: value });
  };

  const handleSelectChange = e => {
    const { id, value } = e.target;
    setNewListing({
      ...newListing,
      [id]: `http://localhost:8080/customers/${value}`
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.onListingSubmit(newListing);
    setOpen(false);
  };

  const customerNames = props.customersArr.map(customer => {
    return (
      <option value={customer.id} key={customer.id}>
        {customer.firstName} {customer.lastName}
      </option>
    );
  });

  return (
    <div className="add-Listing-form">
      <Button className="my-3" color="primary" onClick={() => setOpen(true)}>
        Add Listing
      </Button>
      <Modal isOpen={open} toggle={() => setOpen(true)}>
        <ModalHeader toggle={() => setOpen(true)}>Add New Listing</ModalHeader>
        <ModalBody>
          <FormGroup>
            <Label for="customer">Select Customer</Label>
            <Input
              type="select"
              id="customer"
              defaultValue="default"
              onChange={handleSelectChange}
            >
              {customerNames}
            </Input>
            <Label for="item">Item</Label>
            <Input
              type="text"
              id="item"
              defaultValue={newListing.item}
              onChange={handleInputChange}
            />
            <Label for="description">Description</Label>
            <Input
              type="text"
              id="description"
              defaultValue={newListing.description}
              onChange={handleInputChange}
            />

            <Label for="category">Category</Label>
            <Input
              type="text"
              id="category"
              defaultValue={newListing.category}
              onChange={handleInputChange}
            />

            <Label for="askingPrice">Price</Label>
            <Input
              id="askingPrice"
              defaultValue={newListing.askingPrice}
              onChange={handleInputChange}
            />

            <Label for="exampleFile">File</Label>
            <Input type="file" name="file" id="exampleFile" />
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleSubmit}>
            Add Listing
          </Button>{" "}
          <Button color="secondary" onClick={() => setOpen(false)}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default AddListingForm;
