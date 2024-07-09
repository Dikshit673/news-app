import React, { useEffect, useState } from "react";
import PaginationCom from "./PaginationCom";
import PaginationRange from "./utilities/Utils";
import { useDispatch, useSelector } from "react-redux";
import { favTotalPageCalculFunction, favCurrentPageFunction } from '../myRedux/slices/FavouriteNewsSlicer';

const FavNewsPaginationCom = () => {
  // const [myPageSize, setMyPageSize] = useState(6);
  const [myArrayRange, setMyArrayRange] = useState([]);
  // const [myCurrentPage, setMyCurrentPage] = useState(1);

  const dispatch = useDispatch();
  const favNewsObj = useSelector(
    (state) => state.favouriteNewsData
  );

  // const favNewsObj1 = useSelector(
  //   (state) => state
  // );

  // console.log(favNewsObj1);

  const { myFavouriteNews, favTotalPage, favCurrentPage, favPageSize, favSiblings } = favNewsObj
  // console.log(myArrayRange);
  // console.log(favTotalPage, favCurrentPage, favPageSize, favSiblings);

  useEffect(() => {
    let myresults = (myFavouriteNews?.length ? (Math.ceil(myFavouriteNews?.length / favPageSize)) : 1)
    dispatch(favTotalPageCalculFunction(myresults))
  }, [myFavouriteNews, favPageSize]);

  useEffect(() => {
    let paginationArray = PaginationRange(favTotalPage, favCurrentPage, favPageSize, favSiblings);
    // console.log(paginationArray);
    setMyArrayRange(paginationArray);
  }, [favTotalPage, favCurrentPage, favPageSize, favSiblings])

  // let paginationArray = PaginationRange(favTotalPage, favCurrentPage, favPageSize, favSiblings);

  const myHandlePaginationClick = (pageClicked) => {
    if (pageClicked === "&laquo;" || pageClicked === "...") {
      dispatch(favCurrentPageFunction(1));
    } else if (pageClicked === "&lsaquo;") {
      if (favCurrentPage !== 1) {
        dispatch(favCurrentPageFunction(favCurrentPage - 1))
      }
    } else if (pageClicked === "&rsaquo;") {
      if (favCurrentPage !== myTotalPage) {
        dispatch(favCurrentPageFunction(favCurrentPage + 1))
      }
    } else if (pageClicked === "&raquo;" || pageClicked === "...") {
      dispatch(favCurrentPageFunction(favTotalPage))
    } else {
      dispatch(favCurrentPageFunction(pageClicked))
    }
  }

  return (
    <>
      <PaginationCom
        myCurrentPage={favCurrentPage}
        myArrayRange={myArrayRange}
        myHandlePaginationClick={myHandlePaginationClick}
      />
    </>
  );
};

export default FavNewsPaginationCom;
