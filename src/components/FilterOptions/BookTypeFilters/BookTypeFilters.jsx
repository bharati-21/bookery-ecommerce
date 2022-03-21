import { BookTypeFilterOption } from "./BookTypeFilterOption";
import { v4 as uuid } from 'uuid';

const BookTypeFilters = () => {

    const bookTypeFiltersList = [
        { id: uuid(), bookTypeFilter: 'Paperback' },
        { id: uuid(), bookTypeFilter: 'Hardcover' },
    ];

    const bookTypeFilterMapping = bookTypeFiltersList.map(({ id, bookTypeFilter }) => <BookTypeFilterOption key={id} bookTypeFilter={bookTypeFilter} />)    

    return (
        <div className="filter-category mt-1 mb-2">
            <ul className="list-spaced list-style-none">
                <h6 className="filter-head text-reg list-head px-0-5 py-0-25 mb-0-5">
                    Book Cover
                </h6>
                    {bookTypeFilterMapping}
            </ul>                
        </div>
    )
}

export { BookTypeFilters };