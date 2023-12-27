// import React from 'react'

// export default function List({ TitlePrice, setTitlePrice }) {

//   const removeEvent = (id) => {
//     let newTitlePrice = TitlePrice.filter((data) => data.id !== id);
//     console.log(TitlePrice);
//     setTitlePrice(newTitlePrice);
//   }


//   return (
//     <div>
//       {TitlePrice.map((data, index) => (
//         <div className='item' key={data.id} title={data.title} price={data.price}>
//           <span>
//             {data.title}
//           </span>
//           <span>
//             {parseInt(data.price)}원
//           </span>
//           <button className='edit_btn' >수정</button>
//           <button className='remove_btn' onClick={() => removeEvent(data.id)}>삭제</button>
//         </div>
//       ))}
//     </div>
//   )


// }

