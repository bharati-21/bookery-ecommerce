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
		address: [
			{
				_id: uuid(),
				name: "Jane Doe",
				addressLine: "National Highway 8, Rangpuri",
				city: "Bengaluru",
				state: "Karnataka",
				pincode: "110037",
				phoneNumber: "7598170706",
			},
		],
	},
	{
		_id: uuid(),
		firstName: "John",
		lastName: "Doe",
		email: "johndoe@gmail.com",
		password: bcyrpt.hashSync("DoeJohn_456", 5),
		createdAt: formatDate(),
		updatedAt: formatDate(),
		address: [
			{
				_id: uuid(),
				name: "John Doe",
				addressLine: "5/5755, Dev Nagar, D B Gupta Road",
				city: "Delhi",
				state: "Delhi",
				pincode: "110005",
				phoneNumber: "9876521176",
			},
		],
	},
	{
		_id: uuid(),
		firstName: "Bharati",
		lastName: "Subramanian",
		email: "bharati.sub@gmail.com",
		password: bcyrpt.hashSync("work@book2107", 5),
		createdAt: formatDate(),
		updatedAt: formatDate(),
		address: [
			{
				_id: uuid(),
				name: "Bharati Subramanian",
				addressLine:
					"F-1, Shop No 12, Sector 9, Near Shabari Hotel, Vashi, Navi Mumbai",
				city: "Mumbai",
				state: "Maharashtra",
				pincode: "400073",
				phoneNumber: "8987698765",
			},
		],
	},
];
