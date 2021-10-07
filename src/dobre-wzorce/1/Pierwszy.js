//  PRZYKŁAD 1

// TESTOWANIE REACT HOOKS

//  W jaki sposób przetestować poniższy kod?
//  Czy mockowanie React Hooks to dobry pomysł?

import React, {useState} from "react";

const Pierwszy = () => {
    const [count, setCount] = useState(0);
    const handleClick = () => setCount(count+1);
    return (
        <>
            <span>{count}</span>
            <button onClick={handleClick}>Zwiększ</button>
        </>
    )
}

export default Pierwszy;