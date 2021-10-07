import React, {useState} from "react";
import Button from '@mui/material/Button';

const Piaty = () => {
    const [isElemVisible, setIsElemVisible] = useState(false);

    return (
        <>
        {isElemVisible ? 'widać mnie' : ''}
        <Button onClick={() => setIsElemVisible(!isElemVisible)}>Zewnetrzny button</Button>
        </>
    )
}

export default Piaty;