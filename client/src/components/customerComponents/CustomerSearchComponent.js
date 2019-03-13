import React from 'react';

class CustomerSearchComponent extends React.Component
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
                <input type="text" value={this.state.value} onChange={this.handleChange}/>
                <button
                className="btn-search"
                onClick={() => {this.props.handleCustomerSearch(this.state.value,
                    this.state.value = '')
                }}
                >
                Search
              </button>
            </div>
         )
    }
}

   
export default CustomerSearchComponent;