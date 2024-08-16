import React from "react"

export default function Button({text, fontSize, color, backgroundColor}) {
    
    function handleButtonClick() {
        window.location.href = "https://www.google.com"
    }

    const buttonStyle = {
        fontSize: fontSize + 'px',
        color: color,
        backgroundColor: backgroundColor

    }
    return (
        <button onClick={handleButtonClick} style={buttonStyle}>{text}</button>
    )
}

Button.defaultProps = {
    text: 'Click Me',
    fontSize: 14,
    color: 'white',
    backgroundColor: 'blue'
}