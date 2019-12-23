import React, { } from 'react';
import UserAdminComponent from './admin/UserAdminContainer';
import ViewReimbursementComponent from './admin/ViewReimbursementContainer';
import SaveUserComponent from './admin/SaveUserContainer';
import UserByIdComponent from './admin/UserByIdContainer';
import SumbitReimbursementComponent from './user/SubmitReimbursementContainer'
import { store } from '../Store'
import ReimbursementByIdComponent from './admin/ReimbursementByIdContainer';
import ReimbursementByAuthorComponent from './admin/ReimbursementByAuthorContainer';

const AdminViewComponent = (props:any) => {
    return (
        <>
            <h1 className="welcome-message">Welcome, {store.getState().login.user.name}</h1>

            <UserAdminComponent />  
            <UserByIdComponent />
            <ViewReimbursementComponent />
            <ReimbursementByIdComponent />
            <ReimbursementByAuthorComponent />
            <SaveUserComponent />
            <SumbitReimbursementComponent />
            <br></br>
        </>
    )
}

export default AdminViewComponent