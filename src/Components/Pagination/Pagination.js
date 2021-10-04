import React from 'react'
import './Pagination.css'

const Pagination = ({page, totalResults, openPage}) => {
    const pages = []
    const totalPages = Math.ceil(totalResults / 10)
    for (let index = 1; index <= totalPages; index++) {
        pages.push(index)
    }

    const clickPage = (page) => {
        openPage(page)
    }

    const previousPage = (page) => {
        openPage(--page)
    }

    const nextPage = (page) => {
        openPage(++page)
    }

    const getListPage = (pages) => {
        const fivePage = pages.slice(page - 1, page + 5)
        return fivePage.map(currentPage => {
            return (
                <div className='pagination-container__page'
                     key={currentPage}
                     onClick={() => clickPage(currentPage)}
                >
                    {currentPage}
                </div>
            );
        })
    }
    return (
        <div className='pagination-container'>
            {
                page !== 1 ? <div className='pagination-container__prev' onClick={() => previousPage(page)}>Previous</div> : null
            }
            { getListPage(pages) }
            {
                page !== totalPages ? <div className='pagination-container__next' onClick={() => nextPage(page)}>Next</div> : null
            }
        </div>
    );
}

export default Pagination