export default function reducer(state,action){
    if(action.type==='TOOGLE_DARK_MODE'){
        return {...state,darkMode:false}
    }
    return state
}