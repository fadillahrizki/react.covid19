import Action from '../actions'

const initialState = {
    global:{},
    local:{},
}

export default (state = initialState,action) => {
    switch(action.type){
        case Action.GET_GLOBAL:
            return {
                ...state,
                global:action.payload,
            }
        case Action.GET_LOCAL:
            return{
                ...state,
                local:action.payload,
            }
        
        default:
            return state
    }
}