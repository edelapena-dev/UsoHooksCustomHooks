import { useState } from "react"

export const useForm = (initialForm = {}) => {
    const [ formState, setFormState ] = useState(initialForm);

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
    
    const onResetForm = () => {
        setFormState(initialForm);
    };

    return{
        ...formState,
        formState,
        onInputChange,
        onResetForm
    }
}
