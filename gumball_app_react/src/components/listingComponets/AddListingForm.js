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
    decription: "",
    category: "",
    askingPrice: "",
    searchCounter: ""
  });

  const [open, setOpen] = useState(false);

  const handleInputChange = e => {
    const { id, value } = e.target;
    setNewListing({ ...newListing, [id]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.onListingSubmit(newListing);
    setOpen(false);
  };

  return (
    <div className="add-Listing-form">
      <Button className="my-3" color="primary" onClick={() => setOpen(true)}>
        Add Listing
      </Button>
      <Modal isOpen={open} toggle={() => setOpen(true)}>
        <ModalHeader toggle={() => setOpen(true)}>Add New Listing</ModalHeader>
        <ModalBody>
          <FormGroup>
            <Label for="exampleSelect">Select Customer</Label>
            <Input type="select" name="select" id="exampleSelect">
              <option>1</option>
              <option>2</option>
            </Input>
            <Label for="item">Item</Label>
            <Input
              type="text"
              id="item"
              defaultValue={newListing.item}
              onChange={handleInputChange}
            />
            <Label for="decription">Decription</Label>
            <Input
              type="text"
              id="decription"
              defaultValue={newListing.decription}
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

            {/* <Label for="searchCounter">No. Views</Label>
            <Input
              type="text"
              id="searchCounter"
              defaultValue={newListing.searchCounter}
              onChange={handleInputChange}
            /> */}
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
