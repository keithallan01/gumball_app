import React from 'react';


const DetailComponent = (props) => {

    const listingDetail = props.listingsArr.map((listing) => {
        return (
            <div key={listing.id}>
                <p>{listing.item}</p>
            </div>
        )
    })

    return (
        <div >
            {listingDetail}
        </div>
    );
}

export default DetailComponent;