import React from 'react'

const blog = ({ params }) => {
    return (
        <div>
            <p>{params.slug}</p>
        </div>
    )
}

export default blog