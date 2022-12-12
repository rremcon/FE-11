import React from "react";

function Button({clickHandler, disabled, children}) {
    return (
        <button
        type="button"
        onClick={clickHandler}
        disabled={disabled}
        className="buttons"
        >
            {children}
        </button>
    );
}

export default Button;