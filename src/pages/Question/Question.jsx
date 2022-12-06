// import React from 'react'

// const Question = () => {
//   return (
//     <div className='question'>
//         <div className='questions__accordion'>
//                 <div className={`questions__accordion-quest ${status ? 'questions__accordion-quest_active' : '' }`}>
//                   <p>Вопрос от покупателя</p>
//                   <div className='question__accordion-arrow'>
//                     {
//                       status 
//                       ? <span onClick={() => setStatus(false)} className='questions__accordion-close'>
//                     <svg width="10" height="2" viewBox="0 0 10 2" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path d="M0 1L10 1" stroke="#0F303F"/>
//                     </svg>
//                   </span>
//                   : <span onClick={()=> setStatus(true)} className='questions__accordion-open'>
//                     <svg width="10" height="2" viewBox="0 0 10 2" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path d="M0 1L10 1" stroke="#E64926"/>
//                     </svg>
//                   </span>
//                     }
                  
//                   </div>
//                 </div>
//                 <div className= {`questions__accordion-answers ${status ? 'questions__accordion-answers_active' : ''}`}>
//                 Оплата осуществляется наличными денежными средствами курьеру непосредственно при доставке 
//                 заказа на адрес получателя. Выбрав данный способ оплаты, Вы получаете возможность рассмотреть и 
//                 примерить заказанный товар.
//                 Если какая-то позиция Вам не подошла, 
//                 Вы можете просто вернуть ее курьеру, не оплачивая.
//                </div>
//               </div>
//     </div>
//   )
// }

// export default Question