import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './CartPageComponent.scss';
import { removeToCart, updateItemCount } from '../reducer/actions';
import { Link } from 'react-router-dom';
import { Product } from './testProducts'; // 해당 경로를 실제 경로로 바꿔주세요

const CartPageComponent = () => {
  const [sum, setSum] = useState(0);

  const dispatch = useDispatch();
  const cartList = useSelector((state: any) => state.cart.cartList);

  useEffect(() => {
    let totalSum = 0;
    cartList.forEach((product: Product) => {
      if (product.rating.count >= 2) {
        totalSum += product.price * product.rating.count;
      } else {
        totalSum += product.price;
      }
    });

    setSum(totalSum);
  }, [cartList]);

  const removeList = (item: Product) => {
    dispatch(removeToCart(item));
  };

  const countHandler = (actionType: string, item: Product) => {
    dispatch(updateItemCount(item, actionType));
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
      {cartList && cartList.length > 0 ? (
        <>
          <p style={{ width: '100%', textAlign: 'center', fontSize: '25px', fontWeight: 900 }}> 장바구니 </p>
          {cartList.map((item: Product, index: React.Key | null | undefined) => (
            <div key={index} className='list'>
              <img className='product_Image' src={item.image} alt='productImage' />
              <div className='product_Summary'>
                <div style={{ fontSize: '14px', fontWeight: 600, color: 'lightgray' }}>{item.category}</div>
                <div style={{ fontSize: '16px', fontWeight: 700 }}>{item.title}</div>
                <div>{item.price} x {item.rating.count} = $ {item.price * item.rating.count}</div>
              </div>
              <div className='product_Count'>
                <button
                  onClick={() => countHandler('DECREMENT', item)}
                  disabled={item.rating.count === 0}
                >
                  -
                </button>
                <input disabled type='number' value={item.rating.count} />
                <button onClick={() => countHandler('INCREMENT', item)}>
                  +
                </button>
              </div>
              <p onClick={() => removeList(item)}>remove</p>
            </div>
          ))}
          <div>
            <div>합계: $ {sum}</div>
            <button>계산하기</button>
          </div>
        </>
      ) : (
        <>
          <div> Cart가 비었습니다
            <br />
            <Link to='/'> 카트 추가하러 가기!</Link>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPageComponent;
