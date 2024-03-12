import { combineReducers } from "redux";
import CakeReducer from "./Cake/CakeReducer";
import icereducer from "./Iceream/IceReducer";
import LoginReducer from "./CheckLogin/LoginReducer";

const RootReducer=combineReducers({
    ice:icereducer,
    cake:CakeReducer,
    login:LoginReducer
    
})
export default RootReducer