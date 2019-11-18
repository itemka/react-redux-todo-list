import React from 'react';
import css from './Button.module.css';

const Button = (props) => {
    return (
        <>
            <button className={css.button} onClick={props.buttonCallBack}>{props.title}</button>
        </>
    )
};

export default Button;