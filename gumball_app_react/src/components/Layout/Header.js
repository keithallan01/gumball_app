import React from 'react'

function Header(){
    return (
        <header style={headerStyle}>
            <h1>GumBall App</h1>
        </header>
    )
}

const headerStyle = { 
    background: '#333',
    color: '#fff',
    padding: '10px'
}

export default Header;