//src/redux/reducers/login.js

import { LOGIN_ACTIONS } from "../actions/login"

const reducer = (user = {}, action) => {

    switch (action.type) {
        case LOGIN_ACTIONS.LOGIN_ACTION:
            //for now we will just save user data in state for logged in user
            return {
                ...action.data
            }
        case LOGIN_ACTIONS.LOGOUT_ACTION:
            // make the state empty to logout user
            return {

            }
        default:
            return user
    }
}

export default reducer