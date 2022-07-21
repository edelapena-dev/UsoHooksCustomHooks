const initialState = [{
    id: 1,
    todo: 'Recolectar la piedra del Alma',
    done: false
}]

//action como quiero que cambie el estado
const todoReducer = ( state = initialState, action = {}) => {

    if(action.type === '[TODO] add todo'){
        // TODO: Esto no se debe hacer en REACT mutar el State state.push(action.payload)
        return [...state, action.payload];
    }

    return state;
}

let todos = todoReducer(); 

const newTODO = {
    id: 2,
    todo: 'Recolectar la piedra del Poder',
    done: false
}

// Estandar
// estandar type
// payLoad la carga de la accion 
const addTODOAction = {
    type: '[TODO] add todo',
    payload: newTODO
}

todos = todoReducer(todos, addTODOAction); 

// TODO: Nunca en React se deben mutar los states es una mala practica  y no se va a ver reflejado en la vista
/* todos.push({
    id: 2,
    todo: 'Recolectar la piedra del Poder',
    done: false
}); */

console.log(todos);