import { useEffect } from "react";
import CardCom from "./CardCom";
import { useDispatch, useSelector } from "react-redux";
import { favPageSizeChangeFn } from "../redux/slices/FavouriteNewsSlicer";

const FavouriteCom = () => {
  const dispatch = useDispatch();
  const { favNewsApiArray, favCurrentPage, favPageSize } = useSelector(
    (state) => state.favPageDetails
  );

  // make a new array with some element upto page size
  let favNewsArray = favNewsApiArray?.filter((currData, ind) => {
    return (
      ind >= (favCurrentPage - 1) * favPageSize &&
      ind < favCurrentPage * favPageSize
    );
  });

  const newsPageSizeChange = (e) => {
    // console.log(e.target.value);
    dispatch(favPageSizeChangeFn(e.target.value));
  };

  useEffect(() => {
    let newsData = JSON.stringify(favNewsApiArray);
    localStorage.setItem("favouriteNews", newsData);
  }, [favNewsApiArray]);

  return (
    <section>
      <div className="container">
        <h1 className=" text-capitalize text-center">Favourite News</h1>
        <div>
          <p className=" d-inline-block me-2">Show news uptp : </p>
          <select name="" id="" onChange={(e) => newsPageSizeChange(e)}>
            <option value="6">6</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
        </div>
        <div className="row">
          {favNewsArray?.map((currData, ind) => {
            return (
              <CardCom key={ind} currData={currData} functionality="delete" />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FavouriteCom;
