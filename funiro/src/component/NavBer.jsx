import React from 'react'
import {Link} from "react-router-dom"
const NavBer = () => {
    return (
        <div className='navber'>
            <div className='navberContainer'>
                <Link to='/' className='navberLink' ><h2>FUNIRO</h2></Link>
            </div>
        </div>
    )
}

export default NavBer