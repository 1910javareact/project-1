import React, { SyntheticEvent } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Reimbursement } from '../../models/reimbursement'

interface ISumbitReimbursementProps {
    reimbursement: Reimbursement
    submitReimbursement: (reimbursementId: number, author: number, amount: number, description: string, status: number) => void
}

export class SumbitReimbursementComponent extends React.Component<ISumbitReimbursementProps, any>{
    constructor(props: any) {
        super(props)
        this.state = {
            reimbursementId: 0,
            author: 0,
            amount: 0,
            description: '',
            status: 0
        }
    }
    //should auto-fill from state.login.userId
    updateAuthor = (e: any) => {
        this.setState({
            ...this.state,
            author: e.target.value
        })
    }
    updateAmount = (e: any) => {
        this.setState({
            ...this.state,
            amount: e.target.value
        })
    }
    updateDesc = (e: any) => {
        this.setState({
            ...this.state,
            desc: e.target.value
        })
    }
    updateStatus = (e: any) => {
        this.setState({
            ...this.state,
            status: e.target.value
        })
    }
    submitSubmitReimbursement = async (e: SyntheticEvent) => {
        e.preventDefault()
        this.props.submitReimbursement(1, this.state.author, this.state.amount, this.state.desc, this.state.status)
    }

    render() {
        return (
            <Form inline onSubmit={this.submitSubmitReimbursement}>
                <FormGroup>
                {/* //should auto-fill from state.login.userId */}
                    <Label for="usernameInput" hidden>Author</Label>
                    <Input value={this.state.author} onChange={this.updateAuthor} name="usernameInput" id="usernameInput" placeholder="Username" />
                </FormGroup>
                <FormGroup>
                    <Label for="usernameInput" hidden>Amount</Label>
                    <Input value={this.state.amount} onChange={this.updateAmount} name="usernameInput" id="usernameInput" placeholder="Username" />
                </FormGroup>
                <FormGroup>
                    <Label for="usernameInput" hidden>Description</Label>
                    <Input value={this.state.desc} onChange={this.updateDesc} name="usernameInput" id="usernameInput" placeholder="Username" />
                </FormGroup>
                <FormGroup>
                    <Label for="usernameInput" hidden>Status</Label>
                    <Input value={this.state.status} onChange={this.updateStatus} name="usernameInput" id="usernameInput" placeholder="Username" />
                </FormGroup>
                <Button>Submit</Button>
                {/* <p>{this.props.reimbursement.author}</p> */}
            </Form>
            
        )
    }
}

export default SumbitReimbursementComponent 