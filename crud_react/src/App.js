import React, { useState } from 'react';
// import Form from './components/Form';
import './App.css';

function App() {
  const [edited, setEdited] = useState(false);
  const [choicedId, setChoicedId] = useState(0);
  // const [changeTitle, setChangeTitle] = useState('');  // 컴포넌트 세분화 시 사용

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


  const handleEditSubmit = (e) => {
    e.preventDefault();
    // infos.[index].id
    
    let editInfos = {
      id: choicedId,
      title: title,
      price: price,
    }

    console.log(editInfos);
    setInfos(infos.map((info, index) => info.id === editInfos.id? editInfos : info));
    setEdited(false);
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

  const onClickEditButton = (id) => {
    if (!edited) {
      setEdited(true);

      const editInfos = infos.find(info => info.id === id)
      // console.log(id);
      setChoicedId(id);
      setTitle(editInfos.title);
      setPrice(editInfos.price);

    } else {
      setEdited(false);

      setTitle('');
    setPrice(0);
    }
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

          {edited ?
            <form>
              <input type='text' name='Title' placeholder='예) 렌트비' value={title} onChange={handleTitle}></input>
              <input type='number' name='Price' placeholder='0' value={price} onChange={handlePrice}></input>
              <button type='submit' onClick={handleEditSubmit}> {edited ? '수정' : '제출'} </button>
            </form>
            :
            <form>
              <input type='text' name='Title' placeholder='예) 렌트비' value={title} onChange={handleTitle}></input>
              <input type='number' name='Price' placeholder='0' value={price} onChange={handlePrice}></input>
              <button type='submit' onClick={handleSubmit}> 제출 </button>
            </form>

          }
          {infos.map((data, index) => (
            <div className='item' key={data.id} title={data.title} price={data.price}>
              <span>
                {data.title}
              </span>
              <span>
                {parseInt(data.price)}원
              </span>
              <button className='edit_btn' onClick={() => onClickEditButton(data.id)}>수정</button>
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
