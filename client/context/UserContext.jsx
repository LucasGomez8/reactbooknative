import { createContext, useContext, useReducer } from "react";
import UseReducer from "../reducer/UseReducer";
import axios from "axios";

const UserContext = createContext();


export const useUserContext = () => {
    const con = useContext(UserContext);

    if(!con){
        throw new Error('useUser must be used within a UserContextProvider');
    }

    return con;
}

export const UserContextProvider = ({children}) => {

    const initialState = {
        isLogin: false,
        userLogin_data: []
    }
    const [state, dispatch] = useReducer(UseReducer, initialState);

    const checkLogin =  async (values) => {
        const response = await axios.post("http://localhost:4000/users/api/login/", values)
        .then( res => {
            console.log("en el then:", res);
            return res.data;
        })
        .catch( error => {
            console.log(error.message);
        })
        console.log("response: ", response);

        if(response.data.length > 0){
            dispatch({type: "CHECKLOGIN", payload: true})
            dispatch({type: "CHECKLOGIN", payload: response.data});
        }

        return true;
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