import {
    ALERT_FAILURE,
    ALERT_SUCCESS
} from '../_actions/alert.actions'
import { AlertData } from '../_constants/alert.interface';

const alertState: AlertData = {
    alertClass: '',
    alertMessage: ''
}

const alertReducer = (state = alertState, action: any) => {
    const {type, payload} = action

    switch(type) {
        case ALERT_SUCCESS: {
            return {
                ...state,
                alertMessage: payload.message,
                alertClass: 'alert alert-success'
            }
        }
        case ALERT_FAILURE: {
            return {
                ...state,
                alertMessage: payload.message,
                alertClass: 'alert alert-danger'
            }
        }
    }
    return state
}

export default alertReducer