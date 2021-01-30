import React from "react"
import "./ToggleNav.sass"

function ToggleNav({ active}) {
    return (
        <label className="toggle-nav" >
            <span></span>
            <input 
                data-testid="toggle-nav-input"
                type="checkbox"
                checked={active}
                id="toggle-nav__input"
                onChange={() => {}}
            />
        </label>
    )
}

export default ToggleNav