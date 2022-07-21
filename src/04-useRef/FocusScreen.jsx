import { useRef } from "react";

export const FocusScreen = () => {
    
    const refInput = useRef()
    

    const onClick = () => {
        document.getElementById('focusScreen').select();
    }

    const onClickRef = () => {
        console.log(refInput);
        refInput.current.select();
    }


    return (
        <>
            <h1>FocusScreen</h1>
            <hr />
            <input 
                ref={ refInput }
                type="text" 
                placeholder="Ingrese su Nombre"
                className="form-control"
                id="focusScreen"
            />
            <button
                className="btn btn-primary mt-2"
                onClick={ onClick }
            >
                Set Focus JS
            </button>

            <button
                className="btn btn-primary mt-2"
                onClick={ onClickRef }
            >
                Set Focus useRef
            </button>
        </>
    )
}
