import { useEffect } from "react";
import PaginationRange from "../helpers/PaginationRange";
import { useDispatch, useSelector } from "react-redux";
import { currentPageFn, totalPageFn } from "../redux/slices/pageDetailSlicer";
import PaginationCom from "./PaginationCom";

const MainNewsPaginationCom = () => {
  const dispatch = useDispatch();
  const { newsApiData } = useSelector((state) => state.data);
  const { myTotalPage, myCurrentPage, myPageSize, mySiblings } = useSelector(
    (state) => state.pageDetails
  );

  // const pageDetails = useSelector((state) => state);
  // console.log(pageDetails)

  useEffect(() => {
    let myresults = newsApiData?.totalResults
      ? Math.ceil(newsApiData.totalResults / myPageSize)
      : 1;
    // console.log(myresults);
    // console.log(newsApiData);
    dispatch(totalPageFn(myresults)); // initially dispatching the first page data when the component mounts
  }, [newsApiData, myPageSize, dispatch]);

  let myArrayRange = PaginationRange(
    myTotalPage,
    myCurrentPage,
    myPageSize,
    mySiblings
  );

  const myHandlePaginationClick = (pageClicked) => {
    if (pageClicked === "&laquo;" || pageClicked === "...") {
      dispatch(currentPageFn(1));
    } else if (pageClicked === "&lsaquo;") {
      if (myCurrentPage !== 1) {
        dispatch(currentPageFn(myCurrentPage - 1));
      }
    } else if (pageClicked === "&rsaquo;") {
      if (myCurrentPage !== myTotalPage) {
        dispatch(currentPageFn(myCurrentPage + 1));
      }
    } else if (pageClicked === "&raquo;" || pageClicked === "...") {
      dispatch(currentPageFn(myTotalPage));
    } else {
      dispatch(currentPageFn(pageClicked));
    }
  };

  return (
    <>
      <PaginationCom
        myCurrentPage={myCurrentPage}
        myArrayRange={myArrayRange}
        myHandlePaginationClick={myHandlePaginationClick}
      />
    </>
  );
};

export default MainNewsPaginationCom;
