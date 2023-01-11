import React from 'react'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
import SliderHome from '../components/Sliders/SliderHome'

function HomePage() {
  return (
    <div className='container '>
    <SliderHome />
    <ItemListContainer></ItemListContainer>
      
    </div>
  )
}

export default HomePage
