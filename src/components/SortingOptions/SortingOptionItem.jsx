import React from 'react'

const SortingOptionItem = ({props: { option, handleChangeSortingOption, sortBy, value }}) => {
    return (
        <li className={`sorting-option ${sortBy === value && "border-bottom"}`}>
            <button className="btn btn-link" onClick={handleChangeSortingOption} value={value}>
                { option }
            </button>
        </li>
    )
}

export { SortingOptionItem };