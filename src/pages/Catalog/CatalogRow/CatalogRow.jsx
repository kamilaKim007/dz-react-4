import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { CustomContext } from '../../../utils/context'

const CatalogRow = () => {
    const {i, i18n} = useTranslation()

    const {products, size} = useContext(CustomContext)
  return (
    <div className="catalog__row">
      {
      products.data && products.data.filter((item) => {
        return size ? item.sizes.find((el) => el.size === size).inStock : item
      }).map((item) => (
     <div className='catalog__card'>
     <img className='catalog__card-img' src={`../${item.img[0]}`} alt={item.title}/>
            <h3 className='catalog__card-title'>{item.title}</h3>
            <p className='catalog__card-category'>category: {item.category}</p>
            <p className='catalog__card-brand'><span className='catalog__card-brand-b'>Brand:</span> {item.brand}</p>
            <p className='catalog__card-price'>
                  {i18n.language === 'en' ? item.price : item.price * 85}
                  {i18n.language === 'ru' ? 'руб.' : '$'}
            </p>
     </div>
    ))
    }
    </div>
  )
}

export default CatalogRow;