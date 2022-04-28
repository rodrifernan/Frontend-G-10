import { POST_CLIENT } from "../action/index";

const initialState = {
  clientes: [],
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_CLIENT:
      return {
        ...state,
        clientes: action.payload,
      };
    default:
      return state;
  }
};
