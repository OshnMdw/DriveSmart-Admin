import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PrivateRoutes from './PrivateRoutes';
import AdminPageView from '../views/AdminPageView';
import AddQuizView from '../views/AddQuizView';

function AllRoutes() {
  return (
    <Routes>
        <Route path='/' exact element={<AdminPageView />}/>
        <Route element={<PrivateRoutes/>} >
          <Route path='/addquiz'  element={<AddQuizView />}/>
        </Route>
     </Routes>
  )
}

export default AllRoutes