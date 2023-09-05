import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PrivateRoutes from './PrivateRoutes';
import AdminPageView from '../views/AdminPageView';
import EditVideo from '../views/EditVideo';
import AllQuizView from '../views/AllQuizView';
import AllPopQuizView from '../views/AllPopQuizView';
import AllUsersView from '../views/AllUsersView';

function AllRoutes() {
  return (
    <Routes>
        <Route element={<PrivateRoutes/>} >
          <Route path='/' exact element={<AdminPageView />}/>
          <Route path='/editvideo'  element={<EditVideo />}/>
          <Route path='/allquizzes'  element={<AllQuizView />}/>
          <Route path='/allpopquizzes'  element={<AllPopQuizView />}/>
          <Route path='/allusers'  element={<AllUsersView />}/>
        </Route>
     </Routes>
  )
}

export default AllRoutes