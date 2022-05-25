import axios from "axios";

const URL = 'http://localhost:3000/api/timelines';

export const GET_TIMELINE = "GET_TIMELINE";
export const GET_TL_DETAIL = "GET_TL_DETAIL";
export const GET_TL_BY_USER_ID = "GET_TL_BY_USER_ID";
export const ADD_TIMELINE = "ADD_TIMELINE";
export const UPDATE_TIMELINE = "UPDATE_TIMELINE";
export const DELETE_TIMELINE = "DELETE_TIMELINE";

export const getTimeline = () => {
    return(dispatch) => {
        dispatch({
            type: GET_TIMELINE,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })
        axios({
            method: 'GET',
            url: URL
        })
            .then( (res) => {
                dispatch({
                    type: GET_TIMELINE,
                    payload: {
                        loading: false,
                        data: res.data,
                        errorMessage: false
                    }
                })
            })
            .catch( (err) => {
                dispatch({
                    type: GET_TIMELINE,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: err.message
                    }
                })
            })
    }
}

export const detailTimeline = (timelineId, access_token) => {
    return(dispatch) => {
        dispatch({
            type: GET_TL_DETAIL,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })
        axios({
            method: 'GET',
            url: URL + '/details/' + timelineId
        })
            .then( (res) => {
                dispatch({
                    type: GET_TL_DETAIL,
                    payload: {
                        loading: false,
                        data: res.data,
                        errorMessage: false
                    }
                })
            })
            .catch( (err) => {
                dispatch({
                    type: GET_TL_DETAIL,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: err.message
                    }
                })
            })
    }
}

export const getTimelineByUserId = (access_token) => {
    return(dispatch) => {
        dispatch({
            type: GET_TL_BY_USER_ID,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })
        axios({
            method: 'GET',
            url: URL + '/usertimelines/',
            headers: {
                AccessToken: access_token
            }
        })
            .then( (res) => {
                dispatch({
                    type: GET_TL_BY_USER_ID,
                    payload: {
                        loading: false,
                        data: res.data,
                        errorMessage: false
                    }
                })
            })
            .catch( (err) => {
                dispatch({
                    type: GET_TL_BY_USER_ID,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: err.message
                    }
                })
            })
    }
}

export const addTimeline = (data, access_token) => {
    return(dispatch) => {
        dispatch({
            type: ADD_TIMELINE,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })
        axios({
            method: 'POST',
            url: URL + '/add',
            data: data,
            headers: {
                AccessToken: access_token
            }
        })
            .then( (res) => {
                dispatch({
                    type: ADD_TIMELINE,
                    payload: {
                        loading: false,
                        data: res.data,
                        errorMessage: false
                    }
                })
            })
            .catch( (err) => {
                dispatch({
                    type: ADD_TIMELINE,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: err.message
                    }
                })
            })
    }
}

export const edit = (data, access_token, timelineId) => {
    return(dispatch) => {
        dispatch({
            type: UPDATE_TIMELINE,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })
        axios({
            method: 'PUT',
            url: URL + '/update/' + timelineId,
            data: data,
            headers: {
                AccessToken: access_token
            }
        })
            .then( (res) => {
                dispatch({
                    type: UPDATE_TIMELINE,
                    payload: {
                        loading: false,
                        data: res.data,
                        errorMessage: false
                    }
                })
            })
            .catch( (err) => {
                dispatch({
                    type: UPDATE_TIMELINE,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: err.message
                    }
                })
            })
    }
}

export const deleteTL = (access_token, timelineId) => {
    return(dispatch) => {
        dispatch({
            type: DELETE_TIMELINE,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })
        axios({
            method: 'DELETE',
            url: URL + '/delete/' + timelineId,
            headers: {
                AccessToken: access_token
            }
        })
            .then( (res) => {
                dispatch({
                    type: DELETE_TIMELINE,
                    payload: {
                        loading: false,
                        data: res.data,
                        errorMessage: false
                    }
                })
            })
            .catch( (err) => {
                dispatch({
                    type: DELETE_TIMELINE,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: err.message
                    }
                })
            })
    }
}