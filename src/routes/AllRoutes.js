import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PrivateRoutes from './PrivateRoutes';
import AdminPageView from '../views/AdminPageView';
import EditVideo from '../views/EditVideo';
import AllQuizView from '../views/AllQuizView';
import AllPopQuizView from '../views/AllPopQuizView';
import AllUsersView from '../views/AllUsersView';
import SignUp from '../views/SignUp';
import Login from '../views/Login';
import PasswordVerify from '../components/PasswordVerify';
import ResetPassword from '../components/ResetPassword';
import PasswordUpdated from '../components/UpdateSuccessful';
import AddPopQuizView from '../views/AddPopQuizView';
import AddQuizView from '../views/AddQuizView';
import AdminDashboard from '../views/AdminDashboard';
import HeadingsView from '../views/HeadingsView';
import AddHeadingView from '../views/AddHeadingView';

function AllRoutes() {
  return (
    <Routes>
        <Route element={<PrivateRoutes/>} >
          <Route path='/' exact element={<AdminPageView />}/>
          <Route path='/editvideo'  element={<EditVideo />}/>
          <Route path='/allquizzes'  element={<AllQuizView />}/>
          <Route path='/allpopquizzes'  element={<AllPopQuizView />}/>
          <Route path='/addpopquiz' element={<AddPopQuizView/>} />
          <Route path='/addquiz' element={<AddQuizView/>} />
          <Route path='/allusers'  element={<AllUsersView />}/>
          <Route path='/signUp'  element={<SignUp/>}/>
          <Route path='/login'  element={<Login/>}/>
          <Route path='/resetPassword' element = {<ResetPassword/>}/>
          <Route path='/passwordVerify'  element={<PasswordVerify/>}/>
          <Route path='/passwordupdated' element={<PasswordUpdated/>}/>
          <Route path = '/adminDashBoard' element={<AdminDashboard/>}/>
          <Route path='/adminDashBoard/headings' element = {<HeadingsView/>}/>
          <Route path='/adminDashBoard/headings/addHeading' element = {<AddHeadingView/>}/>
        </Route>
     </Routes>
  )
}

export default AllRoutes