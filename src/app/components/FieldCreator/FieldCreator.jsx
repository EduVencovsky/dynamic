import React from 'react'
import PropTypes from 'prop-types'

export default function FieldCreator(props) {

    const onChange = (e, fieldName) => {
        props.onChange({ [fieldName]: e.target.value })
    }

    return (
        <div>
            <input type='text' value={props.name} onChange={e => onChange(e, 'name')} />
            <input type='text' value={props.type} onChange={e => onChange(e, 'type')} />
        </div>
    )
}

FieldCreator.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}
