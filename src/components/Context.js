import React,{useReducer,useContext} from 'react'
import reducer from './reducer'

const AppContext=React.createContext()

const defaultState={
    darkMode:true
}
 const AppProvider=({children})=>{
    const [state,dispatch]=useReducer(reducer,defaultState)

    const toogleDarkMode=()=>{
     dispatch({type:'TOGGLE_DARK_MODE'})
    }
    return <AppContext.Provider 
    value={{...state,toogleDarkMode}} >
                {children}
            </AppContext.Provider> 
}
export function useGlobalContext(){
    return useContext(AppContext)
}

export { AppContext, AppProvider }

