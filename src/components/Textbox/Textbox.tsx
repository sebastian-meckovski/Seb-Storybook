import React from "react";
import './Textbox.scss'

interface textboxProps extends React.HTMLProps<HTMLInputElement>{}

export const Textbox = ({...rest}: textboxProps) => {
    return(
        <input type="text" className="textbox" autoComplete="off" {...rest}/>
    )
}