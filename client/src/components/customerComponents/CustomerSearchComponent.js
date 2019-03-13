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

    // const input = e.target.value;

    // const customerSearch= props.customerArr.map(customer => {

    render() {
        return (
            <div className="search">
                <input type="text" value={this.state.value} onChange={this.handleChange}/>
                <button
                className="btn-search"
                onClick={() => this.props.handleCustomerSearch(this.state.value)
                }
                >
                Search
              </button>
            </div>
         )
    }
}

   
export default CustomerSearchComponent;

// //         <div className='search_box'>
// //           <div className='search_bar'>
// //             <input value={this.state.userInput} onChange={(e) => this.handleUserInput(e)} onKeyDown={(e) => this.handleKeyPress(e)} />
// //             <div className='autocomplete_suggestions'>
// //               {
// //                 this.state.matches.map( (item, i) => {
// //                   let background = this.state.rowHighlighted === i ? '#ccc' : '#fff';
// //                   return <p key={i} className='autocomplete_suggestions_item' 
// //                   onClick={() => this.selectAutocomplete(i) } style={{background: background}}
// //                   onMouseOver={() => this.setRowHighlighted(i)} >{item}</p>
// //                 })
// //               }
// //             </div>
// //           </div>
// //         </div>
// //       </div></div>

//     )


// }

// class SearchComponent extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       userInput: '',
//       matches: [],
//       rowHighlighted: -1
//     }
//     // console.log(props.customers)

//   }

//   handleUserInput(e) {
//     let input = e.target.value;
//     let {customers} = this.props;
//     let matches = [];

//     if (input){
//         this.state.matches = []
//         // console.log(this.props)
//         for (let i = 0; i < this.props.customers.length; i++){
//         if (this.props.customers[i].firstName.startsWith(input)){
//           this.state.matches.push(this.props.customers[i])
//           console.log(this.state.matches); 
//         }
//       }
//     }

//     this.setState({
//       userInput: input,
//       matches: matches
//     })
//   }

//   selectAutocomplete(i){
//     this.setState({
//       userInput: this.state.matches[i],
//       matches: []
//     })
//   }

//   handleKeyPress(e){
//     let {rowHighlighted} = this.state;
//     if (e.key === 'ArrowUp' && rowHighlighted > -1){
//       rowHighlighted--;
//     }
//     if (e.key === 'ArrowDown' && rowHighlighted < this.state.matches.length - 1){
//       rowHighlighted++;
//     }
//     if (e.key === 'Enter'){
//       return this.selectAutocomplete(rowHighlighted);
//     }

//     this.setState({rowHighlighted});
//   }

//   setRowHighlighted(i){
//     this.setState({
//       rowHighlighted: i
//     })
//   }

//   render() {
//       // TODO: Make some checks to ensure there are props
//     //   console.log(this.props.customers);
//     return (
//       <div className="search">
//         <div className='search_box'>
//           <div className='search_bar'>
//             <input value={this.state.userInput} onChange={(e) => this.handleUserInput(e)} onKeyDown={(e) => this.handleKeyPress(e)} />
//             <div className='autocomplete_suggestions'>
//               {
//                 this.state.matches.map( (item, i) => {
//                   let background = this.state.rowHighlighted === i ? '#ccc' : '#fff';
//                   return <p key={i} className='autocomplete_suggestions_item' 
//                   onClick={() => this.selectAutocomplete(i) } style={{background: background}}
//                   onMouseOver={() => this.setRowHighlighted(i)} >{item}</p>
//                 })
//               }
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

