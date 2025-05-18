import React from 'react'
// components
import DateSelection from './DateSelection'
import HoursSelection from './HoursSelection'
import LocationSelection from './LocationSelection'
const SearchMobile = () => {
  return (
    <div className='xl:hidden font-medium'>
      <div className='container mx-auto'>
    <div className='flex flex-col gap-y-4'>
      {/* location selection */}
      <LocationSelection />
      {/* date selection */}
      <DateSelection />
      {/* hours selection */}
      <HoursSelection />
      {/* btn */}
      <div className='flex items-center px-6'>
        <button className='btn btn-sm btn-accent mx-auto w-[164px]  '>Search</button>
      </div>
    </div>
      </div>
    </div>
  )
}

export default SearchMobile