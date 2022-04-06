import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
	{
		_id: uuid(),
		categoryName: "Fiction",
		description:
			"Literature in the form of prose, especially novels, that describes imaginary events and people",
		image: "https://github.com/bharati-21/bookery/blob/7e9cd40067b78bf87a44450a4fed898fe3990705/assets/images/home-page/fiction.jpg?raw=true",
	},
	{
		_id: uuid(),
		categoryName: "Non-Fiction",
		description:
			"Non-fiction is writing that gives information or describes real events, rather than telling a story.",
		image: "https://github.com/bharati-21/bookery/blob/7e9cd40067b78bf87a44450a4fed898fe3990705/assets/images/home-page/non-fiction.jpg?raw=true",
	},
	{
		_id: uuid(),
		categoryName: "Classics",
		description:
			"Classics are the study of languages, literatures, material culture, and history of the societies of the ancient world.",
		image: "https://github.com/bharati-21/bookery/blob/7e9cd40067b78bf87a44450a4fed898fe3990705/assets/images/home-page/classics.jpg?raw=true",
	},
	{
		_id: uuid(),
		categoryName: "Mystery",
		description:
			"Mystery is a fiction genre where the nature of an event, usually a murder or other crime, remains mysterious until the end of the story.",
		image: "https://github.com/bharati-21/bookery/blob/7e9cd40067b78bf87a44450a4fed898fe3990705/assets/images/home-page/mystery.jpg?raw=true",
	},
	{
		_id: uuid(),
		categoryName: "Fantasy",
		description:
			"Fantasy is a genre of speculative fiction involving magical elements, typically set in a fictional universe and sometimes inspired by mythology and folklore.",
		image: "https://github.com/bharati-21/bookery/blob/7e9cd40067b78bf87a44450a4fed898fe3990705/assets/images/home-page/fantasy.jpg?raw=true",
	},
	{
		_id: uuid(),
		categoryName: "Romance",
		description:
			"A romance or romantic novel refers to a type of genre fiction which places its primary focus on the relationship and romantic love between two people.",
		image: "https://github.com/bharati-21/bookery/blob/7e9cd40067b78bf87a44450a4fed898fe3990705/assets/images/home-page/romance.jpg?raw=true",
	},
];
