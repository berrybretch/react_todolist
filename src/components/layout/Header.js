import React from 'react';
import { Link } from 'react-router-dom'

const header = () => {
    return (
       <header style={headerStyle}>
           <h1>
               To Do List
           </h1>
           <Link  to='/' style={linkStyle}>Home</Link>
           |
           <Link  to='/about' style={linkStyle}>About</Link>
       </header>
    );
}

const headerStyle = {
    backgroundColor:'black',
    color:'white',
    textAlign:'center',
    padding:'10px'
}
const linkStyle = {
    color:'#fff',
    textDecoration:'none'

}

export default header;
