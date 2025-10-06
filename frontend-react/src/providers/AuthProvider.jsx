import { createContext, useState, userContext } from 'react'

// create context
const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(
        !!localStorage.getItem('stockAccessToken')  // double !!, make this returns true or false
    )
    return (
        <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
export { AuthContext }