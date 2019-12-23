import React, {  } from 'react';
import ViewReimbursementComponent from './admin/ViewReimbursementContainer';
import SumbitReimbursementComponent from './user/SubmitReimbursementContainer';
import ReimbursementByIdComponent from './admin/ReimbursementByIdContainer';
import ReimbursementByAuthorComponent from './admin/ReimbursementByAuthorContainer';
import { store } from '../Store'

const FMViewComponent = (props:any) => {
    return (
        <>
            <h1 className="welcome-message">Welcome, {store.getState().login.user.name}</h1>
            <ViewReimbursementComponent />
            <ReimbursementByIdComponent />
            <ReimbursementByAuthorComponent />
            <SumbitReimbursementComponent />
            <br></br>
        </>
    )
}

export default FMViewComponent