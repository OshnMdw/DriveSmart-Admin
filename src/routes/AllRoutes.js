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
import AllPracticeTestView from '../views/AllPracticeTestView';
import AddPracticeTestView from '../views/AddPracticeTestView';
import EditUserInfoView from '../views/EditUserInfoView';
import ComplaintsView from '../views/ComplaintsView';
import ReportsView from '../views/ReportsView';
import RefundView from '../views/RefundView';
import IncomeView from '../views/IncomeView';

function AllRoutes() {
  return (
    <Routes>
        <Route element={<PrivateRoutes/>} >
          {/* <Route path='/' exact element={<AdminPageView />}/> */}
          <Route path='/editvideo'  element={<EditVideo />}/>
          <Route path='/allquizzes'  element={<AllQuizView />}/>
          <Route path='/allpopquizzes'  element={<AllPopQuizView />}/>
          <Route path='/addpopquiz' element={<AddPopQuizView/>} />
          <Route path='/addpracticetest' element={<AddPracticeTestView/>} />
          <Route path='/addquiz' element={<AddQuizView/>} />
          <Route path='/allusers'  element={<AllUsersView />}/>
          <Route path='/signUp'  element={<SignUp/>}/>
          <Route path='/login'  element={<Login/>}/>
          <Route path='/allpracticetests'  element={<AllPracticeTestView/>}/>
          <Route path='/resetPassword' element = {<ResetPassword/>}/>
          <Route path='/passwordVerify'  element={<PasswordVerify/>}/>
          <Route path='/passwordupdated' element={<PasswordUpdated/>}/>
          <Route path = '/' element={<AdminDashboard/>}/>
          <Route path='/headings' element = {<HeadingsView/>}/>
          <Route path='/headings/addHeading' element = {<AddHeadingView/>}/>
          <Route path = '/allusers/edit' element={<EditUserInfoView/>} />
          <Route path = '/complaintsView' element={<ComplaintsView/>}/>
          <Route path = '/refund' element={<RefundView/>}/>
          <Route path = '/income' element={<IncomeView/>}/>
          <Route path = '/reports' element={<ReportsView/>}/>
        </Route>
     </Routes>
  )
}

export default AllRoutes