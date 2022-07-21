import { useCounter } from '../hooks/useCounter';

export const CounterWithCustomHooks = () => {
    const {counter, increment, decrement, reset} = useCounter(50);

    return (
        <>
            <h1>CounterWithCustomHooks: {counter}</h1>
            <hr />
            <button className="btn btn-primary" onClick={()=> increment()}>+1</button>
            <button className="btn btn-primary" onClick={()=> reset()}>Reset</button>
            <button className="btn btn-primary" onClick={()=> decrement()}>-1</button>
        </>
    )
}
