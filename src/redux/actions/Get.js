import Action from './'

const BASE_URL = "https://corona.lmao.ninja/"

export const Global = () => {
    return (dispatch) => {
        fetch(BASE_URL+"all")
        .then(res=>res.json())
        .then(res=>{
            return dispatch({
                type:Action.GET_GLOBAL,
                payload:res,
            })
        })
    }
}

export const Local = () => {
    return (dispatch) => {
        fetch(BASE_URL+"countries/ID")
        .then(res=>res.json())
        .then(res=>{
            return dispatch({
                type:Action.GET_LOCAL,
                payload:res,
            })
        })
    }
}