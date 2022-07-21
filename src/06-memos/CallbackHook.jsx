import { useState, useCallback } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {
    
    const [counter, setCounter] = useState(10);
    
    const incrementFather = useCallback(
      () => {
        setCounter((value) => value + 1);
      },
      [],
    );

    const incrementFatherArgument = useCallback(
        (num) => {
          setCounter((value) => value + num);
        },
        [],
      );

    /*
    const incrementFather = () => {
        setCounter(counter + 1);
    }
    */
    return (
        <>
            <h1>CallbackHook useCallback: { counter }</h1>
            <hr />

            <ShowIncrement increment={ incrementFather } incrementArgument={ incrementFatherArgument }/>

        </>
    )
}
