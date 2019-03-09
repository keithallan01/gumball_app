import React from 'react'

const SearchComponent = () => {

    return (
       <form>
           <input 
            type="text" 
            name="search" 
            stlye={{flex: '10', padding: '5px'}}
            placeholder="Search" 
           />
           <input 
            type='submit' 
            value='Search'
            className='btn'
            style={{flex: '1'}}/> 
       </form>
    )
}

export default SearchComponent;