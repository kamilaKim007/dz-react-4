import React, { useContext, useEffect } from 'react'
import CategoryTitle from '../../components/Category/CategoryTitle'
import { CustomContext } from '../../utils/context'
import BreadCrumbs from './BreadCrumbs/BreadCrumbs'
import CatalogFilter from './CatalogFilter/CatalogFilter'
import CatalogRow from './CatalogRow/CatalogRow'

const Catalog = () => {

  const {category, getProducts, gender, price} = useContext(CustomContext)
  useEffect(() => {
    getProducts()
  }, [gender, category, price])

  return (
    <section className='catalog'>
        <div className='container'>
            <BreadCrumbs/>
            <div className='catalog__content'>
              
                <div className='catalog__right'>
                    <h2 className='catalog__content-title'>
                      <CategoryTitle/>
                    </h2>
                    <CatalogFilter/>
                    <CatalogRow/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Catalog