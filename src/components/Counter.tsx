import React, { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '@/store/hooks'
import { decrement, increment, fetchCount } from '@/store/slice/counterSlice'
import type { AppStore } from '@/store'


const  Counter =() => {
  const count = useAppSelector(state => state.counter.value)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchCount())
  }, [dispatch])

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}

Counter.loadData = (store: AppStore) => {
  return Promise.all([store.dispatch(fetchCount())])
}

export default Counter