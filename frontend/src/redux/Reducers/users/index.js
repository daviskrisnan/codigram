import { GET_USER_DETAILS, UPDATE_USER} from '../../Actions/userAction';

const initialState = {
    getUserDetailResult: false,
    getUserDetailLoading: false,
    getUserDetailError: false,

    updateUserResult: false,
    updateUserLoading: false,
    updateUserError: false,
}

const users = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_DETAILS:
            return {
                ...state,
                getUserDetailResult: action.payload.data,
                getUserDetailLoading: action.payload.loading,
                getUserDetailError: action.payload.errorMessage,
            }
        case UPDATE_USER:
            return {
                ...state,
                updateUserResult: action.payload.data,
                updateUserLoading: action.payload.loading,
                updateUserError: action.payload.errorMessage,
            }
        default:
            return state
    }
}

export default users;