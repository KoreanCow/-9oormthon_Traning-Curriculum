import React, { useState } from 'react';
// import Form from './components/Form';
import './App.css';

function App() {
  // const [edited, setEdited] = useState(false);

  // const [changeTitle, setChangeTitle] = useState('');

  const [title, setTitle] = useState('');
  const [price, setPrice] = useState(0);

  const [infos, setInfos] = useState([
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

    let newInfos = {
      id: Date.now(),
      title: title,
      price: price,
    }
    setInfos([...infos, newInfos]);
    setTitle('');
    setPrice(0);
  }

  const removeEvent = (id) => {
    let newInfos = infos.filter((data) => data.id !== id);
    console.log(infos);
    setInfos(newInfos);
  }

  const removeAll = () => {
    setInfos([]);
  }
  // const onClickEditButton = () => {
    
  //   if(!edited) {
  //     setEdited(true);
  //   } else {
  //     setEdited(false);
  //   }
  // }


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
        {/* <Form 
          title={title} setTitle={setTitle} 
          price={price} setPrice={setPrice} 
          edited={edited} setEdited={setEdited}
          handleSubmit={handleSubmit} 
        /> */}
          <form>
            <input type='text' name='Title' placeholder='예) 렌트비' value={title} onChange={handleTitle}></input>
            <input type='number' name='Price' placeholder='0' value={price} onChange={handlePrice}></input>
            <button type='submit' onClick={handleSubmit}> 제출 </button>
          </form>
          {infos.map((data, index) => (
            <div className='item' key={data.id} title={data.title} price={data.price}>
              <span>
                {data.title}
              </span>
              <span>
                {parseInt(data.price)}원
              </span>
              <button className='edit_btn'>수정</button>
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
