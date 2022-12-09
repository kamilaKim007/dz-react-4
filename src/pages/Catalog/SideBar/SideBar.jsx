import React from 'react'

const SideBar = () => {

  const {gender, changeGender} = useContext(second)
  
    return (
      <aside className='sideBar'>
        <div className='sideBar__lang'>
          <p onClick={() => changeGender('woman')} className={`sideBar__lang-item ${gender === 'woman' ? 'active' : ''}`}>Женщины</p>
          <p onClick={() => changeGender('men')} className={`sideBar__lang-item ${gender === 'men' ? 'active' : ''}`}>Мужчины</p>
        </div>
        <ul className='sideBar__menu'>
          {/* <li className='sideBar__menu-item active'>Футболки</li>*/}
          <SideBarItem value={'t-short'} text = 'Футболки'/>
          <SideBarItem value={'sweatshort'} text = 'Кофты'/>
          <SideBarItem value={'pants'} text = 'Штаны'/>
          <SideBarItem value={'shoes'} text = 'Обувь'/>
        </ul>
      </aside>
    )
  }
  
  export default SideBar