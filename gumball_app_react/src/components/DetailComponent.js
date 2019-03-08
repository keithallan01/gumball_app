import React from 'react';


const DetailComponent = (props) => {
    console.log(props.customersArr)

    const customerDetail = props.customersArr.map((customer) => {
        // console.log(props.customersArr)
        return (
            <div key={customer.id}>
                <p>{customer.firstName} {" "} {customer.lastName}</p>
            </div>
        )
    })

    return (
        <div >
            {customerDetail}
        </div>
    );
}
 
export default DetailComponent;