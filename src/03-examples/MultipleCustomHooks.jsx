import { useFetch, useCounter } from '../hooks';
import { LoadingQuote } from './LoadingQuote';
import { Quote } from './Quote';

export const MultipleCustomHooks = () => {
    const { counter, increment, decrement } = useCounter(1);
    
    const onNextQuote = () => {
        increment();
        //console.log(counter);
    };

    const onBackQuote = () => {
        decrement();
        //console.log(counter);
    };

    const {data, isLoading, hasError } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    const { author, quote } = !!data && data[0]; // si data tiene valor entonces pone data en posicion 0
    /*!!data es una condicional que dice si es true*/
    //const {a, b} = false
    // a = es undefined y b = es undefined

    return (
        <>
            <h1>Breaking Bad Quotes</h1>
            <hr />

            {
                isLoading ? <LoadingQuote /> : <Quote quote={quote} author={author} />
                
            }
            <button 
                className="btn btn-primary"
                onClick={ onBackQuote }
            >
                Back quote
            </button>
            <button 
                className="btn btn-primary"
                disabled={ isLoading }
                onClick={ onNextQuote }
            >
                Next quote
            </button>

            
        </>
    )
}
