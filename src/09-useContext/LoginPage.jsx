import { useContext } from "react"
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {
  const { user, loginUser } = useContext(UserContext);
  console.log(user);
  
  return (
    <>
        <h1>LoginPage</h1>
        <hr />
        <pre aria-label="pre">
          {JSON.stringify(user, null, 3)}
        </pre>
        <button 
          className="btn btn-primary"
          onClick={
            ()=> loginUser({
              id: 1,
              name: 'Esteban De la Peña Nanjari',
              email: 'esteban.delapenia23@gmail.com',
            })
          }
        >
          Establecer Usuario
        </button>


    </>    
  )
}
