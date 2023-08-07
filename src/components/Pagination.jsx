import { useState } from "react";

export const Pagination = ({itemsPerPage, totalItems, paginate}) => {

    const [activePage, setActivePage] = useState(1);

    const pageNumbers = [];

    for (let i = 1; i<= Math.ceil(totalItems/ itemsPerPage); i++){
        pageNumbers.push(i);
    }

    const handleOnClick = (number) => {
        paginate(number);
        setActivePage(number);
    }

    const onPrevOrNextPage = (activePage) => {
        handleOnClick(activePage);
        
    }

  return (
    <nav>
        <ul className="pagination">
            <i 
                onClick={()=>onPrevOrNextPage(activePage - 1)}
                className={`fa-solid fa-chevron-left ${activePage === 1 ? 'disabled-btn' : ''}`}>
                </i>
                {pageNumbers.map(number => (
                    <li key={number}>
                        <a className={`pagination-page ${activePage === number ? 'active-page' : ''}  `} onClick={() => handleOnClick(number)}>{number}</a>
                    </li>
                ))}
            <i  
                onClick={()=>onPrevOrNextPage(activePage + 1)}
                className={`fa-solid fa-chevron-right ${activePage === pageNumbers.length ? 'disabled-btn' : ''}`}></i>
        </ul>
    </nav>
  )
}
