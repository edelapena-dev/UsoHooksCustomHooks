import React from 'react';

export const ShowIncrement = React.memo( ({ increment, incrementArgument }) => {

    console.log('me volvi a ejecutar')

    return (
        <>
            <button
                className="btn btn-primary"
                onClick={() => { increment(); }}
            >
                Incrementar
            </button>

            <button
                className="btn btn-primary m-2"
                onClick={() => { incrementArgument(5); }}
            >
                Incrementar con Argumento
            </button>
        </>
        
    )
})
