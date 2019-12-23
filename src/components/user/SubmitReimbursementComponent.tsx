import React, { SyntheticEvent } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Reimbursement } from '../../models/reimbursement'
import { store } from '../../Store'
import { Redirect } from 'react-router-dom';

interface ISumbitReimbursementProps {
    reimbursement: Reimbursement
    submitReimbursement: (reimbursementId: number, author: number, amount: number, description: string, status: number) => void
}

export class SumbitReimbursementComponent extends React.Component<ISumbitReimbursementProps, any>{
    constructor(props: any) {
        super(props)
        this.state = {
            reimbursementId: 0,
            author: store.getState().login.user.userId,
            amount: 0,
            description: '',
            status: 1
        }
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
    
    submitSubmitReimbursement = async (e: SyntheticEvent) => {
        e.preventDefault()
        this.props.submitReimbursement(1, this.state.author, this.state.amount, this.state.desc, this.state.status)
    }

    render() {
        return (
            <>
            <h2>Submit Reimbursement</h2>
            <Form inline onSubmit={this.submitSubmitReimbursement}>
                <FormGroup>
                    <Label for="usernameInput" hidden>Amount</Label>
                    <Input value={this.state.amount} onChange={this.updateAmount} name="usernameInput" id="usernameInput" placeholder="Amount" />
                </FormGroup>
                <FormGroup>
                    <Label for="usernameInput" hidden>Description</Label>
                    <Input value={this.state.desc} onChange={this.updateDesc} name="usernameInput" id="usernameInput" placeholder="Description" />
                </FormGroup>
                <Button>Submit</Button>
                {/* <p>{this.props.reimbursement.author}</p> */}
            </Form>
            <p>{this.props.reimbursement.description}</p>
            </>
        )
    }

}

export default SumbitReimbursementComponent 