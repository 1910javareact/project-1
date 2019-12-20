import React, { SyntheticEvent } from 'react';
import { Table, Button } from 'reactstrap'
import { User } from '../../models/user';



interface IUserAdminComponentProps {
    users: User[]
    getAllUsers: () => void

}

export class UserAdminComponent extends React.Component<IUserAdminComponentProps, any> {
    constructor(props: any) {
        super(props)
        this.state = {
            // lookupUserId: 0,
            // saveUser: new User(0,'','','',0,0,[])
        }
    }

    submitGetAllUsers = async (e: SyntheticEvent) => {
        e.preventDefault()
        this.props.getAllUsers()
    }


    render() {
        // let userRow = (user:User) => {
        //     for (const key in user){
        //         return <td>{key}</td>
        //     }
        // }
        // let usersTable = this.state.users.map((user) => {
        //     return (
        //     <tr>{userRow}</tr>
        //     )
        // })
        return (
            <div>
                <Button onClick={this.submitGetAllUsers}>View Users</Button>
                <Table bordered>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Account Balance</th>
                            <th>Social Credit</th>
                            <th>Roles</th>
                        </tr>

                    </thead>
                    <tbody>
                        
                        {/* render dynamic table of users from props */}
                        


                         {/* {Object.keys(this.props.users).map((user) => {
                            return <tr>
                                 <td>{}}</td>
                                <td>{user.username}</td> 
                                {<td>{Children}</td>}
                                <td>{socialCredit}</td>
                            </tr>
                        })} */}

                        {/*

                        {Object.keys(this.props.users).map((user) => {
                            return <tr key={user}>
                                {Object.keys(user).map((key: any) => {
                                    return <td key={key}>{user[key]}</td>
                                })}
                            </tr>
                        })} */}
                    </tbody>
                </Table>
            </div >
        );
    }
}

export default UserAdminComponent;
