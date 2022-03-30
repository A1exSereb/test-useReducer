import { useReducer } from "react";

import { UsersContext } from "./context";
import {reducer,initialState} from './reducer';

export let dispatchUsers = null;

export const UsersProvider = ({children}) =>{
    const [users,dispatch] = useReducer(reducer, initialState);
    dispatchUsers = dispatch;
    return(
        <UsersContext.Provider value={users}>
            {children}
        </UsersContext.Provider>
    )
}