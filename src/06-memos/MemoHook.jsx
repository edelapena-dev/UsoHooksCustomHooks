import { useMemo, useState } from "react";
import { useCounter } from "../hooks"

const heavyStuff = ( iterationNumber = 100 ) => {
    for(let i=0; i < iterationNumber; i++){
        console.log('ahí vamos!!');
    }
    return `${iterationNumber} iteraciones realizadas`;
}

export const MemoHook = () => {

    const { counter, increment } = useCounter(2000);
    
    const [show, setShow] = useState(true);

    const onClick = () => {
        increment();
    }

    const memorizaValue = useMemo( () => heavyStuff(counter), [counter] );

    return (
        <>
            <h1>
                MemoHook : <small>{ counter }</small>
            </h1>
            <hr />

            <h4>{ memorizaValue /*heavyStuff(counter)*/ }</h4>

            <button 
                className="btn btn-primary"
                onClick={ onClick }
            >
                +1
            </button>
            <button
                className="btn btn-outline-primary m-2"
                onClick={ () => setShow(!show)}
            >
                Show/Hide { JSON.stringify(show)}
            </button>
        </>
    )
}
