import React from 'react'

const List = ({ infos, setInfos, onClickEditButton }) => {
  const removeEvent = (id) => {
    let newInfos = infos.filter((data) => data.id !== id);
    console.log(infos);
    setInfos(newInfos);
  }
  return (
    infos.map((data, index) => (
      <div className='item' key={data.id} title={data.title} price={data.price}>
        <span>
          {data.title}
        </span>
        <span className='item_price'>
          {parseInt(data.price)}
        </span>
        <button className='edit_btn' onClick={() => onClickEditButton(data.id)}>수정</button>
        <button className='remove_btn' onClick={() => removeEvent(data.id)}>삭제</button>
      </div>
    ))
  )
}

export default List
