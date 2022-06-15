import { Response } from "miragejs";
import { formatDate, requiresAuth } from "../utils/authUtils";

/**
 * All the routes related to Orders are present here.
 * These are private routes.
 * Client needs to add "authorization" header with JWT token in it to access it.
 * */

/**
 * This handler handles getting all the orders place by the user.
 * send GET Request at /api/user/order
 * */
export const getAllOrdersHandler = function (schema, request) {
  const userId = requiresAuth.call(this, request);
  if (!userId) {
    new Response(
      404,
      {},
      {
        errors: ["The email you entered is not Registered. Not Found error"],
      }
    );
  }
  const userOrders = schema.users.findBy({ _id: userId }).orders;
  return new Response(200, {}, { orders: userOrders });
};

/**
 * This handler handles placing a new order to the user's orders.
 * send POST Request at /api/user/order
 * body contains {order}
 * */

export const addItemToOrdersHandler = function (schema, request) {
  console.log(request)
  const userId = requiresAuth.call(this, request);
  try {
    if (!userId) {
      return new Response(
        404,
        {},
        {
          errors: ["The email you entered is not Registered. Not Found error"],
        }
      );
    }
    const userOrders = schema.users.findBy({ _id: userId }).orders;
    const order = JSON.parse(request.requestBody);
    console.log(order)
    userOrders.push({
      ...order,
      createdAt: formatDate(),
      updatedAt: formatDate(),
    });
    this.db.users.update({ _id: userId }, { orders: userOrders });
    return new Response(201, {}, { orders: userOrders });
  } catch (error) {
    console.log(error)
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};
