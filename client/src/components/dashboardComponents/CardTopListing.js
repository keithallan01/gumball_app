import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import React, { useState } from "react";
import faker from "faker";

const CardTopListing = props => {

  const [open, setOpen] = useState(false)

  const listingDetail = props.listings.slice(0, 6).map((listing) => {

    return (
      <li>
        <div className="card-top" onClick={() => setOpen(true)}>
          <img width="100%" src={faker.image.avatar()} alt="Card cap" />
          <div className="container">
            <h5>{listing.askingPrice}</h5>
          </div>
        </div>
        <Modal isOpen={open} toggle={() => setOpen(true)} className="top-listing">
          <ModalHeader>Modal title</ModalHeader>
          <ModalBody>
            <b>Look at the top right of the page/viewport!</b><br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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