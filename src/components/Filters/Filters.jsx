import { GenreFilters, BookTypeFilters, RatingFilters, PriceFilters, ClearFilters } from "../";

const Filters = ({ showCloseIcon, handleChangeShowFilterDrawer }) => {
    return (
        <aside className="sidebar product-filters py-1-5 px-1">
            <ClearFilters showCloseIcon={showCloseIcon} handleChangeShowFilterDrawer={handleChangeShowFilterDrawer} />       
            <GenreFilters />
            <PriceFilters />
            <RatingFilters />
            <BookTypeFilters />
        </aside>
    )
}

export { Filters };