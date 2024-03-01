import React from "react";
import './Switch.scss'

interface props extends React.HTMLProps<HTMLInputElement> {}

export const Switch = ({ ...rest }: props) => {
    return (
        <>
            <label className="switch">
                <input type="checkbox" {...rest} />
                <span className="slider"></span>
            </label>
        </>
    )
}