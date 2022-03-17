const SortingOptions = () => {
  return (
    <aside className='sorting-container flex-col align-center justify-start'>
        <ul className="list list-inline list-sorting-options flex-row align-center justify-start flex-wrap">
            <p className="list-head primary-color">
                Sort By
            </p>
            <li className="sorting-option border-bottom">
                <button className="btn btn-link">
                    Price- High to Low
                </button>
            </li>
            <li className="sorting-option border-bottom">
                <button className="btn btn-link">
                    Price- Low to High
                </button>
            </li>
            <li className="sorting-option border-bottom">
                <button className="btn btn-link">
                    Rating- Hight to Low
                </button>
            </li>
            <li className="sorting-option border-bottom">
                <button className="btn btn-link">
                    Rating- Low to High
                </button>
            </li>
        </ul>
    </aside>
  )
}

export { SortingOptions };