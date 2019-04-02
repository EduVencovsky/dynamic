import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {

    const activeStyle = { color: 'red' }

    return (
        <div>
            <NavLink to='/' activeStyle={activeStyle}>Home</NavLink>
            {' | '}
            <NavLink to='/forms' activeStyle={activeStyle}>Form</NavLink>
        </div>
    )
}
