import React from 'react'
import Header from '../components/layout/Header'
import Hero from '../components/layout/Hero'
import Categories from '../components/route/categories/Categories'
import BestDeals from '../components/route/bestdeals/BestDeals'

function HomePage() {
  return (
    <div>
        <Header  />
        <div className='bg-gray-100 pb-2'>
        <Hero />
        <Categories />
        <BestDeals />
        </div>
    </div>
  )
}

export default HomePage