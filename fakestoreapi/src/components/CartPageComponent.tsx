import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './CartPageComponent.scss';
import { removeToCart, updateItemCount } from '../reducer/actions';
import { Link } from 'react-router-dom';
import { Product } from './testProducts';

const CartPageComponent = () => {
  const [sum, setSum] = useState(0);

  const dispatch = useDispatch();
  const cartList = useSelector((state: any) => state.cart.cartList);

  useEffect(() => {
    let totalSum = 0;
    cartList.forEach((product: Product) => {
      const count = product.rating?.count || 0; // 기존 코드에서 수정
      if (count >= 2) {
        totalSum += product.price * count;
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
    // rating이라는 속성이 없는 경우를 대비하여 rating을 명시적으로 전달
    // dispatch(updateItemCount({ ...item, rating: item.rating || { rate: 0, count: 0 } }, actionType));
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
                <div>{item.price} x {item.rating?.count || 0} = $ {item.price * (item.rating?.count || 0)}</div>

              </div>
              <div className='product_Count'>
                <button
                  onClick={() => countHandler('DECREMENT', item)}
                  disabled={!item.rating || item.rating.count === 0}
                >
                  -
                </button>
                <input disabled type='number' value={item.rating?.count || 0} />
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
