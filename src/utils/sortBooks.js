const sortBooks = (filteredBooks, sortByOption) => {
    
    switch(sortByOption) {
        case 'PRICE_LOW_TO_HIGH':
            return [...filteredBooks].sort((filteredBookA, filteredBookB) => filteredBookA.sellingPrice - filteredBookB.sellingPrice);
        case 'PRICE_HIGH_TO_LOW':
            return [...filteredBooks].sort((filteredBookA, filteredBookB) => filteredBookB.sellingPrice - filteredBookA.sellingPrice);
        case 'RATINGS_LOW_TO_HIGH':
            return [...filteredBooks].sort((filteredBookA, filteredBookB) => filteredBookA.totalStars - filteredBookB.totalStars);
        case 'RATINGS_HIGH_TO_LOW':
            return [...filteredBooks].sort((filteredBookA, filteredBookB) => filteredBookB.totalStars - filteredBookA.totalStars);
        default:
            return filteredBooks;
    }    
}

export { sortBooks };