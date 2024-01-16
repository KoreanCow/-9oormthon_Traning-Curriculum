import React, { useEffect, useState } from 'react'
// eslint-disable-next-line no-unused-vars
import { productCategory, testProducts } from './testProducts';
import './TestingComponent.scss'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addToCart } from '../reducer/actions';

const TestingComponent = () => {

  const dispatch = useDispatch();

  const [products, setProducts] = useState([]);
  const [nowCategory, setNowCategory] = useState('All');

  const selectCategory = (category) => {
    setNowCategory(category);
  }

  const cartHandler = (product) => {
    dispatch(addToCart(product));
    console.log('추가 되었습니다!')
  }

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        // setProducts(testProducts);
        console.log(response.data);

        setProducts(response.data);
      } catch (error) {
        console.error('Error: ', error);
      }
    };

    fetchProducts();
  }, []);
  return (
    <div className='base'>
      <span style={{ fontSize: '30px', fontWeight: '600', width: '100%', display: 'flex', justifyContent: 'center' }}>Products</span>
      <div className='categories'>
        {productCategory.map((category) => (
          <button
            key={category.id}
            className={`category ${nowCategory === category.category ? 'active' : ''}`}
            onClick={() => selectCategory(category.category)}
          >
            {category.category_kr}
          </button>
        ))}
      </div>
      <Products
        products={products}
        nowCategory={nowCategory}
        cartHandler={cartHandler}
      />
    </div>
  )
}

const Products = ({ products, nowCategory, cartHandler }) => {
  const filteredProducts = nowCategory === 'All'
    ? products
    : products.filter(product => product.category === nowCategory);

  return (
    <>
      <div className='productCount'>Showing: {filteredProducts.length} items</div>
      <div className='productContainer'>
        {filteredProducts.map(product => (
          <div className='product' key={product.id}>
            <img className='productImage' src={product.image} alt='productImage' />
            <p className='productTitle'>{product.title}</p>
            <div className='add_price'>
              <button
                className='addCart'
                onClick={() => cartHandler(product)}
              >장바구니에 담기</button>
              <p style={{ fontSize: '13px', fontWeight: '700' }}>${product.price}</p>
            </div>
          </div>
        ))}
      </div>

    </>
  );
};

export default TestingComponent
