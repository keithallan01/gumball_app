import React from "react";
import faker from "faker";

const CardListing = props => {

  const listingDetail = props.listings.map((listing) => {

    const click = e => {
      console.log(e.target.value);
    }
    
    return (
      <div className="card-listing" onClick={click} value={listing.id}>
      {/* http://localhost:8080/listings/{listings.id} */}
        <div>
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
            <div className="price">
          </div>
          </div> */}
      </div>
    );
  })

  return (
    <li>
      {listingDetail}
    </li>
  )

};

export default CardListing;
