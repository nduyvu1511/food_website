import React from 'react'
import Banner from '../components/banner/Banner'
import BannerMiddle from '../components/banner/BannerMiddle'
import BannerLast from '../components/banner/BannerLast'
import Menus from '../components/Menu/Menus'
import BannerContent from '../components/banner/BannerContent'
import FeedBack from '../components/feedback/FeedBack'
import News from '../components/news/News'
import PopularProduct from '../components/product/PopularProduct'
import Recipes from '../components/product/Recipes'

export const HomePage = () => {
    return (
        <section className="overflow-hidden">
            <Banner />
            <Menus />
            <BannerContent />
            <PopularProduct />
            <BannerMiddle />
            <Recipes />
            <FeedBack />
            <BannerLast />
            <News/>
        </section>
    )
}
