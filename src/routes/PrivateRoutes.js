import { Outlet, Navigate} from "react-router-dom";

import React from 'react'

function PrivateRoutes() {
    const auth=  {"token":true} 
  return (
    auth.token ? <Outlet/> : <Navigate to='/login' replace={true}/>
  )
}

export default PrivateRoutes