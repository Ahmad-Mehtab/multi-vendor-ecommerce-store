import React from 'react'
import Header from '../components/layout/Header'
import Hero from '../components/layout/Hero'
import Categories from '../components/route/categories/Categories'
import BestDeals from '../components/route/bestdeals/BestDeals'
import FeaturedProduct from '../components/route/FeaturedProduct/FeaturedProduct'
import Events from '../components/Event/Events'
import Sponsored from '../components/Sponsored'
import Footer from '../components/layout/Footer'

function HomePage() {
  return (
    <div>
        <Header  />
        <div className='bg-gray-100'>
        <Hero />
        <Categories />
        <BestDeals />
        <Events />
        <FeaturedProduct />
        <Sponsored />
        <Footer />
        </div>
    </div>
  )
}

export default HomePage