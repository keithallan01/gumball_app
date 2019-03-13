import React from "react";
import faker from "faker";

const CardListing = props => {

  const listingDetail = props.listings.map((listing) => {

    const handleClick = e => {
      listing.searchCounter++
      props.handleListingClick(listing);
    }
    
    return (
      <li className="card-listing" onClick={handleClick} value={listing}>
      {/* http://localhost:8080/listings/{listings.id} */}
        <div>
<<<<<<< HEAD
          <img src={faker.image.avatar()} alt="Card cap"/>
        </div>
        <div className="card-detail">
          <h3>{listing.item}</h3>
          {/* <h3>{listing.id}</h3> */}
          <h5>{listing.description}</h5>
          <div className="price-location">
=======
          <img src={listing.image} alt="Card cap" />
        </div>
        <div className="card-detail">
          <h3>{listing.item}</h3>
          <h4>{listing.category}</h4>
          <h4>{`£${listing.askingPrice}`}</h4>
        </div>
        <div className="card-description">
            <h5>{listing.description}</h5>
        </div>
          {/* <div className="loction">
>>>>>>> develop
            <div className="price">
          </div>
<<<<<<< HEAD
        </div>
      </li>
=======
          </div> */}
      </div>
>>>>>>> develop
    );
  })

  return (
    <li>
      {listingDetail}
    </li>
  )

};

export default CardListing;
