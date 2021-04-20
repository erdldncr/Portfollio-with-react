export default function reducer(state,action){
    if(action.type==='TOGGLE_DARK_MODE'){
        
        console.log(state.darkMode)
        return {...state,darkMode:!state.darkMode}
    }
    if(action.type==='TOGGLE_SMALL_SCREEN'){
        console.log('erdal')
        return {...state,smallScreen:!state.smallScreen}
    }
    return state
}