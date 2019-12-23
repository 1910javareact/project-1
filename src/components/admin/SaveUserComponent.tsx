import React, { SyntheticEvent } from 'react'
import { Button, Form, FormGroup, Label, Input, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { User } from '../../models/user'

interface ISaveUserComponentProps {
    newUser: User
    saveOneUser: (u: string, p: string, n: string, d: number, a: number, s: number, r: []) => void
}

export class SaveUserComponent extends React.Component<ISaveUserComponentProps, any>{
    constructor(props: any) {
        super(props)
        this.state = {
            name: '',
            username: '',
            password: '',
            userId: 0,
            accountBalance: 0,
            socialCredit: 0,
            role: []
        }
    }

    updateUsername = (e: any) => {
        this.setState({
            ...this.state,
            username: e.target.value
        })
    }

    updatePassword = (e: any) => {
        this.setState({
            ...this.state,
            password: e.target.value
        })
    }

    updateName = (e: any) => {
        this.setState({
            ...this.state,
            name: e.target.value
        })
    }

    updateAccountBalance = (e: any) => {
        this.setState({
            ...this.state,
            accountBalance: e.target.value
        })
    }

    updateSocialCredit = (e: any) => {
        this.setState({
            ...this.state,
            socialCredit: e.target.value
        })
    }

    updateUserRole = () => {
        this.setState({
            ...this.state,
            role: ['User']
        })
    }
    updateFMRole = () => {
        this.setState({
            ...this.state,
            role: ['User', 'Finance Manager']
        })
    }
    updateAdminRole = () => {
        this.setState({
            ...this.state,
            role: ['User', 'Finance Manager', 'Admin']
        })
    }


    submitSaveOneUser = async (e: SyntheticEvent) => {
        e.preventDefault()
        this.props.saveOneUser(this.state.username, this.state.password, this.state.name, 0, this.state.accountBalance, this.state.socialCredit, this.state.role)
    }

    render() {
        return (
            <div>
                <h2>Save User</h2>
                <Form inline onSubmit={this.submitSaveOneUser}>
                    <FormGroup>
                        <Label for="nameInput" hidden>Name</Label>
                        <Input value={this.state.name} onChange={this.updateName} name="usernameInput" id="usernameInput" placeholder="Name" />
                    </FormGroup>
                    {' '}
                    <FormGroup>
                        <Label for="usernameInput" hidden>Username</Label>
                        <Input value={this.state.username} onChange={this.updateUsername} name="usernameInput" id="usernameInput" placeholder="Username" />
                    </FormGroup>
                    {' '}
                    <FormGroup>
                        <Label for="passwordInput" hidden>Password</Label>
                        <Input value={this.state.password} onChange={this.updatePassword} type="password" name="passwordInput" id="passwordInput" placeholder="Password" />
                    </FormGroup>
                    {' '}
                    <FormGroup>
                        <Label for="passwordInput" hidden>Account Balance</Label>
                        <Input value={this.state.accountBalance} onChange={this.updateAccountBalance} type="password" name="passwordInput" id="passwordInput" placeholder="Account Balance" />
                    </FormGroup>
                    {' '}
                    <FormGroup>
                        <Label for="passwordInput" hidden>Social Credit</Label>
                        <Input value={this.state.socialCredit} onChange={this.updateSocialCredit} type="password" name="passwordInput" id="passwordInput" placeholder="Social Credit Score" />
                    </FormGroup>
                    {' '}

                    <Button onClick={this.updateUserRole}>User</Button >
                    <Button onClick={this.updateFMRole}>Finance Manager</Button >
                    <Button onClick={this.updateAdminRole}>Admin</Button >
                    
                    <br></br>
                    <Button>Submit</Button>
                </Form>
                <p>{this.props.newUser.name}</p>
            </div>
        );
    }

}

export default SaveUserComponent;