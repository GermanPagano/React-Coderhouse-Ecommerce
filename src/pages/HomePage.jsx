import React from 'react'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
import SliderHome from '../components/Sliders/SliderHome'

function HomePage() {
  return (
    <div className='container '>
    <SliderHome />
    <div className='col bg-dark fs-4 mt-5 text-center p-4' style={{lineHeight:'30px'}}>
    <p> 🤷‍♂️Why this site?</p>
    <p>This is an ecommerce built with react.js to practice my knowledge.</p>
    <p>If you are here enjoy it, as I enjoyed building it 😛</p>
    </div>
    <div className='col mt-5 p-1 text-center' style={{color:'rgb(104, 104, 104)', textDecoration:'underline'}}>
    <h4>All products</h4>
    </div>
    <ItemListContainer></ItemListContainer>
    </div>
  )
}

export default HomePage
