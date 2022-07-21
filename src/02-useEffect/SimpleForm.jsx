import { useEffect, useState } from 'react';
import { Message } from './Message'

export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        username: 'esteban',
        email: 'esteban.delapenia23@gmail.com'
    })

    const {username, email} = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            /*llaves computadas en este caso el name del control,
             es igual al name del objeto useState para cambiar }
             el valor directamente */
            [name]: value,
        })
    };

    /*cuando useEffect tiene arreglo vacia es para que se ejecute solo una vez 
    al momento de montar el jsx
    */
    useEffect( () => {
        //console.log('useEffect ejecutado')
    },[]);
    
    /*Se recomienda usar useEffect por cada cambio de estado que se necesita
    */
    useEffect( () => {
        //console.log('useEffect ejecutado formstate')
    },[formState]);

    useEffect( () => {
       //console.log('useEffect ejecutado formstate email')
    },[email]);

    return (
        <>
            <h1>SimpleForm</h1>
            <hr />
            <input 
                type="text" 
                className="form-control"
                placeholder="Username"    
                name="username"
                value={ username }
                onChange={ onInputChange }
            />

            <input 
                type="email" 
                className="form-control mt-2"
                placeholder="esteban@gmail.com"    
                name="email"
                value={ email }
                onChange={ onInputChange }
            />
            {
                username === 'esteban' && <Message />
            }
            
        </>
    )
}
