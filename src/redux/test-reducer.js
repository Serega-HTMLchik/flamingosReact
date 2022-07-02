const UPDATE_EMAIL_VALUE = "UPDATE_EMAIL_VALUE";
const COUNTER = "COUNTER";

let initialState = {
    emailValue: 'pups@exemple.ru',
    counter: 0
}

const testReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_EMAIL_VALUE:
            state.emailValue = action.newEmailValue;
            return state;

        case COUNTER:
            state.counter = state.counter + 1;
            return state;
        default:
            return state;
    }
}

export const updateEmailValue = (newEmailValue) => {
    return {
        type: UPDATE_EMAIL_VALUE,
        newEmailValue
    }
}
export const onClickCounter = () => {
    return {
        type: COUNTER
    }
}
export default testReducer;