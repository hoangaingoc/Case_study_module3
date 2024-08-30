import {createContext, useState} from "react";

export const MyContext = createContext()
const MyContextProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState({username: '', password: ''})
    const [cartID, setCartID] = useState([])


    return(
        <MyContext.Provider value={{currentUser, setCurrentUser, cartID, setCartID}}>
            {children}
        </MyContext.Provider>
    )
}
export default MyContextProvider