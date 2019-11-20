import React from 'react';
import css from './ReduxFormsControls.module.css';
import {Field} from "redux-form";

export const ReduxFormsControls = ({input, meta, ...props}) => {
    const haveError = meta.touched && meta.error;
    return (
        <div className={`${css.formControl} ${haveError && css.error}`}>
            {props.children}
            {haveError && <span>{meta.error}</span>}
        </div>
    )
};
export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <ReduxFormsControls {...props}><input {...input} {...restProps}/></ReduxFormsControls>
};
export const createField = (component, validators, name, placeholder, props = {}, text = "") => (
    <div>
        <Field component={component} validate={validators} name={name}
               placeholder={placeholder} {...props}/>{text}
    </div>
);