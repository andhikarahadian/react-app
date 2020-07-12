import React from 'react'

class Header extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(
           <div>
            <h1>This Is Header Component</h1>
             <ul>
            <li>Home</li>
            <li>list</li>
            <li>Information</li>
            </ul>
           </div>
        )
    }

}

export default Header