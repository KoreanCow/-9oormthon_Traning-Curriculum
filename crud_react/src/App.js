import React, { useState } from 'react';
// import Form from './components/Form';
import './App.css';
import Form from './components/Form';
import List from './components/List';

function App() {
  const [edited, setEdited] = useState(false);
  const [choicedId, setChoicedId] = useState(0);

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

    let editInfos = {
      id: choicedId,
      title: title,
      price: price,
    }
    console.log(editInfos);
    setInfos(infos.map((info, index) => info.id === editInfos.id ? editInfos : info));
    setEdited(false);
    setTitle('');
    setPrice(0);
  }

  const removeAll = () => {
    setInfos([]);
  }

  const sum = (data) => {
    let sum = 0;
    for (let i = 0; i < data.length; i++) {
      sum += parseInt(data[i].price);
    }
    return sum;
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
    <div className='main'>
      <div className='header'>
        예산 계산기
      </div>
      <div className='calc_page'>
        <div className='calc_comment'>   {/* 지출항목 비용 텍스트 */}
          <span>지출 항목</span>
          <span>비용</span>
        </div>
        <div>    {/* 지출항목 비용 인풋 */}
          <Form
            title={title} setTitle={setTitle}
            price={price} setPrice={setPrice}
            edited={edited}
            handleSubmit={handleSubmit} handleEditSubmit={handleEditSubmit}
          />
          <div className='lists'>
            <List
              infos={infos} setInfos={setInfos}
              onClickEditButton={onClickEditButton}
            />
          </div>
          <button className='remove_all' onClick={removeAll}> 목록 지우기 </button>
        </div>
      </div>
      <span className='sum'>
        총 지출 {sum(infos)} 원
      </span>
    </div>
  );
}

export default App;
