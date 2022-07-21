import { renderHook, act } from "@testing-library/react";
import { useForm } from "../../src/hooks/useForm";

describe('Pruebas en el useForm', () => {

    const initialForm = {
        name: 'Esteban',
        email: 'esteban.delapenia23@gmail.com',
        edad: 34
    };

    test('debe de regresar el objeto por defecto', () => {
        const { result } = renderHook( () => useForm( initialForm ) );
        //otra tecnica para sacar el valor
        expect( result.current ).toEqual( {
            name: initialForm.name,
            email: initialForm.email,
            edad: initialForm.edad,
            formState: initialForm,
            onInputChange: expect.any( Function ),
            onResetForm: expect.any( Function )
        });
    });

    test('debe de cambiar el nombre del formulario', () => {

        const newValue = 'Esteban';
        const { result } = renderHook( () => useForm( initialForm ) );
        const { onInputChange } = result.current;
        
        act( () => {
            onInputChange({ target: { name, value: newValue } });
        });

        expect(result.current.name).toBe(newValue);
        expect(result.current.formState.name).toBe(newValue);
    });

    test('debe de realizar el reset del formulario', () => {

        const newValue = 'Esteban';
        const { result } = renderHook( () => useForm( initialForm ) );
        const { onResetForm, onInputChange } = result.current;
        
        act( () => {
            onInputChange({ target: { name, value: newValue } });
            onResetForm();
        });

        expect(result.current.name).toBe(initialForm.name);
        expect(result.current.formState.name).toBe(initialForm.name);
    });

})