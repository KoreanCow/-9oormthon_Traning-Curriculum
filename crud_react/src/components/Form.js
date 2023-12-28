import React from 'react'
const Form = ({ title, setTitle, price, setPrice, edited, handleSubmit, handleEditSubmit }) => {
  const handleTitle = (e) => {
    setTitle(e.target.value);
  }
  const handlePrice = (e) => {
    setPrice(e.target.value);
  }

  return (
    <div>
      {edited ?
        <form className='inputs'>
          <input type='text' name='Title' placeholder='예) 렌트비' value={title} onChange={handleTitle}></input>
          <input type='number' name='Price' placeholder='0' value={price} onChange={handlePrice}></input>
          <button type='submit' onClick={handleEditSubmit}> {edited ? '수정' : '제출'} </button>
        </form>
        :
        <form className='inputs'>
          <input type='text' name='Title' placeholder='예) 렌트비' value={title} onChange={handleTitle}></input>
          <input type='number' name='Price' placeholder='0' value={price} onChange={handlePrice}></input>
          <button type='submit' onClick={handleSubmit}> 제출 </button>
        </form>

      }
    </div>
  )
}

export default Form
