import React from "react"
import "../styles/button.css"

function Button({ text}) {
    return (
      <button className="custom-button">
        {text}
      </button>
    );
  }

export default Button;