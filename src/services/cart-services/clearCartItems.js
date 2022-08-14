import axios from "axios";

export const clearCartItems = (token) =>
  axios.get("/api/user/cart/clear", {
    headers: { authorization: token },
  });
