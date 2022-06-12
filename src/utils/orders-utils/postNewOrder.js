import axios from "axios";

export const postNewOrder = (token, order) =>
  axios.post(
    "/api/user/order",
    { order },
    { headers: { authorization: token } }
  );
