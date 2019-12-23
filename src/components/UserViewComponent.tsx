import React, {  } from 'react';
import SumbitReimbursementComponent from './user/SubmitReimbursementContainer';
import { store } from '../Store'


const UserViewComponent = (props:any) => {
    return (
        <>
            <h1 className="welcome-message">Welcome, {store.getState().login.user.name}</h1>
            <SumbitReimbursementComponent /> 
            <br></br>
        </>
    )
}

export default UserViewComponent