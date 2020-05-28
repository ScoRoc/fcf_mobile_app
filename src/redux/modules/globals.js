const FOO_PLACEHOLDER = 'fcf_frontend/global/FOO_PLACEHOLDER';

const initialState = {
  foo: 'foo',
};

export default function globals(state = initialState, action = {}) {
  switch (action.type) {
    case FOO_PLACEHOLDER:
      return {...state, data: action.data};
    default:
      return state;
  }
};

export function fooPlaceholder(data) {
  return { type: FOO_PLACEHOLDER, data };
};
