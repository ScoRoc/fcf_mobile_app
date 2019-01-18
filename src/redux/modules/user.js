const LIFT_USER = 'fcf_frontend/user/LIFT_USER';

const initialState = {
  user: null,
  token: null,
};

export default function user(state = initialState, action = {}) {
  switch (action.type) {
    case LIFT_USER:
      return {...state, user: action.user, token: action.token};
    default:
      return state;
  }
};

export function liftUser({ user, token }) {
  return { type: LIFT_USER, user, token };
};
