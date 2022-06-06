import { v4 as uuid } from "uuid";
import bcyrpt from "bcryptjs";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * Every user will have cart (Quantity of all Products in Cart is set to 1 by default), wishList by default
 * */

export const users = [
	{
		_id: uuid(),
		firstName: "Jane",
		lastName: "Doe",
		email: "janedoe@gmail.com",
		password: bcyrpt.hashSync("janeDoe!123", 5),
		createdAt: formatDate(),
		updatedAt: formatDate(),
	},
	{
		_id: uuid(),
		firstName: "John",
		lastName: "Doe",
		email: "johndoe@gmail.com",
		password: bcyrpt.hashSync("DoeJohn_456", 5),
		createdAt: formatDate(),
		updatedAt: formatDate(),
	},
	{
		_id: uuid(),
		firstName: "Bharati",
		lastName: "Subramanian",
		email: "bharati.sub@gmail.com",
		password: bcyrpt.hashSync("work@book2107", 5),
		createdAt: formatDate(),
		updatedAt: formatDate(),
	},
];
