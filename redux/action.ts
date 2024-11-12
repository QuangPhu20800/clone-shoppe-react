export const increment = (value: any) => async (dispatch: any) => {
    dispatch({
        type: "INCREMENT",
        payload: value
    })
    
}

export const decrement = (value: any) => async (dispatch: any) => {
    dispatch({
        type: "DECREMENT",
        payload: value
    })
}