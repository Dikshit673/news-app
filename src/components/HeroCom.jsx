import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { quarySearchFunction, currentPageFunction } from '../myRedux/slices/pageDetailSlicer'

const HeroCom = () => {
    const [querySum, setQuerySum] = useState('');

    const dispatch = useDispatch();
    const latestState = useSelector((state) => state.pageDetail);

    // console.log(latestState);

    return (
        <div className="showcase">
            <div className="overlay px-2">
                <h1 className=' text-white text-center text-capitalize fw-bolder mb-3'>viewing news about {latestState.myQuarySearching ? latestState.myQuarySearching : 'all'}</h1>
                <div className='mb-3'>
                    <input type="search" placeholder='search here' name='query-input' id='query' onChange={(e) => setQuerySum(e.target.value)} value={querySum} />
                    <button className='my-btn' onClick={() => {
                        dispatch(currentPageFunction(1));
                        dispatch(quarySearchFunction(String(querySum)));
                    }}>Search</button>
                </div>

            </div>
        </div>
    )
}

export default HeroCom;
