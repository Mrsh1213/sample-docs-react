import React, {createContext, useReducer} from "react";
import rootReducer from "../Reducers/index";

export const AppContext = createContext("App");

const AppProvider = ({children}) => {
    let initReducers = {
        op: {name: "alireza"},
        users: [
            {id: 1, name: "ahmad", status: false},
            {id: 2, name: "reza", status: false},
            {id: 3, name: "mohammad", status: false},
            {id: 4, name: "farshid", status: false}]
    };
    const [data, dispatch] = useReducer(rootReducer, initReducers)
    console.log("users ", data);
    return (
        <AppContext.Provider value={[data, dispatch]}>
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;