import React from 'react'
import { Link } from 'react-router-dom'

export default function FormList() {
    return (
        <div className='jumbotron'>
            <div className='row'>
                <h2>List of Forms</h2>
                <Link to='/editforms'>
                    <button className='btn-info'>
                        New Form
                    </button>
                </Link>
            </div>
            <div>
                ...
            </div>
        </div>
    )
}

