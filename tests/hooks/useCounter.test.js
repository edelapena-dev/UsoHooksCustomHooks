import { act, renderHook } from "@testing-library/react";
import { useCounter } from "../../src/hooks/useCounter";

describe('Prueba en el useCounter', ()=> {

    test('debe de retornar los valores por defecto' , () => {

        const { result } = renderHook( () => useCounter() );
        const { counter, decrement,increment, reset } = result.current;

        expect( counter ).toBe(0);
        expect( decrement ).toEqual( expect.any( Function ) );
        expect( increment ).toEqual( expect.any( Function ) );
        expect( reset ).toEqual( expect.any( Function ) );

    })

    test('debe de generar el counter con el valor de 100 ' , () => {

        const { result } = renderHook( () => useCounter(100) );
        const { counter } = result.current;
        expect( counter ).toBe(100);

    })

    test('debe de incrementar el counter, y debe de decrementar  ' , () => {

        const { result } = renderHook( () => useCounter(1) );
        const { increment, decrement } = result.current;
        
        //La funcion act se utiliza para poder ejecutar una funcion para probarla
        act( () => { 
            increment(); 
        });
        
        //en este caso no se ocupar el counter desestructurado por que no tiene el valor actual
        expect( result.current.counter ).toBe(2);
  
        act( () => { 
            decrement(); 
        });
        
        //en este caso no se ocupar el counter desestructurado por que no tiene el valor actual
        expect( result.current.counter ).toBe(1);
    })

    test('debe de dejar el valor por defecto' , () => {

        const { result } = renderHook( () => useCounter(0) );
        const { reset, increment } = result.current;
        
        //La funcion act se utiliza para poder ejecutar una funcion para probarla
        act( () => { 
            increment(100); 
        });
                
        //en este caso no se ocupar el counter desestructurado por que no tiene el valor actual
        expect( result.current.counter ).toBe(100);

        act( () => { 
            reset();
        });
                
        //en este caso no se ocupar el counter desestructurado por que no tiene el valor actual
        expect( result.current.counter ).toBe(0);
    })

});