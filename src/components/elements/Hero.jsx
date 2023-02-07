
import React from 'react'
import DeleteUser from './DeleteUser'
import { fakeUserData } from '../utils/api'
import { useDispatch } from 'react-redux'
import { addUser } from '../../pages/store/slice/UserSlice'
import DisplayUsers from './DisplayUsers'

const Hero = () => {

  const dispatch = useDispatch();

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
      </div>
    </div>
  )
}

export default Hero