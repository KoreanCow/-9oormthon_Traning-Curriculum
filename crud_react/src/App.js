import React, { useState } from 'react';
import './App.css';

function App() {

  const [title, setTitle] = useState('');
  const [price, setPrice] = useState(0);

  const [titlePrice, setTitlePrice] = useState([
    {
      id: '1',
      title: '식비',
      price: 1200,
    },
    {
      id: '2',
      title: '택시비',
      price: 10000,
    },
  ]);

  const handleTitle = (e) => {
    setTitle(e.target.value);
  }
  const handlePrice = (e) => {
    setPrice(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    let newTitlePrice = {
      id: Date.now(),
      title: title,
      price: price,
    }
    setTitlePrice([...titlePrice, newTitlePrice]);
    setTitle('');
    setPrice(0);
  }

  const removeEvent = (id) => {
    let newTitlePrice = titlePrice.filter((data) => data.id !== id);
    console.log(titlePrice);
    setTitlePrice(newTitlePrice);
  }

  const removeAll = () => {
    setTitlePrice([]);
  }
  return (
    <div>
      <div className='header'>
        예산 계산기
      </div>
      <div className='main_container'>
        <div>   {/* 지출항목 비용 텍스트 */}
          <span>지출 항목</span>
          <span>비용</span>
        </div>
        <div>    {/* 지출항목 비용 인풋 */}
          <form>
            <input type='text' name='Title' placeholder='예) 렌트비' value={title} onChange={handleTitle}></input>
            <input type='number' name='Price' placeholder='0' value={price} onChange={handlePrice}></input>
            <button type='submit' onClick={handleSubmit}> 제출 </button>
          </form>
          {titlePrice.map((data, index) => (
            <div className='item' key={data.id} title={data.title} price={data.price}>
              <span>
                {data.title}
              </span>
              <span>
                {parseInt(data.price)}원
              </span>
              <button className='edit_btn' >수정</button>
              <button className='remove_btn' onClick={() => removeEvent(data.id)}>삭제</button>
            </div>
          ))}
          <button onClick={removeAll}> 목록 지우기 </button>
        </div>
      </div>
    </div>
  );
}

export default App;
