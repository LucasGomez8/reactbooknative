import { createContext, useContext, useReducer } from "react";
import UseReducer from "../reducer/UseReducer";
import axios from "axios";
import { API_LOCAL } from "@env"

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
        userLogin_data: [],
        allPost: [],
        noFollows: [],
    }
    const [state, dispatch] = useReducer(UseReducer, initialState);

    const checkLogin = async (values) => {
        try {
            const response = await axios.post(`${process.env.API_LOCAL}/users/api/login/`, values);
            if (response && response.data && response.data.length > 0) {
                dispatch({ type: "CHECKLOGIN", payload: true });
                dispatch({ type: "SETSESSIONID", payload: response.data });
            }
            return true;
        } catch (error) {
            console.log(error.message, error.stack)
        }
        
    }

    const getPosts = async(typePost) => {
        try {
            let response;
            if(!typePost){
                 response = await axios.post(`${process.env.API_LOCAL}/posts/api/getall/`);
            }
            else{
                response = await axios.post(`${process.env.API_LOCAL}/posts/api/getall/`, typePost);
            }

            if(response && response.data && response.data.length > 0){
                dispatch({type: "ALLPOSTS", payload: response.data});
            }
        } catch (error) {
            console.log(error.message, error.stack);
        }
    }

    const getUserToFollow = async(user_follow_id) => {
        try {
            const res = await axios.post(`${process.env.API_LOCAL}/users/api/follow/`, user_follow_id);
            if(res && res.data && res.data.length > 0) {
                dispatch({type: "NOTFOLLOW", payload: res.data});
            }
        } catch (error) {
            console.log(error.message, error.stack);
        }
    }

    return (
        <UserContext.Provider
            value={{
                isLogin: state.isLogin,
                userLogin_data: state.userLogin_data,
                allPost: state.allPost,
                noFollows: state.noFollows,
                getPosts,
                checkLogin,
                getUserToFollow
            }}
        >
            {children}
        </UserContext.Provider>
    )
}