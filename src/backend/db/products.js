import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
    {
        _id: uuid(),
        title: "Harry Potter Complete Set",
        author: "J.K. Rowling",
        sellingPrice: 2888.00,
        originalPrice: 4999.00,
        discountPercent: 42,
        discountPrice: 2111.00,
        totalRatings: 82150,
        totalStars: 4.8,
        genres: ['Fiction', 'Fantasy', 'Young Adult', 'Adventure', 'Childrens'],
        bookType: 'Hardcover',
        offers: {
            fastDelivery: true,
            freeDelivery: false,
            newArrival: false,
            inStock: true,
            bestSeller: false
        },
        coverImg: 'https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9780545162074_p3_v1%5D&call=url%5Bfile:common/decodeProduct.chain%5D'
    },
    {
        _id: uuid(),
        title: "7 Mindsets for Success, Happiness and Fulfilment",
        author: "Swami Mukundananda",
        sellingPrice: 228.00,
        originalPrice: 295.00,
        discountPercent: 23,
        discountPrice: 292.00,
        totalRatings: 372,
        totalStars: 4.5,
        genres: ['Non-Fiction', 'Spirituality', 'Self Help', 'Philosophy', 'Psychology'],
        bookType: 'Paperback',
        offers: {
            fastDelivery: true,
            freeDelivery: true,
            newArrival: false,
            inStock: true,
            bestSeller: false
        },
        coverImg: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1569209892l/51987423._SX318_SY475_.jpg'
    },
    {
        _id: uuid(),
        title: "Love on the Brain",
        author: "Ali Hazelwood",
        sellingPrice: 265.00,
        originalPrice: 472.00,
        discountPercent: 44,
        discountPrice: 207.00,
        totalRatings: 879,
        totalStars: 4.4,
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
        title: "Why We Sleep: Unlocking the Power of Sleep and Dreams",
        author: "Matthew Walker",
        sellingPrice: 347.00,
        originalPrice: 599.00,
        discountPercent: 42,
        discountPrice: 272.00,
        totalRatings: 129469,
        totalStars: 4.4,
        genres: ['Non-Fiction', 'Neuroscience', 'Health', 'Psychology', 'Self Help'],
        bookType: 'Paperback',
        offers: {
            fastDelivery: true,
            freeDelivery: false,
            newArrival: false,
            inStock: true,
            bestSeller: false
        },
        coverImg: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1556604137l/34466963._SY475_.jpg'
    },
    {
        _id: uuid(),
        title: "The Krishna Key",
        author: "Ashwin Sanghi",
        sellingPrice: 440.00,
        originalPrice: 450.00,
        discountPercent: 2,
        discountPrice: 10.00,
        totalRatings: 19017,
        totalStars: 3.6,
        genres: ['Fiction', 'Thriller', 'Mythology', 'Historical', 'Mystery'],
        bookType: 'Paperback',
        offers: {
            fastDelivery: false,
            freeDelivery: false,
            newArrival: false,
            inStock: false,
            bestSeller: false
        },
        coverImg: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1341289060l/15733523.jpg'
    },
    {
        _id: uuid(),
        title: "Atomic Habits",
        author: "James Clear",
        sellingPrice: 507.00,
        originalPrice: 799.00,
        discountPercent: 37,
        discountPrice: 292.00,
        totalRatings: 347170,
        totalStars: 4.38,
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
        title: "Attitude Is Everything",
        author: "Jeff Keller",
        sellingPrice: 429.00,
        originalPrice: 699.00,
        discountPercent: 39,
        discountPrice: 270.00,
        totalRatings: 2886,
        totalStars: 4.4,
        genres: ['Non-Fiction', 'Slef Help', 'Personal Development', 'Leadership', 'Motivational'],
        bookType: 'Paperback',
        offers: {
            fastDelivery: false,
            freeDelivery: true,
            newArrival: false,
            inStock: true,
            bestSeller: false
        },
        coverImg: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1482649723l/33561786._SY475_.jpg'
    },
    {
        _id: uuid(),
        title: "The Book Theif",
        author: "Markus Zusak",
        sellingPrice: 296.00,
        originalPrice: 399.00,
        discountPercent: 26,
        discountPrice: 103.00,
        totalRatings: 2143296,
        totalStars: 4.4,
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
        title: "Lean In: Women, Work, and the Will to Lead",
        author: "heryl Sandberg",
        sellingPrice: 385.00,
        originalPrice: 699.00,
        discountPercent: 45,
        discountPrice: 314.00,
        totalRatings:  243804,
        totalStars: 3.9,
        genres: ['Non-Fiction', 'Feminism', 'Leadership', 'Business', 'Autobiography'],
        bookType: 'Hardcover',
        offers: {
            fastDelivery: false,
            freeDelivery: true,
            newArrival: false,
            inStock: true,
            bestSeller: false
        },
        coverImg: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1630483761l/16071764._SY475_.jpg'
    },
    {
        _id: uuid(),
        title: "Divergent Series Complete Set",
        author: "Veronica Roth",
        sellingPrice: 962.00,
        originalPrice: 1599.00,
        discountPercent: 40,
        discountPrice: 637.00,
        totalRatings: 43526,
        totalStars: 3.2,
        genres: ['Dystopian', 'Fiction', 'Fantasy', 'Romance', 'Young Adult'],
        bookType: 'Paperback',
        offers: {
            fastDelivery: false,
            freeDelivery: true,
            newArrival: false,
            inStock: true,
            bestSeller: false
        },
        coverImg: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1372682053l/17383994.jpg'
    },
    {
        _id: uuid(),
        title: "A Man Called Ove",
        author: "Fredrik Backman",
        sellingPrice: 270.00,
        originalPrice: 299.00,
        discountPercent: 1,
        discountPrice: 129.00,
        totalRatings: 32852,
        totalStars: 4.5,
        genres: ['Fiction', 'Contemporary', 'Humor', 'Adult', 'Novel'],
        bookType: 'Paperback',
        offers: {
            fastDelivery: false,
            freeDelivery: false,
            newArrival: false,
            inStock: true,
            bestSeller: false
        },
        coverImg: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1405259930l/18774964.jpg'
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
        title: "Palace of Illusions",
        author: "Chitra Banerjee Divakaruni",
        sellingPrice: 263.00,
        originalPrice: 450.00,
        discountPercent: 42,
        discountPrice: 187.00,
        totalRatings: 42043,
        totalStars: 4.2,
        genres: ['Fiction', 'Mythology', 'Historical', 'Retellins', 'Cultural'],
        bookType: 'Paperback',
        offers: {
            fastDelivery: true,
            freeDelivery: true,
            newArrival: false,
            inStock: true,
            bestSeller: false
        },
        coverImg: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1396229073l/1774836.jpg'
    },
    {
        _id: uuid(),
        title: "Twilight",
        author: "Stephenie Meyer",
        sellingPrice: 399.00,
        originalPrice: 499.00,
        discountPercent: 20,
        discountPrice: 100.00,
        totalRatings: 5671177,
        totalStars: 2.7,
        genres: ['Fantasy', 'Young Adult', 'Romance', 'Fiction', 'Paranomal'],
        bookType: 'Paperback',
        offers: {
            fastDelivery: true,
            freeDelivery: true,
            newArrival: false,
            inStock: true,
            bestSeller: false
        },
        coverImg: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1361039443l/41865.jpg'
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
        title: "Wings of Fire",
        author: "Dr. A.P.J. Abdul Kalam and Arun Tiwari",
        sellingPrice: 190.00,
        originalPrice: 299.00,
        discountPercent: 36,
        discountPrice: 109.00,
        totalRatings: 46630,
        totalStars: 4.3,
        genres: ['Biography', 'Non-Fiction', 'Inspirational', 'Science', 'History'],
        bookType: 'Paperback',
        offers: {
            fastDelivery: false,
            freeDelivery: false,
            newArrival: false,
            inStock: true,
            bestSeller: true
        },
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
        title: "The Psychology of Money",
        author: "Morgan Housel",
        sellingPrice: 290.00,
        originalPrice: 399.00,
        discountPercent: 27,
        discountPrice: 109.00,
        totalRatings: 51051,
        totalStars: 4.4,
        genres: ['Economics', 'Finance', 'Psychology', 'Business', 'Self Help'],
        bookType: 'Paperback',
        offers: {
            fastDelivery: false,
            freeDelivery: true,
            newArrival: false,
            inStock: true,
            bestSeller: true
        },
        coverImg: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1581527774l/41881472._SY475_.jpg'
    },
    {
        _id: uuid(),
        title: "Harry Potter and the Cursed Child: Parts One and Two",
        author: "John Tiffany (Adaptation), Jack Thorne, J.K. Rowling",
        sellingPrice: 240.00,
        originalPrice: 399.00,
        discountPercent: 40,
        discountPrice: 159.00,
        totalRatings: 848359,
        totalStars: 1.9,
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
        totalRatings: 36382,
        totalStars: 4.1,
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
        title: "City of Bones",
        author: "Cassandra Clare",
        sellingPrice: 366.00,
        originalPrice: 450.00,
        discountPercent: 25,
        discountPrice: 124.00,
        totalRatings: 22751,
        totalStars: 2.4,
        genres: ['Fantasy', 'Young Adult', 'Romance', 'Paranomal', 'Fiction'],
        bookType: 'Paperback',
        offers: {
            fastDelivery: true,
            freeDelivery: true,
            newArrival: false,
            inStock: true,
            bestSeller: false
        },
        coverImg: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1432730315l/256683._SY475_.jpg'
    },
    {
        _id: uuid(),
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        sellingPrice: 227.00,
        originalPrice: 399.00,
        discountPercent: 43,
        discountPrice: 172.00,
        totalRatings: 5202423,
        totalStars: 3.7,
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
    {
        _id: uuid(),
        title: "The Great Railway Bazaar",
        author: "Paul Theroux",
        sellingPrice: 250.00,
        originalPrice: 399.00,
        discountPercent: 37,
        discountPrice: 140.00,
        totalRatings: 18293,
        totalStars: 3.5,
        genres: ['Travel', 'Non-Fiction', 'Cultural', 'Autobiography', 'Classics'],
        bookType: 'Paperback',
        offers: {
            fastDelivery: true,
            freeDelivery: false,
            newArrival: false,
            inStock: true,
            bestSeller: false
        },
        coverImg: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1440437557l/63689._SY475_.jpg'
    },
    {
        _id: uuid(),
        title: "House of Sky and Breath",
        author: "Sarah J. Maas",
        sellingPrice: 529.00,
        originalPrice: 799.00,
        discountPercent: 34,
        discountPrice: 270.00,
        totalRatings: 59559,
        totalStars: 4.6,
        genres: ['Fantasy', 'Romance', 'Adult', 'Fairies', 'Fiction'],
        bookType: 'Paperback',
        offers: {
            fastDelivery: true,
            freeDelivery: false,
            newArrival: true,
            inStock: true,
            bestSeller: false
        },
        coverImg: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1633097753l/40132775._SY475_.jpg'
    }
];