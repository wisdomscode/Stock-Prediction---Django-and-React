import React from 'react'

const ButtonWidget = (props) => {
    return (
        <>
            <button className={`btn ${props.class}`} type="button">{props.text}</button>
        </>
    )
}

export default ButtonWidget