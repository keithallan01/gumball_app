import React from "react";
import faker from "faker";

const CardListing = props => {

  const listingDetail = props.listings.map((listing) => {
    console.dir(listing)


    const handleClick = e => {
      listing.searchCounter++
      props.handleListingClick(listing);
    }

    return (
      <li className="card-listing" onClick={handleClick} value={listing}>
      {/* http://localhost:8080/listings/{listings.id} */}
        <div>
          <img src={faker.image.avatar()} alt="Card cap"/>
        </div>
        <div className="card-detail">
          <h3>{listing.item}</h3>
          {/* <h3>{listing.id}</h3> */}
          <h5>{listing.description}</h5>
          <div className="price-location">
            <div className="price">
              <h3>{`£${listing.askingPrice}`}</h3>
            </div>
            <div className="loction">
              <h4>{listing.category}</h4>
            </div>
          </div>
        </div>
      </li>
    );
  })

  return(
    <li>
      {listingDetail}
    </li>
  )

};

export default CardListing;
