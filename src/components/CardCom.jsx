import PropTypes from "prop-types";
import newsPng from "../assets/news.png";
import { useDispatch } from "react-redux";
import { favNewsFn, deleteNewsFn } from "../redux/slices/FavouriteNewsSlicer";

const CardCom = ({ currData, functionality }) => {
  // console.log(currData);
  const dispatch = useDispatch();

  const saveNews = (passingData) => {
    dispatch(favNewsFn(passingData));
  };

  const deleteNews = (passingUrl) => {
    dispatch(deleteNewsFn(passingUrl));
  };

  return (
    <div className="col-12 col-md-6 col-lg-4">
      <div className="card-div position-relative">
        <div className="star-div ">
          <div className="star-indiv">
            {functionality === "save" && (
              <i
                className="fa-regular fa-star"
                onClick={() => saveNews(currData)}
              ></i>
            )}
            {functionality === "delete" && (
              <i
                className="fa-regular fa-trash-can"
                onClick={() => deleteNews(currData.url)}
              ></i>
            )}
          </div>
        </div>

        <a href={currData.url} target="_new">
          <div className="card-image-div">
            <img
              src={currData.urlToImage ? currData.urlToImage : newsPng}
              alt="Image Not Found"
              className="card-div-img"
            />
          </div>
          <div className="card-div-body">
            <h5 className="card-div-heading">
              <span>
                {currData.title ? currData.title.slice(0, 90) : "Not Found"}
                {currData.title && currData.title?.length < 90 ? "" : "..."}
              </span>
            </h5>
            <p className="card-div-para">
              <span>
                {currData.description
                  ? currData.description.slice(0, 150)
                  : "Not Found"}
                {currData.description && currData.description.length < 150
                  ? ""
                  : "..."}
              </span>
            </p>
            <button className="btn btn-primary">Read More...</button>
            <div className=" d-flex flex-column align-items-end pt-2">
              <small className="author-published">
                <span>
                  {currData.author
                    ? currData.source.name
                      ? currData.author === currData.source.name
                        ? currData.author
                        : `${currData.author} | ${currData.source.name}`
                      : currData.author
                    : currData.source.name
                    ? currData.source.name
                    : ""}
                </span>
              </small>
              <small className="author-published">
                <span>{currData.publishedAt}</span>
              </small>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

CardCom.propTypes = {
  currData: PropTypes.object.isRequired,
  functionality: PropTypes.string.isRequired,
};

export default CardCom;
