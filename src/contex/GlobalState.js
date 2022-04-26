import React, {createContext, useReducer} from "react";
import AppReducer from "./AppReducer";
import data from '../DATA.json';

// initial state
const initialState = {
    allTeams: data,
    openedPeople: [],
};

// create context
export const GlobalContext = createContext(initialState);

// provider components
export const GlobalProvider = props => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    //actions
    const addPeople = (people) => {
        dispatch({type: "ADD_PEOPLE", payload: people})
    };

    return (
        <GlobalContext.Provider value={{allTeams: state.allTeams, openedPeople: state.openedPeople, addPeople}}>
            {props.children}
        </GlobalContext.Provider>
    )
}
