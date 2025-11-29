import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";

import CategoryArr from "../utils/CategoryArr";
import CardCom from "./CardCom";
import LoaderCom from "./LoaderCom";
import fetchData from "../helpers/fetchData";
import { dropDownFn, currentPageFn } from "../redux/slices/pageDetailSlicer";

const NoNews = () => {
  return (
    <div className=" d-flex justify-content-center align-items-center">
      <h4>no news found</h4>
    </div>
  );
};

const NewsSection=()=>{

  const { isLoading, newsApiData } = useSelector((state) => state.data);

  if(isLoading)return <LoaderCom/>

  if(newsApiData && newsApiData.articles && newsApiData.articles.length === 0)return <NoNews/>

  return(
    <>
      {newsApiData && newsApiData.articles && 
        newsApiData.articles.map((news, index) => {
          return (
            <CardCom key={index} currData={news} functionality="save" />
          );
        })}
    </>
  )
}

const CategoryDropdownList=({isDropdown,setIsDropdown})=>{
  const dispatch = useDispatch();

  const handleListClick=(category)=>{
    setIsDropdown(false);
    dispatch(currentPageFn(1));
    dispatch(dropDownFn(category));
  }
  return(
    <ul className={`dropdown-menu ${isDropdown ? "show" : ""}`}>
      {CategoryArr.map((category, index) => {
        return (
          <li key={index}>
            <div
              className="dropdown-item text-capitalize"
              onClick={()=>handleListClick(category)}
            >
              {category}
            </div>
          </li>
        );
      })}
    </ul>
  )
}

CategoryDropdownList.propTypes={
  isDropdown:PropTypes.bool.isRequired,
  setIsDropdown:PropTypes.func.isRequired
}

const CategoryDropdown=()=>{
  const { myCategoryData } = useSelector((state) => state.pageDetails);
  const [isDropdown, setIsDropdown] = useState(false);
  return(
    <div className="dropdown">
      <button
        className={`btn btn-secondary dropdown-toggle text-capitalize ${
          isDropdown ? "show" : ""
        }`}
        type="button"
        onClick={() => setIsDropdown(!isDropdown)}
      >
        {myCategoryData}
      </button>
      <CategoryDropdown 
        isDropdown={isDropdown} 
        setIsDropdown={setIsDropdown}
      />
    </div>
  )
}

const NewsBodyCom = () => {
  const dispatch = useDispatch();
  const { myCurrentPage, myPageSize, myQuarySearching, myCategoryData } =
    useSelector((state) => state.pageDetails);

  useEffect(() => {
    dispatch(
      fetchData({
        page: myCurrentPage,
        pageSize: myPageSize,
        query: myQuarySearching,
        category: myCategoryData,
      })
    );
  }, [myCurrentPage, myPageSize, myQuarySearching, myCategoryData, dispatch]);

  return (
    <section className=" min-vh-100">
      <div className="container">
        <h2 className=" text-capitalize text-black my-4 ">top headlines</h2>

        <div className=" d-flex mb-3">
          <h4 className=" me-3">Categories : </h4>
          <CategoryDropdown/>
        </div>

        <div className="row">
          <NewsSection/>
        </div>
      </div>
    </section>
  );
};

export default NewsBodyCom;
