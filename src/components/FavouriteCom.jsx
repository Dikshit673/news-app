import React from 'react'
import CardCom from './CardCom'
import { useDispatch, useSelector } from 'react-redux'
import { favPageSizeChangeFunction } from '../myRedux/slices/FavouriteNewsSlicer'

const FavouriteCom = () => {
    const dispatch = useDispatch();
    const favouritesObj = useSelector(state => state.favouriteNewsData)
    const { myFavouriteNews, favCurrentPage, favPageSize } = favouritesObj;

    // make a new array with some element upto page size
    let favNewsArray = myFavouriteNews.filter((currData, ind) => {
        return (ind >= (favCurrentPage - 1) * favPageSize && ind < favCurrentPage * favPageSize)
    })
    // console.log(favNewsArray);
    const newsPageSizeChange = (e) => {
        // console.log(e.target.value);
        dispatch(favPageSizeChangeFunction(e.target.value));
    }

    return (
        <section>
            <div className="container">
                <h1 className=' text-capitalize text-center'>Favourite News</h1>
                <div>
                    <p className=' d-inline-block me-2'>Show news uptp : </p>
                    <select name="" id="" onChange={(e) => newsPageSizeChange(e)}>
                        <option value="6">6</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                    </select>
                </div>
                <div className="row">
                    {favNewsArray.map((currData, ind) => {
                        return (
                            <CardCom
                                key={ind}
                                currData={currData}
                                functionality='delete'
                            />
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default FavouriteCom
