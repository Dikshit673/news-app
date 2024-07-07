import React from 'react'

const PaginationCom = ({ myCurrentPage, myArrayRange, myHandlePaginationClick }) => {

    return (
        <ul className="pagination pagination-md justify-content-center mt-4">
            <li className="page-item" onClick={() => myHandlePaginationClick("&laquo;")}><span className="page-link">&laquo;</span></li>
            <li className="page-item" onClick={() => myHandlePaginationClick("&lsaquo;")}><span className="page-link" >&lsaquo;</span></li>
            {myArrayRange.map((currData, ind) => {
                return (
                    <li className={`page-item ${currData === myCurrentPage ? "active" : ""}`} key={ind} onClick={() => myHandlePaginationClick(currData)}><span className="page-link">{currData}</span></li>
                )
            })}
            <li className="page-item" onClick={() => myHandlePaginationClick("&rsaquo;")}><span className="page-link">&rsaquo;</span></li>
            <li className="page-item" onClick={() => myHandlePaginationClick("&raquo;")}><span className="page-link">&raquo;</span></li>
        </ul>
    )
}

export default PaginationCom
