const filterBySearchText = (books, searchText) => {
    if(searchText.trim.length === '') return books;
    return books.filter(({ author, title }) => author.toLowerCase().includes(searchText.toLowerCase()) || title.toLowerCase().includes(searchText.toLowerCase()));
}

export { filterBySearchText };