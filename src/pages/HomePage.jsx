import React from 'react'
import HeroCom from '../components/HeroCom'
import NewsBodyCom from '../components/NewsBodyCom'
// import PaginationCom from '../components/PaginationCom'
import MainNewsPaginationCom from '../components/MainNewsPaginationCom'

const HomePage = () => {
    return (
        <>
            <HeroCom />
            <NewsBodyCom />
            <MainNewsPaginationCom />
        </>
    )
}

export default HomePage
