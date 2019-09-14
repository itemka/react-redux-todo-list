import React from 'react';

const Button = (props) => {
    return (
        <>
            <button onClick={() => props.buttonCallBack()}>{props.title}</button>
        </>
    )
};

export default Button;