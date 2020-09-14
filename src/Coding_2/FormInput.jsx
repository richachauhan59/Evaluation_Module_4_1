import React from 'react'

export default function Input(props){
    return(
        <div>
            <input
            placeholder={props.placeholder}
            name={props.name}
            value={props.value}
            onChange={props.onChange}
            type={props.type}
            />
        </div>
    )
}