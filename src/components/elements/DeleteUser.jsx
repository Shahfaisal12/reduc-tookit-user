import React from 'react'
import { useDispatch } from 'react-redux'
import {clearUsers} from '../../pages/store/slice/UserSlice'

const DeleteUser = () => {

    const dispatch = useDispatch(); 

const clearAllUser = () =>{
    dispatch(clearUsers())
}

    return (
        <div className='DeleteALLUser-Section'>
            <div className="container">
                <div className="delete-btn mt-3 d-flex justify-content-end">
                    <button type='submit' className='btn btn-danger' onClick={clearAllUser}>Clear User</button>
                </div>
            </div>
        </div>
    )
}

export default DeleteUser