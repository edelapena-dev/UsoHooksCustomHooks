// import { useReducer, useEffect } from "react"
// import { todoReducer } from "./todoReducer";
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';
import { useTodo } from '../hooks/useTodo';

export const TodoApp = () => {
    // TODO: crear un customHook useTodo handleRemoveTodo, handleToggleTodo, handleNewTodo
    // const {todos, handleRemoveTodo, handleToggleTodo, handleNewTodo} = useTodos();

    // const [todos, dispatch] = useReducer(todoReducer, [], init);

    // useEffect(() => {
    //   localStorage.setItem('todos',JSON.stringify(todos));      
    // }, [todos])
    
    // const handleNewTodo = ( todo ) => {
    //      dispatch({
    //         type: '[TODO] Add Todo',
    //         payload: todo
    //     });
    // }

    // const handleRemoveTodo = (id) => {
    //     dispatch({
    //         type: '[TODO] Remove Todo',
    //         payload: id
    //     });
    // }

    // const handleToggleTodo = (id) => {
    //     dispatch({
    //         type: '[TODO] Toggle Todo',
    //         payload: id
    //     });
    // }

    const { 
        todos,
        todosCount,
        pendingTodosCount,
        handleNewTodo, 
        handleRemoveTodo, 
        handleToggleTodo 
    } = useTodo();

    return (
        <>
            <h1>Todo APP { todosCount } - <small>pendientes: { pendingTodosCount }</small></h1>
            <hr />
            
            <div className="row">
                <div className="col-7">
                    {/* TodoList componente */}
                    <TodoList 
                        todos={ todos } 
                        onRemoveTodo={ handleRemoveTodo }
                        onToggleTodoFather={ handleToggleTodo }
                    />
                </div>
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    {/* TodoAdd onNewTodo emitir el input como un todo {id, description, done}*/}
                    <TodoAdd onNewTodo={ handleNewTodo } />
                </div>
            </div>
        </>
    )
}
