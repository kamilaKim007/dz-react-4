import React from 'react'
import Footerimg from "../.."

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
      <div className="footer__lines"></div>
          <h2 className='footer__h2' >Будьте в курсе событий</h2>
          <div className="footer__search">
            <input className='footer__inp' type="text" />
            <a className='footer__a' href="#">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 9H13.5M13.5 9L11 6M13.5 9L11 12" stroke="#E64926"/>
<rect x="0.5" y="0.5" width="17" height="17" stroke="#E64926"/>
</svg>

            </a>
          </div>
          <div className="footer__inf">
            <a className='footer__inf-a' href="">О нас</a>
            <a className='footer__inf-a' href="">Распространенные вопросы</a>
            <a className='footer__inf-a' href="">Бренды</a>
          </div>
          <div className="footer__line"></div>
          <div className="footer__information">
            <p className='footer__protection'>Все права защищены  © 2020 Allegria.com</p>
            <p className='footer__author'>Дизайн и разработка:</p>
          </div>
      </div>
    </footer>
  )
}

export default Footer