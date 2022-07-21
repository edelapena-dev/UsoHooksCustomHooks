import { useState } from "react"

export const CounterApp = () => {
    const [state, setCounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
    });
    return (
        <>
            <h1>CounterApp1: { state.counter1 }</h1>
            <h1>CounterApp2: { state.counter2 }</h1>
            <h1>CounterApp3: { state.counter3 }</h1>
            <hr />
            
            <button className="btn btn-primary" onClick={ 
                    () => setCounter({
                        ...state,
                        counter1: state.counter1 + 1,
                    })
                }
            >
                +1
            </button>
        </>
    )
}
