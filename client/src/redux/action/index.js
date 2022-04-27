import axios from "axios";
export const POST_CLIENT = "POST_CLIENT";

export const postClient = (payload) => {
  return async function (dispatch) {
    const inputClient = await axios.post(
      "http://localhost:3001/clientes",
      payload
    );
    return dispatch({
      type: POST_CLIENT,
      inputClient,
    });
  };
};
