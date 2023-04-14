
const CHECKLOGIN = "CHECKLOGIN";
const SETSESSIONID = "SETSESSIONID";



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
 }
}
