import { LOGIN_USER } from "../arsVariables";

const loginUser = payload => ({
    type: LOGIN_USER,
    payload
});

export default loginUser;