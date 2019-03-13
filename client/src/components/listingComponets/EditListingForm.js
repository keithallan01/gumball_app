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

const EditListingForm = (props) => {

    // console.dir(props)

    const [newListing, setNewListing] = useState({
        id: props.listing.id,
        item: props.listing.item,
        description: props.listing.description,
        category: props.listing.category,
        askingPrice: props.listing.askingPrice,
        searchCounter: props.listing.searchCounter
    })

    const [open, setOpen] = useState(false)

    const handleInputChange = e => {
        const { id, value } = e.target
        setNewListing({ ...newListing, [id]: value })
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.onListingUpdate(props.listing._links.listing.href, newListing);
        setOpen(false);
    };

    return (
        <div className="edit-Listing-form">
            <Button
                className="btn-warning"
                onClick={() => setOpen(true)}
            >
                Edit Listing
                </Button>
            <Modal
                isOpen={open}
                toggle={() => setOpen(true)}
            >
                <ModalHeader toggle={() => setOpen(true)}>
                    Edit Listing
                    </ModalHeader>
                <ModalBody>
                    <FormGroup>
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

                        <Label for="searchCounter">No. Views</Label>
                        <Input
                            type="text"
                            id="searchCounter"
                            defaultValue={newListing.searchCounter}
                            onChange={handleInputChange}
                        />
                    </FormGroup>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={handleSubmit}>
                        Update Listing
                        </Button>{" "}
                    <Button color="secondary" onClick={() => setOpen(false)}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default EditListingForm;