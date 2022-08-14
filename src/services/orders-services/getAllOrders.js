import axios from "axios";

export const getAllOrders = (token) =>
  axios.get("/api/user/orders", { headers: { authorization: token } });
