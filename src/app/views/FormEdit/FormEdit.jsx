import React from 'react'
import PropTypes from 'prop-types'

import useArray from '../../hooks/useArray'
import FieldCreator from '../../components/FieldCreator/FieldCreator'

export default function FormEdit({ match }) {

    const [fields, dispatchFields] = useArray([])

    const addField = () => {
        dispatchFields({
            type: 'push',
            value: {
                name: '',
                type: '',
            }
        })
    }
    console.log(fields)
    return (
        <div className='jumbotron'>
            <div className='row'>
                <h2>
                    Edit form {match.params.id}
                </h2>
                <button className='btn-primary' onClick={addField}>
                    New Field
                </button>
            </div>
            {
                fields.map((field, i) =>
                    <div key={i}>
                        <FieldCreator
                            name={field.name}
                            type={field.type}
                            onChange={(value) => dispatchFields({ type: 'mergeByIndex', index: i, value })}
                        />
                    </div>
                )
            }
        </div>
    )
}

FormEdit.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.string
        })
    })
}
