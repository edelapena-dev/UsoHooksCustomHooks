import { useState } from "react"
import { UserContext } from "./UserContext"

/* const user = {
  id: 1,
  name: 'Esteban De la Peña',
  email: 'esteban.delapenia23@gmail.com'
} */

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState();

    const loginUser = (userName) => {
      setUser(userName)
    }

    return (
      // <UserContext.Provider value={ { hola: 'Mundo', user: user } }>
      <UserContext.Provider value={ { user, loginUser } }>
          { children }
      </UserContext.Provider>
    )
}
