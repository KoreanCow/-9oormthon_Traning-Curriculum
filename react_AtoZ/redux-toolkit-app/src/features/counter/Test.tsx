import React, { useEffect } from 'react'
import { useAppDispatch } from '../../app/hooks'
import { fetchUsersAsync, incrementAsync } from './counterSlice';

const Test = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const promise = dispatch(fetchUsersAsync())
    return () => {
      // clear up 
      promise.abort();
    }
  }, [])

  return (
    <div>
      Test
    </div>
  )
}

export default Test
