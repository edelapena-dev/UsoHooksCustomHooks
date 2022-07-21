import { TodoItem } from './TodoItem';

export const TodoList = ({ todos = [] , onRemoveTodo, onToggleTodoFather}) => {
    
    return (
        <ul className="list-group">
            {
                todos.map( todo => (
                    <TodoItem 
                        key={ todo.id } 
                        todo={ todo } 
                        onRemoveTodoItem={ onRemoveTodo }
                        onToggleTodo={ onToggleTodoFather }
                    />
                ))
            }
            
        </ul>
    )
}
