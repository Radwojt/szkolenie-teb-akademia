import React from "react";

const Czwarty = ({path}) => {

    const handleClick = () => {
        window.location.assign(path)
    }

    return (
        <button onClick={handleClick}>Zmień lokalizacje</button>
    )
}

export default Czwarty;