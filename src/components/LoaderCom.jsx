import React from 'react'

const LoaderCom = () => {
    return (
        <section className=' d-flex justify-content-center align-items-center'>
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </section>
    )
}

export default LoaderCom
