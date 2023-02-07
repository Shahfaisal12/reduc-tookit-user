import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { MdDeleteSweep } from 'react-icons/md'
import { removeUser } from '../../pages/store/slice/UserSlice'

const DisplayUsers = () => {

  const dispatch = useDispatch();

  const data = useSelector((state) => {
    return state.users;
  })
  console.log('display data', data)


  const removeCurrentUser = (id) => {
    dispatch(removeUser(id));
  }

  return (
    <div className='DisplayUser-section'>
      {
        data.map((currentUser, id) => {
          return <li key={id} className='border-bottom list-unstyled d-flex justify-content-between align-items-center py-2'>{currentUser}
            <button type="button" className="btn btn-link" onClick={() => removeCurrentUser(id)} ><MdDeleteSweep className='fs-4 text-danger' /></button>
          </li>
        })
      }
    </div>
  )
}

export default DisplayUsers