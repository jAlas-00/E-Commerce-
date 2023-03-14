import React from 'react'
import Carousel from '../../components/Carousel/Carousel'
import Categories from '../../components/Categories/Categories'
import Contact from '../../components/Contact/Contact'
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts'

const Home = () => {

  return (
    <div>
      <Carousel/>
      <FeaturedProducts type={"Featured"}/>
      <Categories />
      <FeaturedProducts type={"Trending"}/>
      <Contact />
    </div>
  )
}

export default Home