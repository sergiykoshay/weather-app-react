import { AlertAction, AlertState, SET_ALERT } from "../types";

const initialState: AlertState = {
    message: ''
}

const AlertReducer = (state = initialState, action: AlertAction): AlertState => {
    switch(action.type) {
        case SET_ALERT:
            return {
                message: action.payload
            }
        default:
            return state;
    }

}

export default AlertReducer;