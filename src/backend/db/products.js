import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
    {
        _id: uuid(),
        title: "Harry Potter and the Philosopher's Stone",
        author: "J.K. Rowling",
        sellingPrice: 374.00,
        originalPrice: 499.00,
        discountPercent: 25,
        discountPrice: 125.00,
        totalRatings: 36310,
        totalStars: 4.7,
        genres: ['Fiction', 'Fantasy', 'Young Adult', 'Adventure', 'Childrens'],
        bookType: 'Paperback',
        offers: {
            fastDelivery: true,
            freeDelivery: false,
            newArrival: false,
            inStock: true,
            bestSeller: false
        },
        coverImg: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1474154022l/3._SY475_.jpg'
    },
    {
        _id: uuid(),
        title: "Atomic Habits",
        author: "James Clear",
        sellingPrice: 507.00,
        originalPrice: 799.00,
        discountPercent: 40,
        discountPrice: 292.00,
        totalRatings: 34993,
        totalStars: 4.6,
        genres: ['Non-Fiction', 'Health', 'Self Help', 'Philosophy', 'Science'],
        bookType: 'Hardcover',
        offers: {
            fastDelivery: true,
            freeDelivery: true,
            newArrival: false,
            inStock: true,
            bestSeller: true
        },
        coverImg: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1535115320l/40121378._SY475_.jpg'
    },
    {
        _id: uuid(),
        title: "Love on the Brain",
        author: "Ali Hazelwood",
        sellingPrice: 265.00,
        originalPrice: 472.00,
        discountPercent: 44,
        discountPrice: 207.00,
        totalRatings: 9198,
        totalStars: 4.5,
        genres: ['Romance', 'Contemporary Romance', 'Adult', 'Fiction', 'Academia'],
        bookType: 'Paperback',
        offers: {
            fastDelivery: true,
            freeDelvoivery: true,
            newArrival: true,
            inStock: false,
            bestSeller: false
        },
        coverImg: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1642069168l/59571699._SY475_.jpg'
    },
    {
        _id: uuid(),
        title: "Harry Potter and the Chamber of Secrets",
        author: "J.K. Rowling",
        sellingPrice: 309.00,
        originalPrice: 499.00,
        discountPercent: 38,
        discountPrice: 190.00,
        totalRatings: 29731,
        totalStars: 4.2,
        genres: ['Fiction', 'Fantasy', 'Young Adult', 'Adventure', 'Childrens'],
        bookType: 'Paperback',
        offers: {
            fastDelivery: true,
            freeDelivery: false,
            newArrival: false,
            inStock: true,
            bestSeller: false
        },
        coverImg: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1474169725l/15881._SY475_.jpg'
    },
    {
        _id: uuid(),
        title: "House of Earth and Blood (Crescent City)",
        author: "Sarah J. Maas",
        sellingPrice: 543.00,
        originalPrice: 799.00,
        discountPercent: 32,
        discountPrice: 256.00,
        totalRatings: 19615,
        totalStars: 4.7,
        genres: ['Fantasy', 'Romance', 'New Adult', 'Fiction', 'Fairies'],
        bookType: 'Paperback',
        offers: {
            fastDelivery: false,
            freeDelivery: true,
            newArrival: false,
            inStock: true,
            bestSeller: true
        },
        coverImg: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1559142847l/44778083.jpg'
    },
    {
        _id: uuid(),
        title: "Harry Potter and the Prisoner of Azkaban",
        author: "J.K. Rowling",
        sellingPrice: 321.00,
        originalPrice: 499.00,
        discountPercent: 36,
        discountPrice: 178.00,
        totalRatings: 22491,
        totalStars: 4.8,
        genres: ['Fiction', 'Fantasy', 'Young Adult', 'Adventure', 'Childrens'],
        bookType: 'Paperback',
        offers: {
            fastDelivery: false,
            freeDelivery: false,
            newArrival: false,
            inStock: true,
            bestSeller: false
        },
        coverImg: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1630547330l/5._SY475_.jpg'
    },
    {
        _id: uuid(),
        title: "Harry Potter and the Goblet of Fire",
        author: "J.K. Rowling",
        sellingPrice: 429.00,
        originalPrice: 699.00,
        discountPercent: 39,
        discountPrice: 270.00,
        totalRatings: 20005,
        totalStars: 4.3,
        genres: ['Fiction', 'Fantasy', 'Young Adult', 'Adventure', 'Childrens'],
        bookType: 'Paperback',
        offers: {
            fastDelivery: false,
            freeDelivery: true,
            newArrival: false,
            inStock: true,
            bestSeller: false
        },
        coverImg: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1554006152l/6.jpg'
    },
    {
        _id: uuid(),
        title: "The Book Theif",
        author: "Markus Zusak",
        sellingPrice: 296.00,
        originalPrice: 399.00,
        discountPercent: 26,
        discountPrice: 103.00,
        totalRatings: 10204,
        totalStars: 4.7,
        genres: ['Historical', 'Fiction', 'Young Adult', 'Classics', 'War'],
        bookType: 'Paperback',
        offers: {
            fastDelivery: true,
            freeDelivery: false,
            newArrival: false,
            inStock: true,
            bestSeller: true
        },
        coverImg: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1522157426l/19063._SY475_.jpg'
    },
    {
        _id: uuid(),
        title: "Harry Potter and the Order of the Phoenix",
        author: "J.K. Rowling",
        sellingPrice: 480.00,
        originalPrice: 799.00,
        discountPercent: 40,
        discountPrice: 319.00,
        totalRatings: 18666,
        totalStars: 4.7,
        genres: ['Fiction', 'Fantasy', 'Young Adult', 'Adventure', 'Childrens'],
        bookType: 'Paperback',
        offers: {
            fastDelivery: false,
            freeDelivery: true,
            newArrival: false,
            inStock: true,
            bestSeller: false
        },
        coverImg: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1546910265l/2.jpg'
    },
    {
        _id: uuid(),
        title: "The Da Vinci Code",
        author: "Dan Brown",
        sellingPrice: 330.00,
        originalPrice: 499.00,
        discountPercent: 34,
        discountPrice: 169.00,
        totalRatings: 7686,
        totalStars: 4.6,
        genres: ['Fiction', 'Mystery', 'Thriller', 'Suspense', 'Adventure'],
        bookType: 'Paperback',
        offers: {
            fastDelivery: true,
            freeDelivery: false,
            newArrival: false,
            inStock: true,
            bestSeller: true
        },
        coverImg: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1579621267l/968.jpg'
    },
    {
        _id: uuid(),
        title: "House of Sky and Breath (Crescent City)",
        author: "Sarah J. Maas",
        sellingPrice: 623.00,
        originalPrice: 799.00,
        discountPercent: 22,
        discountPrice: 176.00,
        totalRatings: 9996,
        totalStars: 4.8,
        genres: ['Fantasy', 'Romance', 'New Adult', 'Fiction', 'Fairies'],
        bookType: 'Paperback',
        offers: {
            fastDelivery: false,
            freeDelivery: true,
            newArrival: true,
            inStock: true,
            bestSeller: false
        },
        coverImg: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1559142847l/44778083.jpg'
    },
    {
        _id: uuid(),
        title: "A Man Called Ove",
        author: "Fredrik Backman",
        sellingPrice: 270.00,
        originalPrice: 299.00,
        discountPercent: 32,
        discountPrice: 129.00,
        totalRatings: 32852,
        totalStars: 4.5,
        genres: ['Fiction', 'Contemporary', 'Humor', 'Adult', 'Novel'],
        bookType: 'Hardcover',
        offers: {
            fastDelivery: false,
            freeDelivery: false,
            newArrival: false,
            inStock: false,
            bestSeller: false
        },
        coverImg: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1405259930l/18774964.jpg'
    },
    {
        _id: uuid(),
        title: "Harry Potter and the Half Blood Prince",
        author: "J.K. Rowling",
        sellingPrice: 440.00,
        originalPrice: 699.00,
        discountPercent: 37,
        discountPrice: 259.00,
        totalRatings: 22751,
        totalStars: 4.4,
        genres: ['Fiction', 'Fantasy', 'Young Adult', 'Adventure', 'Childrens'],
        bookType: 'Paperback',
        offers: {
            fastDelivery: true,
            freeDelivery: true,
            newArrival: false,
            inStock: true,
            bestSeller: true
        },
        coverImg: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1587697303l/1._SX318_.jpg'
    },
    {
        _id: uuid(),
        title: "And Then There Were None",
        author: "Agatha Christie",
        sellingPrice: 172.00,
        originalPrice: 299.00,
        discountPercent: 42,
        discountPrice: 114.00,
        totalRatings: 16870,
        totalStars: 4.2,
        genres: ['Mystery', 'Classics', 'Fiction', 'Thriller', 'Crime'],
        bookType: 'Paperback',
        offers: {
            fastDelivery: true,
            freeDelivery: true,
            newArrival: false,
            inStock: true,
            bestSeller: false
        },
        coverImg: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1638425885l/16299._SY475_.jpg'
    },
    {
        _id: uuid(),
        title: "Harry Potter and the Deathly Hallows",
        author: "J.K. Rowling",
        sellingPrice: 624.00,
        originalPrice: 738.00,
        discountPercent: 15,
        discountPrice: 114.00,
        totalRatings: 25340,
        totalStars: 4.6,
        genres: ['Fiction', 'Fantasy', 'Young Adult', 'Adventure', 'Childrens'],
        bookType: 'Paperback',
        offers: {
            fastDelivery: true,
            freeDelivery: true,
            newArrival: false,
            inStock: false,
            bestSeller: false
        },
        coverImg: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1474171184l/136251._SY475_.jpg'
    },
    {
        _id: uuid(),
        title: "Pride and Prejudice",
        author: "Jane Austen",
        sellingPrice: 624.00,
        originalPrice: 738.00,
        discountPercent: 15,
        discountPrice: 114.00,
        totalRatings: 25340,
        totalStars: 4.6,
        genres: ['Classics', 'Fiction', 'Romance', 'Historical', 'Novel'],
        bookType: 'Hardcover',
        offers: {
            fastDelivery: true,
            freeDelivery: true,
            newArrival: false,
            inStock: false,
            bestSeller: true
        },
        coverImg: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1320399351l/1885.jpg'
    },
    {
        _id: uuid(),
        title: "Love Hypothesis",
        author: "Ali Hazelwood",
        sellingPrice: 277.00,
        originalPrice: 493.00,
        discountPercent: 44,
        discountPrice: 216.00,
        totalRatings: 10256,
        totalStars: 4.7,
        genres: ['Romance', 'Contemporary Romance', 'Adult', 'Fiction', 'Academia'],
        bookType: 'Paperback',
        offers: {
            fastDelivery: false,
            freeDelivery: false,
            newArrival: false,
            inStock: true,
            bestSeller: false
        },
        coverImg: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1611937942l/56732449.jpg'
    },
    {
        _id: uuid(),
        title: "Harry Potter and the Cursed Child: Parts One and Two",
        author: "John Tiffany (Adaptation), Jack Thorne, J.K. Rowling",
        sellingPrice: 240.00,
        originalPrice: 399.00,
        discountPercent: 40,
        discountPrice: 159.00,
        totalRatings: 23096,
        totalStars: 4.4,
        genres: ['Fiction', 'Fantasy', 'Young Adult', 'Adventure', 'Childrens'],
        bookType: 'Paperback',
        offers: {
            fastDelivery: false,
            freeDelivery: false,
            newArrival: false,
            inStock: true,
            bestSeller: false
        },
        coverImg: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1470082995l/29056083._SY475_.jpg'
    },
    {
        _id: uuid(),
        title: "The Courage to Be Disliked",
        author: "Ichiro Kishimi and Fumitake Koga",
        sellingPrice: 339.00,
        originalPrice: 499.00,
        discountPercent: 32,
        discountPrice: 160.00,
        totalRatings: 3445,
        totalStars: 4.5,
        genres: ['Non-Fiction', 'Self Help', 'Philosophy', 'Psychology', 'Mental Health'],
        bookType: 'Hardcover',
        offers: {
            fastDelivery: false,
            freeDelivery: false,
            newArrival: false,
            inStock: true,
            bestSeller: true
        },
        coverImg: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1545421684l/43306206._SY475_.jpg'
    },
    {
        _id: uuid(),
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        sellingPrice: 227.00,
        originalPrice: 399.00,
        discountPercent: 43,
        discountPrice: 172.00,
        totalRatings: 45948,
        totalStars: 4.0,
        genres: ['Fiction', 'Classics', 'Historical', 'Academic', 'Young Adult'],
        bookType: 'Paperback',
        offers: {
            fastDelivery: true,
            freeDelivery: false,
            newArrival: false,
            inStock: false,
            bestSeller: true
        },
        coverImg: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1553383690l/2657.jpg'
    },
];

