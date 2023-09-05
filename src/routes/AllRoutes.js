import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PrivateRoutes from './PrivateRoutes';
import AdminPageView from '../views/AdminPageView';
import EditVideo from '../views/EditVideo';
import AllQuizView from '../views/AllQuizView'


function AllRoutes() {
  return (
    <Routes>
        <Route element={<PrivateRoutes/>} >
          <Route path='/editvideo'  element={<EditVideo />}/>
          <Route path='/' exact element={<AdminPageView />}/>
          <Route path='/allquizzes'  element={<AllQuizView />}/>
        </Route>
     </Routes>
  )
}

export default AllRoutes