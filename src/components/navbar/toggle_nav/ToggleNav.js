import React from "react"
import "./ToggleNav.sass"

function ToggleNav({ active, toggle}) {
    return (
        <label className={active ? "toggle-nav checked" : "toggle-nav"}>
            <span></span>
            <input 
                data-testid="toggle-nav-input"
                type="checkbox"
                checked={active}
                className="toggle-nav__input"
                onChange={() => toggle()}
            />
        </label>
    )
}

export default ToggleNav