import React, { SyntheticEvent } from 'react'

import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Redirect } from 'react-router-dom'
import { User } from '../../models/user'
import { store } from '../../Store';

interface ILoginComponentProps {
  user: User
  login: (u: string, p: string) => void
}

export class LoginComponent extends React.Component<ILoginComponentProps, any>{
  constructor(props: any) {
    super(props)
    this.state = {
      username: '',
      password: ''
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

  submitLogin = async (e: SyntheticEvent) => {
    e.preventDefault()
    this.props.login(this.state.username, this.state.password)
  }




  render() {
    const roleArr = store.getState().login.user.role
    if (roleArr.length === 3) {
      return <Redirect to="/admin" />
    } else if (roleArr.length === 2) {
      return <Redirect to="/finance"/>
    } else if (roleArr.length === 1) {
      return <Redirect to="/user"/>
    } else {
      return (
        <div>
          <Form inline onSubmit={this.submitLogin}>
            <FormGroup>
              <Label for="usernameInput" hidden></Label>
              <Input value={this.state.username} onChange={this.updateUsername} name="usernameInput" id="usernameInput" placeholder="Username" />
            </FormGroup>
            {' '}
            <FormGroup>
              <Label for="passwordInput" hidden></Label>
              <Input value={this.state.password} onChange={this.updatePassword} type="password" name="passwordInput" id="passwordInput" placeholder="Password" />
            </FormGroup>
            {' '}
            <Button>Submit</Button>
          </Form>
        </div>
      );
    }

  }

}

export default LoginComponent;
