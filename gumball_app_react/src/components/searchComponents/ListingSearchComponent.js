import React, { Component } from 'react';

class ListingSearchComponent extends Component {

    constructor(props) {
      super(props);
      this.state = {
        userInput: '',
        matches: [],
        rowHighlighted: -1
      }
      // console.log(props.listings)
  
    }
  
    handleUserInput(e) {
      let input = e.target.value;
      let {listings} = this.props;
      let matches = [];
  
      if (input){
          this.state.matches = []
          // console.log(this.props)
          for (let i = 0; i < this.props.listings.length; i++){
          if (this.props.listings[i].item.startsWith(input)){
            this.state.matches.push(this.props.listings[i])
            console.log(this.state.matches); 
          }
        }
      }
  
      this.setState({
        userInput: input,
        matches: matches
      })
    }
  
    selectAutocomplete(i){
      this.setState({
        userInput: this.state.matches[i],
        matches: []
      })
    }
  
    handleKeyPress(e){
      let {rowHighlighted} = this.state;
      if (e.key === 'ArrowUp' && rowHighlighted > -1){
        rowHighlighted--;
      }
      if (e.key === 'ArrowDown' && rowHighlighted < this.state.matches.length - 1){
        rowHighlighted++;
      }
      if (e.key === 'Enter'){
        return this.selectAutocomplete(rowHighlighted);
      }
  
      this.setState({rowHighlighted});
    }
  
    setRowHighlighted(i){
      this.setState({
        rowHighlighted: i
      })
    }
  
    render() {
        // TODO: Make some checks to ensure there are props
      //   console.log(this.props.customers);
      return (
        <div className="search">
          <div className='search_box'>
            <div className='search_bar'>
              <input value={this.state.userInput} onChange={(e) => this.handleUserInput(e)} onKeyDown={(e) => this.handleKeyPress(e)} />
              <div className='autocomplete_suggestions'>
                {
                  this.state.matches.map( (item, i) => {
                    let background = this.state.rowHighlighted === i ? '#ccc' : '#fff';
                    return <p key={i} className='autocomplete_suggestions_item' 
                    onClick={() => this.selectAutocomplete(i) } style={{background: background}}
                    onMouseOver={() => this.setRowHighlighted(i)} >{item}</p>
                  })
                }
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
  
  export default ListingSearchComponent;