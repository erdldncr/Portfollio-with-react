import React,{useReducer,useContext,useEffect} from 'react'
import reducer from './reducer'

const AppContext=React.createContext()

const defaultState={
    darkMode:true,
    smallScreen:false
}
 const AppProvider=({children})=>{
    const [state,dispatch]=useReducer(reducer,defaultState)

    const toogleDarkMode=()=>{
       
     dispatch({type:'TOGGLE_DARK_MODE'})
    }
    const toogleSmallScreen=()=>{
      
        dispatch({type:'TOGGLE_SMALL_SCREEN'})
    }

   
    return <AppContext.Provider 
    value={{
        ...state,
    toogleDarkMode,
    toogleSmallScreen
    }} >
                {children}
            </AppContext.Provider> 
}
export function useGlobalContext(){
    return useContext(AppContext)
}

export { AppContext, AppProvider }

