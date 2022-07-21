import { fireEvent, render, screen } from '@testing-library/react';
import { UserContext } from '../../src/09-useContext/context/UserContext';
import { LoginPage } from '../../src/09-useContext/LoginPage';

describe('Prueba de componente <LoginPage />', () => { 
   
    test('Debe de mostrar el componente sin el usuario', () => { 
        render(
            <UserContext.Provider value={{ user: null }}>
                <LoginPage />
            </UserContext.Provider>
        );
        const preTag = screen.getByLabelText('pre')
        expect( preTag.innerHTML ).toBe('null');
    });

    test('Debe de llamar el loginUsuer al hacer click', () => { 
        const setUserLogin = jest.fn();
        render(
            <UserContext.Provider value={{ user: null, loginUser: setUserLogin }}>
                <LoginPage />
            </UserContext.Provider>
        );
        const user = {
            id: 1,
            name: 'Esteban De la Peña Nanjari',
            email: 'esteban.delapenia23@gmail.com',
        }    
        const buttonLoginUser = screen.getByRole('button');
        fireEvent.click(buttonLoginUser);
        expect( setUserLogin ).toHaveBeenCalledWith(user);

    });

});