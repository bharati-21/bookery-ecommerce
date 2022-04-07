import { useFilter } from "contexts/";
import CloseIcon from '@mui/icons-material/Close';

const ClearFilters = ({ showCloseIcon, handleChangeShowFilterDrawer }) => {
    const { filterDispatch } = useFilter();

    const handleClearFilters = event => {
        filterDispatch({filterType: 'CLEAR_FILTERS'});
    }

    return (
		<div className="product-filters-head flex-row flex-align-end flex-justify-between mb-1-5 text-underline">
			<h5 className="sidebar-head">Filters</h5>
			<div className="flex-row flex-align-center flex-justify-center clear-filters-button-container">
				<button
					className="btn btn-clear-filters btn-link"
					onClick={handleClearFilters}
				>
					Clear Filters
				</button>
				{
                    showCloseIcon ? (
					    <button className="btn btn-icon" onClick={() => handleChangeShowFilterDrawer(false)}>
						    <CloseIcon fontSize="large" />
					    </button>
				    ) : 
                    null
                }
			</div>
		</div>
	);
}

export { ClearFilters };