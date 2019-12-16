import React, { SyntheticEvent } from 'react'

import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

import { User } from '../../models/user'

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

  updateUsername = (e:any) => {
    this.setState({
      ...this.state,
      username: e.target.value
    })
  }

  updatePassword = (e:any) => {
    this.setState({
      ...this.state,
      password: e.target.value
    })
  }

  submitLogin = async (e:SyntheticEvent) => {
    e.preventDefault()
    this.props.login(this.state.username, this.state.password)
  }

  render() {
    return (
      <div>
        <Form inline onSubmit={this.submitLogin}> 
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
          <Button>Submit</Button>
        </Form>
        <p>{this.props.user.name}</p>
      </div>
    );
  }

}

export default LoginComponent;
