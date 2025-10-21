import { configureStore, combineReducers } from "@reduxjs/toolkit";

const initialCounterState = { count: 0 }

function counterReducer(state = initialCounterState, action) {
    switch (action.type) {
        case "INCREMENT":
            return { count: state.count + 1 };
        case "DECREMENT":
            return { count: state.count - 1 };
        case "RESET":
            return { count: 0 };
        default:
            return state;
    }
}

const initialUserState = { name : ""}

function userReducer (state = initialUserState, action){
    switch (action.type){
        case "SET_NAME":
            return {name: action.payload};
            default: 
            return state;
    }
}

const rootReducer = combineReducers({
    counter : counterReducer,
    user : userReducer
})

const store = configureStore({
    reducer : rootReducer
});

store.subscribe(()=>{
        console.log("State changed", store.getState())
})

store.dispatch({type:"INCREMENT"});
store.dispatch({type:"RESET"});
store.dispatch({type:"DECREMENT"});
store.dispatch({type:"SET_NAME",payload:"Alice"});