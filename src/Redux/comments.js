import * as ActionTypes from './ActionTypes';
import { COMMENTS } from '../shared/comments';

export const Comments = (state = { errMess: null, comments: [] }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENTS:
            return {...state, isLoading: false, errMess: null, comments: action.payload};
        case ActionTypes.COMMENTS_FAILED:
            return {...state, isLoading:false, errMess: action, comments: []};

        case ActionTypes.ADD_COMMENT:
            var comment = action.payload;
            console.log("Comment: ", comment);
            return {...state, comments: state.comments.concat(comment)};
            // break;
    
        default:
            return state;
        // break;
    }
}