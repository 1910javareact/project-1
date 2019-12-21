import React, { SyntheticEvent } from 'react';
import { Table, Button } from 'reactstrap'
import { User } from '../../models/user';
import { store } from '../../Store';

interface IUserAdminComponentProps {
    getAllUsers: () => void,
}

export class UserAdminComponent extends React.Component<IUserAdminComponentProps, any> {
    constructor(props: any) {
        super(props)
        this.state = {

        }
    }

    submitGetAllUsers = async (e: SyntheticEvent) => {
        e.preventDefault()
        this.props.getAllUsers()
    }



    render() {
        let usersArray = store.getState().users.users
        if (usersArray.length > 1) {
            return (
                <div>

                    <Button onClick={this.submitGetAllUsers}>View Users</Button>
                    <Table bordered>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Username</th>
                                <th>Account Balance</th>
                                <th>Social Credit</th>
                                <th>Roles</th>
                            </tr>
                        </thead>
                        <tbody>
                            {usersArray.map((e: User) => {
                                return <tr>
                                    <td>{e.name}</td>
                                    <td>{e.username}</td>
                                    <td>{e.accountBalance}</td>
                                    <td>{e.socialCredit}</td>
                                    <td>{e.role.map((e:any)=>{
                                        return e + ', '
                                    })}</td>
                                </tr>
                            })}
                        </tbody>
                    </Table>


                </div >
            );
        } else {
            return (
                <div>

                    <Button onClick={this.submitGetAllUsers}>View Users</Button>
                </div>
            )
        }
    }
}

export default UserAdminComponent;


        // let usersTable = this.props.users.map((user:User) => {
        //     return (
        //     <tr>{userRow}</tr>
        //     )
        // })
        // let userRow = (user:User) => {
        //     for (const key in user){
        //         return <td>{key}</td>
        //     }
        // }
        // let userRow = this.state.users.map((U:User, index:number) => {
        //     return <tr key={index}>
        //         <td>
        //             {U.name}
        //         </td>
        //         <td>
        //             {U.username}
        //         </td>
        //         <td>
        //             {U.accountBalance}
        //         </td>
        //         <td>
        //             {U.socialCredit}
        //         </td>
        //     </tr>
        // })
        // let userArray: User[] = this.state.users.users
        // let arrLen: number = userArray.length
        // for (let i = 0; i < arrLen; i++) {
        //     return (
        //         <tr>
        //             <td>{userArray[i].name}</td>
        //             <td>{userArray[i].username}</td>
        //             <td>{userArray[i].accountBalance}</td>
        //             <td>{userArray[i].socialCredit}</td>
        //             <td>{userArray[i].role.toString()}</td>
        //         </tr>
        //     )
        // }
        // renderHelper = () => {
        //     let usersArray = store.getState().users.users
        //     let arrLen = usersArray.length
        //     for (let i = 0; i < arrLen; i++) {
        //         return <tr>
        //             <td>
        //                 {usersArray[i].name}
        //             </td>
        //             <td>
        //                 {usersArray[i].userName}
        //             </td>
        //             <td>
        //                 {usersArray[i].accountBalance}
        //             </td>
        //             <td>
        //                 {usersArray[i].socialCredit}
        //             </td>
        //         </tr>
        //     }
        // }