
const CHECKLOGIN = "CHECKLOGIN";
const SETSESSIONID = "SETSESSIONID";
const ALLPOSTS = "ALLPOSTS";



export default function UseReducer(state, action) {

 const { payload, type } = action;
 
 switch(type){
    case CHECKLOGIN:
        return {
            ...state,
            isLogin: payload
        }
    case SETSESSIONID:
        return {
            ...state,
            userLogin_data: payload
        }
    case ALLPOSTS:
        return {
            ...state,
            allPost: payload
        }
 }
}
