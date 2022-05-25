import axios from 'axios';

const URL = 'http://localhost:3000/users';

export const GET_USER_DETAILS = "GET_USER_DETAILS";
export const UPDATE_USER = "UPDATE_USER";

export const getUser = (access_token) => {
    return (dispatch) => {
        dispatch({
            type: GET_USER_DETAILS,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })
        axios({
            method: 'GET',
            url: URL + '/details',
            headers: {
                AccessToken: access_token
            }
        })
            .then( (res) => {
                dispatch({
                    type: GET_USER_DETAILS,
                    payload: {
                        loading: false,
                        data: res.data,
                        errorMessage: false
                    }
                })
            })
            .catch( (err) => {
                dispatch({
                    type: GET_USER_DETAILS,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: err.message
                    }
                })
            })
    }
}

export const updateUser = (access_token, data) => {
    return(dispatch) => {
        dispatch({
            type: UPDATE_USER,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })
        axios({
            method: 'PUT',
            url: URL + '/edit',
            data: data,
            headers: {
                AccessToken: access_token
            }
        })
            .then( (res) => {
                dispatch({
                    type: UPDATE_USER,
                    payload: {
                        loading: false,
                        data: res.data,
                        errorMessage: false
                    }
                })
            })
            .catch( (err) => {
                dispatch({
                    type: UPDATE_USER,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: err.message
                    }
                })
            })
    }
}