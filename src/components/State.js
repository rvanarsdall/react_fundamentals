// JS object where property values of the component are stored
// Managed inside of the component instead of being passed into it (like props)

import { useState } from 'react';

const State = () => {

    // [ current value, fx to update current value]
    const [count, setCount] = useState() // useState Hook must execute in the same order



    function decCount() {
        setCount(count - 1);
    }

    function incCount() {
        setCount(count + 1)
    }
    // Inside component return statement == JSX, NOT JS
    return (
        <> { /* Fragments == empty div containers */}
        <button onClick={decCount}>-</button>
        <span>{ count }</span>
        <button onClick={incCount}>+</button>
        </>
    )
}

export default State;