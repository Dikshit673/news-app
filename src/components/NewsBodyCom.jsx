import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import CategoryArr from "./utilities/CategoryArr";
import CardCom from './CardCom';
import LoaderCom from './LoaderCom';
import fetchData from '../myRedux/functions/fetchData';
import { dropDownFunction, currentPageFunction } from '../myRedux/slices/pageDetailSlicer'

const NewsBodyCom = () => {
    const [isDropdown, setIsDropdown] = useState(false)

    const dispatch = useDispatch();
    const apiData = useSelector((state) => state.apiData);
    const pageDetail = useSelector((state) => state.pageDetail);
    // console.log(apiData, pageDetail);

    useEffect(() => {
        dispatch(fetchData({ page: pageDetail.myCurrentPage, pageSize: pageDetail.myPageSize, query: pageDetail.myQuarySearching, category: pageDetail.myCategoryData }));
    }, [pageDetail.myCurrentPage, pageDetail.myPageSize, pageDetail.myQuarySearching, pageDetail.myCategoryData])


    return (
        <section className=' min-vh-100'>
            <div className="container">
                <h2 className=' text-capitalize text-black my-4 '>top headlines</h2>

                <div className=' d-flex mb-3'>
                    <h4 className=' me-3'>Categories : </h4>
                    <div className="dropdown">
                        <button className={`btn btn-secondary dropdown-toggle text-capitalize ${isDropdown ? "show" : ""}`} type="button" onClick={() => setIsDropdown(!isDropdown)} >
                            {pageDetail.myCategoryData}
                        </button>
                        <ul className={`dropdown-menu ${isDropdown ? "show" : ""}`} >
                            {CategoryArr.map((currVal, ind) => {
                                return (
                                    <li key={ind}>
                                        <div className="dropdown-item text-capitalize" onClick={() => {
                                            setIsDropdown(false)
                                            dispatch(currentPageFunction(1));
                                            dispatch(dropDownFunction(currVal))
                                        }}>
                                            {currVal}
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>

                <div className="row">
                    {apiData.isLoading ? <LoaderCom /> : (
                        (apiData.myNewsApiData?.articles?.length) ? (apiData.myNewsApiData.articles.map((currData, ind) => {
                            return (
                                <CardCom
                                    key={ind}
                                    currData={currData}
                                    functionality='save'
                                />
                            )
                        })) :
                            <div className=' text-center text-capitalize'>There is no News Today</div>
                    )}

                </div>
            </div>
        </section>
    )
}

export default NewsBodyCom
