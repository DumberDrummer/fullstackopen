import React from 'react'
const failurestyle = {
    color: 'red',
    background: 'lightgrey',
    fontSize: '20px',
    borderStyle: 'solid'
}
const successstyle = {
        color: 'green',
        background: 'lightgrey',
        fontSize: '20px',
        borderStyle: 'solid'
    }

const Error = ({message,success}) =>{
    if (message === "") return null;
    const cn = success ?  successstyle : failurestyle
    return (
    <div style={cn}>
        {message}
    </div>
    )
}

export default Error