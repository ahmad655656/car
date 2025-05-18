import React from 'react'
import Brands from './Brands'
import CarSlider from './CarSlider'

const Cars = () => {
  return (
    <section id='cars' className='flex pt-16 items-center pb-16 min-h-screen '>
      <div className='container mx-auto'>
        <Brands />
        <CarSlider />
      </div>
    </section>
  )
}

export default Cars