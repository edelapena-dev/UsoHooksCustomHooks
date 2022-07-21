import { useState } from "react";
import { useCounter } from "../hooks"
import { Small } from "./Small";

export const Memorize = () => {

    const { counter, increment } = useCounter(10);
    
    const [show, setShow] = useState(true);

    const onClick = () => {
        increment();
    }
    return (
        <>
            <h1>
                Memorize : <Small value={ counter }/>
            </h1>
            <hr />

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
