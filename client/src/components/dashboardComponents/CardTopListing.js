import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import React, { useState } from "react";

const CardTopListing = props => {

  const [open, setOpen] = useState(false)

  const listingDetail = props.listings.slice(0, 6).map((listing) => {

    return (
      <li>
        <div className="card-top" onClick={() => setOpen(true)}>
          <img width="100%" src={listing.image} alt="Card cap" />
          <div className="container">
            <h5>{`£${listing.askingPrice}`}</h5>
          </div>
        </div>
        <Modal isOpen={open} toggle={() => setOpen(true)} className="top-listing">
          <ModalHeader>{listing.item}</ModalHeader>
          <ModalBody>
            <img src={listing.image}></img>
            <h4>{listing.category}</h4>
            <h5>{listing.description}</h5>
            <h3>{`£${listing.askingPrice}`}</h3>
            <h4>Contact Customer:</h4>
            <h3>{listing.customer.telephoneNumber}</h3>
            <h3>{listing.customer.emailAddress}</h3>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={() => setOpen(false)}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </li>
    )
  })

  return (
    <fragment>
      {listingDetail}
    </fragment>
  )

}

export default CardTopListing;


// import React from "react";
// import faker from "faker";

// const CardTopListing = () => {
//   return (
//     <div className="card-top" >
//       <img width="100%" src={faker.image.avatar()} alt="Card cap" />
//       <div className="container">
//         <h5>
//           <b>£40.0</b>
//         </h5>
//       </div>
//     </div>
//   );
// };

// export default CardTopListing;