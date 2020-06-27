//src/redux/actions/login.js

const LOGIN_ACTION = "LOGIN"
const LOGOUT_ACTION = "LOGOUT"

export const LOGIN_ACTIONS = {
    LOGIN_ACTION,
    LOGOUT_ACTION
}

export const do_user_login = (username, password) => {
    return {
        type: LOGIN_ACTION,
        data: { username, password }
    }
}

export const do_user_logout = () => {
    return {
        type: LOGIN_ACTION
    }
}