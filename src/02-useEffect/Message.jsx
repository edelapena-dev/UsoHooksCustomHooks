import { useEffect, useState } from "react"

export const Message = () => {
    const [cords, setCords] = useState({ x:0 , y:0})
    useEffect(() => {
        /*UseEffect para probar como se destruye un 
        eventlistener dentro de el */
        const onMouseMove = ({ x, y }) =>{
            const cords = { x, y }
            //console.log(cords);
            setCords(cords);
        }  

        window.addEventListener('mousemove', onMouseMove);

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
        }
    }, [])
    
    return (
        <>
            <h3>Usuario ya existe</h3>
            {JSON.stringify(cords)}
        </>
    )
}
