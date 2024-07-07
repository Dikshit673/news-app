import React from 'react'
import CategoryArr from './utilities/CategoryArr'
import { useDispatch } from 'react-redux'
import { footerCategoryFunction } from "../myRedux/slices/pageDetailSlicer"

const FooterCom = () => {
    const dispatch = useDispatch();
    return (
        <section className='footer-section'>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-5 mb-3">
                        <h2>react-news app</h2>
                        <small>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum perferendis incidunt iusto optio voluptas? Aperiam quam quos mollitia repudiandae corrupti fuga quae tempora! </small>
                        <div className=' d-flex align-items-center'>
                            <p className=' m-0 me-2 fw-bold'>contact : </p>
                            <small>+1 0123 456 7890</small>
                        </div>
                        <div className=' d-flex align-items-center'>
                            <p className=' m-0 me-2 fw-bold'>email : </p>
                            <small>react-news@gmail.com</small>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 mb-3">
                        <h3>Category</h3>
                        <div className='category-div d-flex flex-wrap'>
                            {CategoryArr.map((value, ind) => {
                                return (
                                    <small className=' m-1 text-capitalize' onClick={() => {
                                        dispatch(footerCategoryFunction(value));
                                        window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
                                    }} key={ind}>{value}</small>
                                )
                            })}
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 mb-3">
                        <h3>Newsletter</h3>
                        <div>
                            <input type="text" placeholder='Email' />
                            <button className='btn-primary'>Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FooterCom
