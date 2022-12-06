import React from 'react'
import { PopularDataQuest } from '../../data/PopularData'
import PopularLi from './PopularLi/PopularLi'

const PopularQuestion = () => {

  return (
    <section className='popularq'>
        <div className='container'>
            <div className='popularq__header'>
                <p className='popularq__header-main'>Главная</p>
                <p className='popularq__header-aftermain'>Популярные вопросы</p>
            </div>
            <h2 className='popularq__title'>Популярные вопросы</h2>
            <div className='popularq__content'>
                <div className='popularq__content-purchaces'>
                    <h3 className='popularq__content-purchaces-title'>ПОКУПКИ</h3>
                    <ul className='popularq__content-purchaces-accordion'>
                    {
                        PopularDataQuest.map((item) => (
                            <PopularLi item={item}/>
                        ))
                    }
                    </ul>
                    <h3 className='popularq__content-purchaces-title'>ВОЗВРАТ И ОБМЕН</h3>
                    <ul className='popularq__content-purchaces-accordion'>
                        {
                            PopularDataQuest.map((item) => (
                                <PopularLi item={item}/>
                            ))
                        }
                    </ul>
                </div>
                <div className='popularq__content-block'>
                    <h3 className='popularq__content-block-title'>
                    Есть вопросы<br/>
                    или предложения?<br/>
                    НАПИШИТЕ НАМ
                    </h3>
                    <form action="">
                        <input className='popularq__content-block-input' type="text" placeholder='Имя' required/>
                        <input className='popularq__content-block-input' type="text" placeholder='E-mail'/>
                        <br/>
                        <label className='popularQue__content-block-label'>Что вас интересует:</label>
                        <select className='popularQue__content-block-label-select' name="" id="">
                            <option value="Вопрос">Вопрос</option>
                        </select>
                        <textarea className='popularq__content-block-textArea' cols="32" rows="5" placeholder='Текстовое собщение' required></textarea>
                        <button className='popularq__content-block-btn' type="submit">Отправить</button>
                    </form>
                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default PopularQuestion