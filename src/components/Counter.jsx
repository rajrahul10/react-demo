import { useState } from "react";

function Counter() {
    let [value, setValue] = useState(0)
    
    return (<>
        <h1>Counter: {value}</h1>
        <button onClick={() => setValue(value + 1)}>+</button>
        <button onClick={() => setValue(value - 1)}>-</button>
    </>)
   
}

export default Counter;