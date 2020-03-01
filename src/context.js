import React,{ useReducer,createContext,useEffect } from 'react';
import {reducer}                                    from './reducer.js';

export const context = createContext();

export const initialState = {
	friends     :[],
	groups      :[],
	group		:[],
	amount      :[]
};

const ContextProvider = (props) => {

	const [state,dispatch] = useReducer(reducer,initialState,() => {
		const value=localStorage.getItem('split')
		return value? JSON.parse(value):initialState;
	})

	useEffect(() => {
		localStorage.setItem('split',JSON.stringify(state))
	},[state])

	return(
		<context.Provider value={{state,dispatch}}>
			{props.children}
		</context.Provider>
	);
}

export default ContextProvider;
