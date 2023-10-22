import React from 'react'
import HeadingComponent from '../components/UsersHeadingComponent.js'
import '../assets/CSS/allusersStyle.css'
import FrameComponent from '../components/FrameComponent'
import axios from 'axios'
import { useEffect, useState } from 'react'

function AllUsersView() {

const [users, setUsers] = useState([])
useEffect(() => {
  axios.get('http://localhost:5000/getUsers')
  .then(users =>setUsers(users.data))
  .catch(err => console.log(err))
},[])

//   const heading = [
//     {
//       id:"1",
//       name: "Email Address",
//     },
//     {
//       id:"2",
//       name: "Email Address",
//     },
//     {
//       id:"3",
//       name: "Email Address",  
//     },
//     {
//       id:"4",
//       name: "Email Address",  
//     },
//     {
      
//       id:"5",
//       name: "Email Address",
//     }
// ]

  return (
    <FrameComponent>
    <div className=' courseview p-0 container-fluid'>
      <div className='d-flex m-0 flex-row justify-content-center'>
        
        <div className='col-lg-11 col-md-11 col-12 container'>
          <div className='flex-shrink-1 flex-grow-1'>
            <div className='courseHeading mt-3 mb-3 shadow-sm p-3 container rounded-3 justify-content-center'>
              <div>
                <div className='text-center row'>
                  <h5 className='PageHeading'>User Management</h5>
                  <h5 className=''>All Users</h5>
                </div>
              </div>
            </div>
            <table className='table table-hover table-striped table-bordered'>
              <thead className='table-dark'>
                <tr>
                  <th scope='col'>Name</th>
                  <th scope='col'>Email</th>
                  {/* <th scope='col'>Is Admin</th> */}
                </tr>
              </thead>
              <tbody>
                {users.map(user => {
                  return (
                    <tr>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      {/* <td>{user.isVerfied}</td> */}
                    </tr>
                  )
                })}
              </tbody>
            </table>
            {/* {users.map(user => {
              return user.name
            })} */}
            {/* {heading.map((item) =><HeadingComponent type="user" key={item.name} heading={item} /> )} */}
          </div>
        </div>
      </div>
    </div>
    </FrameComponent>
  )
}

export default AllUsersView