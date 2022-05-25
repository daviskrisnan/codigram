import { 
    GET_TIMELINE,
    GET_TL_DETAIL,
    GET_TL_BY_USER_ID,
    ADD_TIMELINE,
    UPDATE_TIMELINE,
    DELETE_TIMELINE
 } from '../../Actions/timelineAction';

const initialState = {
    getTimelineResult: false,
    getTimelineLoading: false,
    getTimelineError: false,

    getTLDetailResult: false,
    getTLDetailLoading: false,
    getTLDetailError: false,

    getTLDetailByUserIdResult: false,
    getTLDetailByUserIdLoading: false,
    getTLDetailByUserIdError: false,

    addTimelineResult: false,
    addTimelineLoading: false,
    addTimelineError: false,

    updateTimelineResult: false,
    updateTimelineLoading: false,
    updateTimelineError: false,

    deleteTimelineResult: false,
    deleteTimelineLoading: false,
    deleteTimelineError: false,
}

const timelines = (state = initialState, action) => {
    switch (action.type) {
        case GET_TIMELINE:
            return {
                ...state,
                getTimelineResult: action.payload.data,
                getTimelineLoading: action.payload.loading,
                getTimelineError: action.payload.errorMessage,
            }
        
        case GET_TL_DETAIL:
            return {
                ...state,
                getTLDetailResult: action.payload.data,
                getTLDetailLoading: action.payload.loading,
                getTLDetailError: action.payload.errorMessage,
            }
        
        case GET_TL_BY_USER_ID:
            return {
                ...state,
                getTLDetailByUserIdResult: action.payload.data,
                getTLDetailByUserIdLoading: action.payload.loading,
                getTLDetailByUserIdError: action.payload.errorMessage,
            }
        case ADD_TIMELINE:
            return {
                ...state,
                addTimelineResult: action.payload.data,
                addTimelineLoading: action.payload.loading,
                addTimelineError: action.payload.errorMessage,
            }
        
        case UPDATE_TIMELINE:
            return {
                ...state,
                updateTimelineResult: action.payload.data,
                updateTimelineLoading: action.payload.loading,
                updateTimelineError: action.payload.errorMessage,
            }

        case DELETE_TIMELINE:
            return {
                ...state,
                deleteTimelineResult: action.payload.data,
                deleteTimelineLoading: action.payload.loading,
                deleteTimelineError: action.payload.errorMessage,
            }

        default:
            return state;
    }
}

export default timelines;