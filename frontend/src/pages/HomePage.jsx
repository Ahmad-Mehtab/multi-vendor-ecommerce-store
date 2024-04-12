import React from 'react'
import Hero from '../components/layout/Hero'
import Categories from '../components/route/categories/Categories'
import BestDeals from '../components/route/bestdeals/BestDeals'
import FeaturedProduct from '../components/route/FeaturedProduct/FeaturedProduct'
import Events from '../components/Event/Events'
import Sponsored from '../components/Sponsored'

function HomePage() {
  return (
    <div>
        <div className='bg-gray-100'>
        <Hero />
        <Categories />
        <BestDeals />
        <Events />
        <FeaturedProduct />
        <Sponsored />
        </div>
    </div>
  )
}

export default HomePage