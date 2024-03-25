import React from 'react'
import Header from '../components/layout/Header'
import Hero from '../components/route/Hero'
import Categories from '../components/route/categories/Categories'

function HomePage() {
  return (
    <div>
        <Header  />
        <div className='bg-gray-100 pb-2'>
        <Hero />
        <Categories />
        </div>
    </div>
  )
}

export default HomePage