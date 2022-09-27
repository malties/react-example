import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './counterSlice'

export function Counter() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <div>
            <div>
                <button
                aria-label="increment value"
                onClick={()=> dispatch(increment())}
                >
                    increment
                </button>
                <span>{count}</span>
                <button aria-label="Decrement value"
                onClick={()=> dispatch(decrement())}
                >
                    Decrement
                </button>
            </div>
        </div>
    )
}

export default Counter;