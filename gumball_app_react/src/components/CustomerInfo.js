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

class CustomerInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newCustomerInfo: {
        firstName: " ",
        lastName: "",
        address: "",
        town: "",
        telephoneNumber: "",
        emailAddress: ""
      },
      editCustomerInfo: {
          id:"",
        firstName: "",
        lastName: "",
        address: "",
        town: "",
        telephoneNumber: "",
        emailAddress: ""
      },
      NewCustomerModel: false,
      EditCustomerModel: false
    };
  }

  render() {
    const customerDetail = this.props.customersArr.map(customer => {
        return (
          <tr key={customer.id}>
            <td>
              {customer.firstName} {customer.lastName}
            </td>
            <td>{customer.town}</td>
            <td>{customer.address}</td>
            <td>
              <a href={customer.emailAddress}>{customer.emailAddress}</a>
            </td>
            <td>{customer.telephoneNumber}</td>
            <td>
              <button className="btn-warning" onClick={this.handleEditCustomer.bind(this,customer.id, customer.firstName, customer.lastName, customer.address, customer.town, customer.telephoneNumber, customer.emailAddress)}>Edit</button>
            </td>
            <td>
              <button className="btn-danger" onClick={this.handleDeleteCustomer.bind(this, customer.id)} >Delete</button>
            </td>
          </tr>
        );
      });

    return (
      <div className="customer-info container">
        <Button className="my-3" color="primary" onClick={this.handleOnClickNewCustomer}>
          Add Customer
        </Button>
        <Modal
          isOpen={this.state.NewCustomerModel}
          toggle={this.handleOnClickNewCustomer}
        >
          <ModalHeader toggle={this.handleOnClickNewCustomer}>
            Add New Customer
          </ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for="ferstName">First Name</Label>
              <Input type="text" id="ferstName" defaultValue={this.state.newCustomerInfo.firstName} onChange={this.handleFirstNameChange}/>

              <Label for="lastName">Last Name</Label>
              <Input type="text" id="lastName" defaultValue={this.state.newCustomerInfo.lastName} onChange={this.handleLastNameChange}/>

              <Label for="address">Address</Label>
              <Input type="textarea" id="address" defaultValue={this.state.newCustomerInfo.address} onChange={this.handleAddressChange}/>

              <Label for="town">Town</Label>
              <Input id="town" defaultValue={this.state.newCustomerInfo.town} onChange={this.handleTownChange}/>

              <Label for="emailAddress">Email</Label>
              <Input type="text" id="emailAddress" defaultValue={this.state.newCustomerInfo.emailAddress} onChange={this.handleEmailAddressChange}/>

              <Label for="telephoneNumber">Tel No</Label>
              <Input type="text" id="telephoneNumber" defaultValue={this.state.newCustomerInfo.telephoneNumber} onChange={this.handleTelephoneNumberChange}/>
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button
              color="primary"
              onClick={this.handleSubmit}
            >
              Add Customer
            </Button>{" "}
            <Button
              color="secondary"
              onClick={this.handleOnClickNewCustomer}
            >
              Cancel
            </Button>
          </ModalFooter>
        </Modal>

        <Modal
          isOpen={this.state.EditCustomerModel}
          toggle={this.handleOnClickEditCustomer}
        >
          <ModalHeader toggle={this.handleOnClickEditCustomer}>
            Edit Customer
          </ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for="ferstName">First Name</Label>
              <Input type="text" id="ferstName" defaultValue={this.state.editCustomerInfo.firstName} onChange={this.handleFirstNameChange}/>

              <Label for="lastName">Last Name</Label>
              <Input type="text" id="lastName" defaultValue={this.state.editCustomerInfo.lastName} onChange={this.handleLastNameChange}/>

              <Label for="address">Address</Label>
              <Input type="textarea" id="address" defaultValue={this.state.editCustomerInfo.address} onChange={this.handleAddressChange}/>

              <Label for="town">Town</Label>
              <Input id="town" defaultValue={this.state.editCustomerInfo.town} onChange={this.handleTownChange}/>

              <Label for="emailAddress">Email</Label>
              <Input type="text" id="emailAddress" defaultValue={this.state.editCustomerInfo.emailAddress} onChange={this.handleEmailAddressChange}/>

              <Label for="telephoneNumber">Tel No</Label>
              <Input type="text" id="telephoneNumber" defaultValue={this.state.editCustomerInfo.telephoneNumber} onChange={this.handleTelephoneNumberChange}/>
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button
              color="primary"
              onClick={this.handleUpdate}
            >
              update Customer
            </Button>{" "}
            <Button
              color="secondary"
              onClick={this.handleOnClickEditCustomer}
            >
              Cancel
            </Button>
          </ModalFooter>
        </Modal>

        <Table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Town</th>
              <th>Address</th>
              <th>Email</th>
              <th>Tel No.</th>
              <th />
              <th />
            </tr>
          </thead>
          <tbody>{customerDetail}</tbody>
        </Table>
      </div>
    );
  }


handleOnClickNewCustomer = () =>{
    this.setState({
      NewCustomerModel: ! this.state.NewCustomerModel
    })
}

handleOnClickEditCustomer = () =>{
    this.setState({
      EditCustomerModel: ! this.state.EditCustomerModel
    })
}

handleFirstNameChange= (e) =>{
    this.setState({firstName: e.target.value})
  }

  handleLastNameChange= (e) =>{
    this.setState({lastName: e.target.value})
  }

  handleAddressChange= (e) =>{
    this.setState({address: e.target.value})
  }

  handleTownChange= (e) =>{
    this.setState({town: e.target.value})
  }

  handleTelephoneNumberChange= (e) =>{
    this.setState({telephoneNumber: e.target.value})
  }

  handleEmailAddressChange= (e) =>{
    this.setState({emailAddress: e.target.value})
  }

  handleSubmit= (e) => {
    e.preventDefault();
    const newCustomer = {
        firstName: this.state.firstName,
         lastName: this.state.lastName,
         address: this.state.address,
         town: this.state.town,
         telephoneNumber: this.state.telephoneNumber,
         emailAddress: this.state.emailAddress
        }
    this.props.onCustomerSubmit(newCustomer)
    this.setState({firstName: '', lastName: '', address:'', town:'', telephoneNumber:'', emailAddress:''})
    this.setState({ NewCustomerModel: ! this.state.NewCustomerModel})
  }

  handleUpdate = (e) =>{
    e.preventDefault();
    const editCustomer = {
        id: this.state.editCustomerInfo.id,
        firstName: this.state.firstName,
         lastName: this.state.lastName,
         address: this.state.address,
         town: this.state.town,
         telephoneNumber: this.state.telephoneNumber,
         emailAddress: this.state.emailAddress
        }
    this.props.onCustomerUpdate(editCustomer)
    this.setState({id:'', firstName:'', lastName:'', address:'', town:'', telephoneNumber:'', emailAddress:''})
    this.setState({ EditCustomerModel: ! this.state.EditCustomerModel})

  }

  handleEditCustomer = (id, firstName, lastName, address, town, telephoneNumber, emailAddress)=>{

    this.setState({
        editCustomerInfo: {id, firstName, lastName, address, town, telephoneNumber, emailAddress},
        EditCustomerModel: ! this.state.EditCustomerModel

      })
  }

  handleDeleteCustomer = (id) => {
    this.props.onCustomerDelete(id);

  }


}

export default CustomerInfo;
