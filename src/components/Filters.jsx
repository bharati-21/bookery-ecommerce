import { GenreFilters, BookTypeFilters, RatingFilters, PriceFilters, ClearFilters } from "./";

const Filters = () => {
    return (
        <aside className="sidebar product-filters py-1-5 px-1">
            <ClearFilters />       
            <GenreFilters />
            <PriceFilters />
            <RatingFilters />
            <BookTypeFilters />
        </aside>
    )
}

export { Filters };