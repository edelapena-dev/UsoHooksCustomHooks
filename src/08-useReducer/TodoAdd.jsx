//import { useState } from "react";
import { useForm } from '../hooks/useForm';

export const TodoAdd = ({ onNewTodo }) => {

    /* const [todoDescription, setTodoDescription] = useState('');

    const onInputChange = ({ target }) => {
        setTodoDescription(target.value);
    } */

    const { todoDescription, 
            onInputChange, 
            onResetForm } = useForm({ todoDescription : '' });

    const onFormSubmit = (event) => {
        event.preventDefault();
        const newDescription = todoDescription;
        if(newDescription.length <= 1) return;
        const newTodo = {
            id: new Date().getTime(),
            description: newDescription,
            done: false
        }
        onNewTodo(newTodo);
        onResetForm();
    }

    return (
        <form 
            onSubmit={ onFormSubmit }
            aria-label="form"
        >
            <input 
                type="text" 
                placeholder="Qué hay que hacer?" 
                className="form-control"
                name="todoDescription"
                value={ todoDescription }
                onChange={ onInputChange }
            />
            <button
                type="submit"
                className="btn btn-outline-primary mt-1"
            >
                Agregar
            </button>
        </form>
    )
}
