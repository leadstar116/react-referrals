export const ALERT_SUCCESS = 'ALERT_SUCCESS'
export const alertSuccess = (message: string) => ({
    type: ALERT_SUCCESS,
    payload: { message }
})

export const ALERT_FAILURE = 'ALERT_FAILURE'
export const alertFailure = (message: string) => ({
    type: ALERT_FAILURE,
    payload: { message }
})

export const ALERT_CLEAR = 'ALERT_CLEAR'
export const alertClear = () => ({
    type: ALERT_CLEAR,
    payload: {}
})