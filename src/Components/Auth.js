import { useState, createContext, useContext } from 'react'

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => { 
    const [user, setUser] = useState(null);

    const login = (user) => {
        setUser(user);
    }

    const logout = () => {
        setUser(null);
    }

    const isUserLoggedIn = () => {
        return !(user == null);
    }

    return (
            <AuthContext.Provider value={{ user, login, logout, isUserLoggedIn }} >
                { children }
            </AuthContext.Provider >
    )
}

const useAuth = () => {
    return useContext(AuthContext);
}

export default useAuth;
