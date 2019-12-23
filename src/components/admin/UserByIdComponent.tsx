import React, { SyntheticEvent } from 'react';
import { Table, Button, Form, Label, Input } from 'reactstrap'
import { User } from '../../models/user';
import { store } from '../../Store';


interface IGetUserByIdProps {

    getUserById: (searchId: number) => void
    userById: User
}

export class UserByIdComponent extends React.Component<IGetUserByIdProps, any> {
    constructor(props: any) {
        super(props)
        this.state = {
            searchId: 0
        }
    }

    updateGetUserById = (e: any) => {
        this.setState({
            ...this.state,
            searchId: e.target.value
        })
    }

    callGetUserById = async (e: SyntheticEvent) => {
        e.preventDefault()
        this.props.getUserById(this.state.searchId)
    }

    render() {
        let userArray = store.getState().userById.userById
        
            return (
                <>
                    <h2>Find User By ID</h2>
                    <Form onSubmit={this.callGetUserById}>
                        <Label for="findUser" hidden>Search User By ID</Label>
                        <Input value={this.state.searchId} onChange={this.updateGetUserById} type="number" name="getUserById" id="getUserById" placeholder="Get User By ID" />
                        <Button >Submit</Button>
                    </Form>
                    <h2>User By ID</h2>
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
                            <tr>
                            <td>{userArray.name}</td>
                            <td>{userArray.password}</td>
                            <td>{userArray.accountBalance}</td>
                            <td>{userArray.socialCredit}</td>
                            </tr>
                            {/* {userArray.map((e: User) => {
                                return <tr>
                                    <td>{e.name}</td>
                                    <td>{e.password}</td>
                                    <td>{e.accountBalance}</td>
                                    <td>{e.socialCredit}</td>
                                    <td>{e.role.map((e: any) => {
                                        return e + ', '
                                    })}</td>
                                </tr>
                            })} */}
                        </tbody>
                    </Table>
                </>
                    )
                        }
        }
        
        export default UserByIdComponent
