import React from 'react';

class ListingSearchComponent extends React.Component
{

    constructor(props) {
        super(props);
        this.state = { value: ''};

        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        return (
            <div className="search-div">
                <form className="search-form"></form>
                 <input type="text" value={this.state.value} onChange={this.handleChange}/>
                    <button
                    className="btn-search"
                    onClick={() => {this.props.handleListingSearch(this.state.value,
                    this.state.value = '')
                    }} >
                     Search
                    </button>
                    <i className="fa fa-search" />

            </div>
         )
    }
}

   
export default ListingSearchComponent;