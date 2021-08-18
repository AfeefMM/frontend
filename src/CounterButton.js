import { useState } from 'react';

const CounterButton = () => {

    
    const [state, setState] = useState(0);
    function incrementVal() {
        setState(state+1);
    }
    return(
        <button onClick={incrementVal} className="btn btn-primary">{state}</button>
    )
}

export default CounterButton;