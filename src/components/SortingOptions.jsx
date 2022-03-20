import { useFilter } from "../contexts";
import { SortingOptionItem } from './SortingOptionItem';
import { v4 as uuid } from 'uuid';

const SortingOptions = () => {

    const { filterDispatch, filterState: { sortBy } } = useFilter(); 

    const handleChangeSortingOption = event => {
        const { value } = event.target;
        filterDispatch({filterType: 'SORT_BY', filterPayload: value});
    }

    const sortingOptionList = [
        {
            id: uuid(),
            option: 'Price- High to Low',
            value: 'PRICE_HIGH_TO_LOW'
        },
        {
            id: uuid(),
            option: 'Price- Low to High',
            value: 'PRICE_LOW_TO-HIGH'
        },
        {
            id: uuid(),
            option: 'Ratings- High to Low',
            value: 'RATINGS_HIGH_TO_LOW'
        },
        {
            id: uuid(),
            option: 'Ratings- Low to High',
            value: 'RATINGS_LOW_TO_HIGH'
        },
    ]

    const sortingOptionsMapping = sortingOptionList.map(({ id, option, value }) => <SortingOptionItem key={id} props={{ option, handleChangeSortingOption, sortBy, value }}/>)

    return (
        <aside className='sorting-container flex-col align-center justify-start'>
            <ul className="list list-inline list-sorting-options flex-row align-center justify-start flex-wrap">
                <li className="list-head primary-color">
                    Sort By
                </li>
                { sortingOptionsMapping }
            </ul>
        </aside>
    )
}

export { SortingOptions };