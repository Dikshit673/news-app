import { useEffect, useState } from "react";
import PaginationCom from "./PaginationCom";
import PaginationRange from "../helpers/PaginationRange";
import { useDispatch, useSelector } from "react-redux";
import {
  favTotalPageFn,
  favCurrentPageFn,
} from "../redux/slices/FavouriteNewsSlicer";

const FavNewsPaginationCom = () => {
  const dispatch = useDispatch();
  const [myArrayRange, setMyArrayRange] = useState([]);

  const {
    favNewsApiArray,
    favTotalPage,
    favCurrentPage,
    favPageSize,
    favSiblings,
  } = useSelector((state) => state.favPageDetails);

  // console.log(myArrayRange);
  // console.log(favTotalPage, favCurrentPage, favPageSize, favSiblings);

  useEffect(() => {
    let myresults = favNewsApiArray?.length
      ? Math.ceil(favNewsApiArray?.length / favPageSize)
      : 1;
    dispatch(favTotalPageFn(myresults));
  }, [favNewsApiArray, favPageSize, dispatch]);

  useEffect(() => {
    let paginationArray = PaginationRange(
      favTotalPage,
      favCurrentPage,
      favPageSize,
      favSiblings
    );
    // console.log(paginationArray);
    setMyArrayRange(paginationArray);
  }, [favTotalPage, favCurrentPage, favPageSize, favSiblings]);

  // let paginationArray = PaginationRange(favTotalPage, favCurrentPage, favPageSize, favSiblings);

  const handlePaginationClick = (pageClicked) => {
    if(pageClicked === "...") return
    if (pageClicked === "&laquo;") {
      dispatch(favCurrentPageFn(1));
    }else if (pageClicked === "&raquo;") {
      dispatch(favCurrentPageFn(favTotalPage));
    } else if (pageClicked === "&lsaquo;") {
      if (favCurrentPage !== 1) {
        dispatch(favCurrentPageFn(favCurrentPage - 1));
      }
    } else if (pageClicked === "&rsaquo;") {
      if (favCurrentPage !== favTotalPage) {
        dispatch(favCurrentPageFn(favCurrentPage + 1));
      }
    }  else {
      dispatch(favCurrentPageFn(pageClicked));
    }
  };

  return (
    <>
      <PaginationCom
        myCurrentPage={favCurrentPage}
        myArrayRange={myArrayRange}
        myHandlePaginationClick={()=>handlePaginationClick(favCurrentPage)}
      />
    </>
  );
};

export default FavNewsPaginationCom;
