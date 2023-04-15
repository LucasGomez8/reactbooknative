import { createContext, useContext, useReducer } from "react";
import UseReducer from "../reducer/UseReducer";
import axios from "axios";

const UserContext = createContext();


export const useUserContext = () => {
    const con = useContext(UserContext);

    if (!con) {
        throw new Error('useUser must be used within a UserContextProvider');
    }

    return con;
}

export const UserContextProvider = ({ children }) => {

    const initialState = {
        isLogin: false,
        userLogin_data: []
    }
    const [state, dispatch] = useReducer(UseReducer, initialState);

    const checkLogin = async (values) => {
        console.log('Checking');
        try {
            const response = await axios.get(`http://192.168.0.58:4000/users/api/login/${values.email}/${values.password}`);
            console.log("response: ", response);
            if (response && response.data && response.data.length > 0) {
                dispatch({ type: "CHECKLOGIN", payload: true });
                dispatch({ type: "CHECKLOGIN", payload: response.data });
            }
            return true;
        } catch (error) {
            console.log(error.message, error.stack)
        }
        
    }

    return (
        <UserContext.Provider
            value={{
                isLogin: state.isLogin,
                userLogin_data: state.userLogin_data,
                checkLogin
            }}
        >
            {children}
        </UserContext.Provider>
    )
}