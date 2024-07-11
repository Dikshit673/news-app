import React, { useEffect } from 'react'
import PaginationRange from './utilities/Utils'
import { useDispatch, useSelector } from 'react-redux';
import { currentPageFunction, totalPageFunction } from '../myRedux/slices/pageDetailSlicer'
import PaginationCom from './PaginationCom';

const MainNewsPaginationCom = () => {
    const dispatch = useDispatch();
    const apiData = useSelector((state) => state.apiData);
    const pageDetail = useSelector((state) => state.pageDetail);

    // const pageDetails = useSelector((state) => state);
    // console.log(pageDetails)

    useEffect(() => {
        let myresults = (apiData.myNewsApiData?.totalResults ? (Math.ceil(apiData.myNewsApiData.totalResults / pageDetail.myPageSize)) : 1)
        // console.log(myresults);
        // console.log(apiData.myNewsApiData);
        dispatch(totalPageFunction(myresults));  // initially dispatching the first page data when the component mounts
    }, [apiData.myNewsApiData, pageDetail.myPageSize])

    const { myTotalPage, myCurrentPage, myPageSize, mySiblings } = pageDetail;

    let myArrayRange = PaginationRange(myTotalPage, myCurrentPage, myPageSize, mySiblings);

    const myHandlePaginationClick = (pageClicked) => {
        if (pageClicked === "&laquo;" || pageClicked === "...") {
            dispatch(currentPageFunction(1));
        } else if (pageClicked === "&lsaquo;") {
            if (myCurrentPage !== 1) {
                dispatch(currentPageFunction(myCurrentPage - 1))
            }
        } else if (pageClicked === "&rsaquo;") {
            if (myCurrentPage !== myTotalPage) {
                dispatch(currentPageFunction(myCurrentPage + 1))
            }
        } else if (pageClicked === "&raquo;" || pageClicked === "...") {
            dispatch(currentPageFunction(myTotalPage))
        } else {
            dispatch(currentPageFunction(pageClicked))
        }
    }

    return (
        // <ul className="pagination pagination-md justify-content-center mt-4">
        //     <li className="page-item" onClick={() => myHandlePaginationClick("&laquo;")}><span className="page-link">&laquo;</span></li>
        //     <li className="page-item" onClick={() => myHandlePaginationClick("&lsaquo;")}><span className="page-link" >&lsaquo;</span></li>
        //     {myArrayRange.map((currData, ind) => {
        //         return (
        //             <li className={`page-item ${currData === myCurrentPage ? "active" : ""}`} key={ind} onClick={() => myHandlePaginationClick(currData)}><span className="page-link">{currData}</span></li>
        //         )
        //     })}
        //     <li className="page-item" onClick={() => myHandlePaginationClick("&rsaquo;")}><span className="page-link">&rsaquo;</span></li>
        //     <li className="page-item" onClick={() => myHandlePaginationClick("&raquo;")}><span className="page-link">&raquo;</span></li>
        // </ul>
        <>
            <PaginationCom
                myCurrentPage={myCurrentPage}
                myArrayRange={myArrayRange}
                myHandlePaginationClick={myHandlePaginationClick}
            />
        </>
    )
}

export default MainNewsPaginationCom
