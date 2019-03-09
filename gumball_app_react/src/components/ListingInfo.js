import React, { Component } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Table,
  Button,
  FormGroup,
  Label,
  Input
} from "reactstrap";


class ListingInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
          newListingInfo: {
            item: "",
            description: "",
            category: "",
            askingPrice: 0.0,
            customer: null
          },
          editListingInfo: {
              id:"",
              item: "",
              description: "",
              category: "",
              askingPrice: 0.0,
              customer: null
          },
          NewListingModel: false,
          EditListingModel: false
        };
      }

    render() {  
    const listingDetail = this.props.listingsArr.map((listing) => {
        return (
            <tr key={listing.id}>
                <td>{listing.item}</td>
                <td>{listing.description}</td>
                <td>{listing.category}</td>
                <td>{listing.askingPrice}</td>
                <td>{listing.searchCounter}</td>
                <td><button className="btn-warning">Edit</button></td>
                <td><button className="btn-danger">Delete</button></td>
            </tr>
        );
    });
    return (
        <div className="listing-info container">
          <Button className="my-3" color="primary" onClick={this.handleOnClickNewListing}>
            Add Listing
          </Button>
          <Modal
            isOpen={this.state.NewListingModel}
            toggle={this.handleOnClickNewListing}
          >
            <ModalHeader toggle={this.handleOnClickNewListing}>
              Add New Listing
            </ModalHeader>
            <ModalBody>
              <FormGroup>
                <Label for="item">Item Name</Label>
                <Input type="text" id="item" defaultValue={this.state.newListingInfo.item} onChange={this.handleItemChange}/>
  
                <Label for="description">Description</Label>
                <Input type="text" id="description" defaultValue={this.state.newListingInfo.description} onChange={this.handleDescriptionChange}/>
  
                <Label for="category">Category</Label>
                <Input type="textarea" id="category" defaultValue={this.state.newListingInfo.category} onChange={this.handleCategoryChange}/>
  
                <Label for="price">Price</Label>
                <Input id="price" defaultValue={this.state.newListingInfo.askingPrice} onChange={this.handleAskingPriceChange}/>
  
                {/* <Label for="customer">Customer</Label>
                <Input type="text" id="customer" defaultValue={this.state.newListingInfo.customer} onChange={this.handleCustomerChange}/> */}

              </FormGroup>
            </ModalBody>
            <ModalFooter>
              <Button
                color="primary"
                onClick={this.handleSubmit}
              >
                Add Listing
              </Button>{" "}
              <Button
                color="secondary"
                onClick={this.handleOnClickNewListing}
              >
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
  
          <Modal
            isOpen={this.state.EditListingModel}
            toggle={this.handleOnClickEditListing}
          >
            <ModalHeader toggle={this.handleOnClickEditListing}>
              Edit Listing
            </ModalHeader>
            <ModalBody>
              <FormGroup>
              <Label for="item">Item Name</Label>
                <Input type="text" id="item" defaultValue={this.state.newListingInfo.item} onChange={this.handleItemChange}/>
  
                <Label for="description">Description</Label>
                <Input type="text" id="description" defaultValue={this.state.newListingInfo.description} onChange={this.handleDescriptionChange}/>
  
                <Label for="category">Category</Label>
                <Input type="textarea" id="category" defaultValue={this.state.newListingInfo.category} onChange={this.handleCategoryChange}/>
  
                <Label for="price">Price</Label>
                <Input id="price" defaultValue={this.state.newListingInfo.askingPrice} onChange={this.handleAskingPriceChange}/>
  
                {/* <Label for="customer">Customer</Label>
                <Input type="text" id="customer" defaultValue={this.state.newListingInfo.customer} onChange={this.handleCustomerChange}/> */} 
                </FormGroup>
            </ModalBody>
            <ModalFooter>
              <Button
                color="primary"
                onClick={this.handleUpdate}
              >
                update Listing
              </Button>{" "}
              <Button
                color="secondary"
                onClick={this.handleOnClickEditListing}
              >
                Cancel
              </Button>
            </ModalFooter>
          </Modal>

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Searches</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                    {listingDetail}
                </tbody>
            </table>
        </div>
    );
}

    handleOnClickNewListing = () =>{
        this.setState({
          NewListingModel: ! this.state.NewListingModel
        })
    }
    
    handleOnClickEditListing = () =>{
        this.setState({
          EditListingModel: ! this.state.EditListingModel
        })
    }
    
    handleItemChange= (e) =>{
        this.setState({item: e.target.value})
      }
    
      handleDescriptionChange= (e) =>{
        this.setState({description: e.target.value})
      }
    
      handleCategoryChange= (e) =>{
        this.setState({category: e.target.value})
      }
    
      handleAskingPriceChange= (e) =>{
        this.setState({askingPrice: e.target.value})
      }
    
    //   handleCustomerChange= (e) =>{
    //     this.setState({customer: e.target.value})
    //   }

    
      handleSubmit= (e) => {
        e.preventDefault();
        const newListing = {
            item: this.state.item,
             description: this.state.description,
             category: this.state.category,
             askingPrice: this.state.askingPrice
            //  customer: this.state.customer
            }
        this.props.onListingSubmit(newListing)
        this.setState({item: '', description: '', category:'', price:'', customer:''})
        this.setState({ NewListingModel: ! this.state.NewListingModel})
      }
    
      handleUpdate = (e) =>{
        e.preventDefault();
        const editListing = {
            id: this.state.editListingInfo.id,
            item: this.state.item,
             description: this.state.description,
             category: this.state.category,
             askingPrice: this.state.askingPrice
            //  customer: this.state.customer
            }
        this.props.onListingUpdate(editListing)
        this.setState({item: '', description: '', category:'', price:'', customer:''})
        this.setState({ EditListingModel: ! this.state.EditListingModel})
    
      }
    
      handleEditListing = (id, item, description, category, AskingPrice, customer)=>{
    
        this.setState({
            editListingInfo: {id, item, description, category, AskingPrice, customer},
            EditListingModel: ! this.state.EditListingModel
    
          })
      }
    
      handleDeleteListing = (id) => {
        this.props.onListingDelete(id);
    
      }
}

export default ListingInfo;