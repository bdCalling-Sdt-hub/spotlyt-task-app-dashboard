import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const AdminRoutes = ({children}) => {
     const location = useLocation();
     const admin = JSON.parse(localStorage.getItem('admin'));
     console.log(admin);

     if(admin?.role==='admin'){
          return children;
     }
     return <Navigate to="/auth" state={{from:location}} replace/>
}

export default AdminRoutes;
