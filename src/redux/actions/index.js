export const SET_USER = 'SET_USER'

export const setUser = (data) => dispatch => {
    return dispatch({
        type: SET_USER,
        payload: data
    })
}

