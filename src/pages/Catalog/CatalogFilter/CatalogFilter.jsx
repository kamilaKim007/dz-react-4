import React from 'react'
import SelectBrand from './SelectBrand'
import SelectColor from './SelectColor'
import SelectPrice from './SelectPrice'
import SelectSize from './SelectSize'

const CatalogFilter = () => {
  return (
    <div className='filter'>
      <div className='filter__select'>
        <SelectSize/>
      </div>
      <div className='filter__select'>
        <SelectPrice/>
      </div>
      <div className='filter__select'>
        <SelectColor/>
      </div>
      <div className='filter__select'>
        <SelectBrand/>
      </div>
    </div>
  )
}

export default CatalogFilter