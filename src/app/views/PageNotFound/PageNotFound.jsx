import React from 'react'
import PropTypes from 'prop-types'

function PageNotFound(props) {
    return (
        <div>
            Not Found {props.message}
        </div>
    )
}

PageNotFound.propTypes = {
    message: PropTypes.string
}

export default PageNotFound
