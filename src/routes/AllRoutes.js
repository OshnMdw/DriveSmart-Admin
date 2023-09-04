import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PrivateRoutes from './PrivateRoutes';
import AdminPageView from '../views/AdminPageView';
import AddQuizView from '../views/AddQuizView';
import EditVideo from '../views/EditVideo';


function AllRoutes() {
  return (
    <Routes>
        <Route element={<PrivateRoutes/>} >
          <Route path='/editvideo'  element={<EditVideo />}/>
          <Route path='/' exact element={<AdminPageView />}/>
        </Route>
     </Routes>
  )
}

export default AllRoutes