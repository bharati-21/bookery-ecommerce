const ClearFilters = () => {
    return (
        <div className="product-filters-head flex-row flex-align-end flex-justify-between mb-1-5 text-underline">
            <h5 className="sidebar-head">Filters</h5>
            <button className="btn btn-clear-filters btn-link">
                Clear Filters
            </button>
        </div> 
    );
}

export { ClearFilters };