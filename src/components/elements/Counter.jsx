import { increment, decrement, reset, incrementByAmount } from '../../pages/store/slice/Counterslice'
import { useDispatch, useSelector } from 'react-redux'
import React, { useState } from 'react'

const Counter = () => {
    
  const [incrementAmount, setIncrementAmount] = useState(0);

  const dispatch = useDispatch();

  const addvalue = Number(incrementAmount) || 0;

  const resetAll = () => {
    setIncrementAmount(0);
    dispatch(reset());
  }

  const count = useSelector((state) => 
    state.counter.count
  )


  return (
    <div className='Counter-section py-5'>
    <div className="container">
    <div className="row">
    <div className="counter-section text-center">
      <h1>Counter section</h1>
      <div class="btn-group btn-group-lg mt-4" role="group" aria-label="...">
        <button type="button" className='btn btn-outline-danger' onClick={() => dispatch(decrement())}>-</button>
        <button type="button" className='btn btn-outline-white text-white'>{count}</button>
        <button type="button" className='btn btn-outline-success' onClick={() => dispatch(increment())}>+</button>
      </div>

      <div className="rest-section mt-4 ">
      <input type="text" value={incrementAmount} className='' onChange={(e)=>setIncrementAmount(e.target.value)} />
      <div className="btn-dev mt-4">
      <button type="button" className='btn btn-outline-success mx-3'  onClick={() => dispatch(incrementByAmount(addvalue))}>AddAmount</button>
      <button type="button" className='btn btn-outline-success' onClick={resetAll}>Reset</button>
      </div>
      </div>
    </div>
  </div>
    </div>
    </div>
  )
}

export default Counter