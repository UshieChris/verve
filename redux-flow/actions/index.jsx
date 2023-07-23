import loginUser from './login_action';
import reset from './reset_action';

export const Actions = {
  loginUser,
  // action to reset actions after every error response
  reset,
};
