import React from 'react'

export default function FormPage({ match }) {
    return (
        <div>
            { match.params.id }
        </div>
    )
}
