import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../src/08-useReducer/TodoItem";

describe('Pruebas en el component <TodoItem />', () => { 
    
    const todo = {
        id: 1,
        description: 'Piedra del Alma',
        done: false
    }

    const onRemoveTodoItemMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach( () => {
        jest.clearAllMocks()
    });

    test('debe de mostrar el Todo pendiente de completar', () => { 

        render( <TodoItem 
                    todo={todo} 
                    onToggleTodo={ onToggleTodoMock} 
                    onRemoveTodoItem={onRemoveTodoItemMock}
                />
              );
        
        const liElement = screen.getByRole('listitem');
        expect(liElement.className).toBe('list-group-item d-flex justify-content-between');
        
        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toBe('align-self-center ');
        expect(spanElement.className).toContain('align-self-center');

    });

    test('debe de mostrar el Todo completado', () => { 
        todo.done = true;
        render( <TodoItem 
                    todo={ todo } 
                    onToggleTodo={ onToggleTodoMock } 
                    onRemoveTodoItem={ onRemoveTodoItemMock }
                />
              );
        
        const liElement = screen.getByRole('listitem');
        expect(liElement.className).toBe('list-group-item d-flex justify-content-between');
        
        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toBe('align-self-center text-decoration-line-through');
        expect(spanElement.className).toContain('align-self-center text-decoration-line-through');

    });

    test('span debe de llamar el Toggle TODO cuando se hace click', () => { 

        render( 
            <TodoItem 
                todo={ todo } 
                onToggleTodo={ onToggleTodoMock } 
                onRemoveTodoItem={ onRemoveTodoItemMock }
            />
        );

        const spanElement = screen.getByLabelText('span');
        fireEvent.dblClick(spanElement);

        expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);

    });

    test('button debe de llamar el Remove TODO cuando se hace click', () => { 

        render( 
            <TodoItem 
                todo={ todo } 
                onToggleTodo={ onToggleTodoMock } 
                onRemoveTodoItem={ onRemoveTodoItemMock }
            />
        );

        const buttonElement = screen.getByRole('button');
        fireEvent.click(buttonElement);

        expect(onRemoveTodoItemMock).toHaveBeenCalledWith(todo.id);

    });

});