
import React, { useState } from 'react'
import DeleteUser from './DeleteUser'
import { fakeUserData } from '../utils/api'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../../pages/store/slice/UserSlice'
import DisplayUsers from './DisplayUsers'
import { increment, decrement, reset, incrementByAmount } from '../../pages/store/slice/Counterslice'

const Hero = () => {

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

  const addNewUser = (name) => {
    console.log("hero add user", name);
    dispatch(addUser(name));

  };

  const numberArr = [12, 35, 89, 1];

  // Highest Number: 89
  const highest = Math.max(...numberArr);

  // get lowest number 1
  const lowest = Math.min(...numberArr);

  console.log("Highest Number: " + highest);

  console.log("Lowest Number: " + lowest);

  return (
    <div className="Hero-Section py-5">
      <div className='container'>
        <div className="row">
          <div className="admin-table d-flex justify-content-between align-items-center">
            <div className="sub-title fs-1">List Of User Details</div>
            <button type='submit' className='btn btn-outline-primary' onClick={() => addNewUser(fakeUserData())}>Add new user</button>
          </div>
          <div className="list-of-users mt-5">

            <ul>
              <DisplayUsers />
            </ul>
          </div>
          <hr />
          <DeleteUser />
        </div>

        <div className="row mt-5">
          <div className="counter-section text-center">
            <h1>Counter section</h1>
            <div class="btn-group btn-group-lg mt-4" role="group" aria-label="...">
              <button type="button" className='btn btn-outline-danger' onClick={() => dispatch(decrement())}>-</button>
              <button type="button" className='btn btn-outline-primary'>{count}</button>
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

export default Hero