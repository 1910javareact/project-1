
import React, { SyntheticEvent } from 'react';
import { Table, Button, Form, Label, Input } from 'reactstrap'
import { Reimbursement } from '../../models/reimbursement'
import { store } from '../../Store';

interface IGetReByAuthorProps {
    reByAuth: Reimbursement[]
    getReByAuth: (authorSearch: number) => void
}

export class ReimbursementByAuthorComponent extends React.Component<IGetReByAuthorProps, any>{
    constructor(props: any) {
        super(props)
        this.state = {
            authorSearch: 0
        }
    }
    updateByAuthor = (e: any) => {
        this.setState({
            ...this.state,
            authorSearch: e.target.value
        })
    }

    callGetReByAuth = async (e: SyntheticEvent) => {
        e.preventDefault()
        this.props.getReByAuth(this.state.authorSearch)
    }

    render() {
        let reArray = store.getState().reByAuth.reByAuth
        if (reArray.length > 1) {
            
            return (
                <>
                    <h2>Search Reimbursements By Author</h2>

                    <Form onSubmit={this.callGetReByAuth}>
                        <Label for="findUser" hidden>Search Reimbursements By Author</Label>
                        <Input value={this.state.authorSearch} onChange={this.updateByAuthor} type="number" name="getUserById" id="getUserById" placeholder="Reimbursement By Author" />
                        <Button >Submit</Button>
                    </Form>
                    <Table bordered>
                        <thead>
                            <tr>
                                <th>Reimbursement ID</th>
                                <th>Author</th>
                                <th>Amount</th>
                                <th>Description</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {reArray.map((e: Reimbursement) => {
                                
                                    return <tr>
                                        <td>{e.reimbursementId}</td>
                                        <td>{e.author}</td>
                                        <td>{e.amount}</td>
                                        <td>{e.description}</td>
                                        <td>{e.status}</td>
                                    </tr>
                                

                            })}
                        </tbody>
                    </Table>
                </>
            )
        }
        else {
            return (
                <>
                    <h2>Search Reimbursements By Author</h2>

                    <Form onSubmit={this.callGetReByAuth}>
                        <Label for="findUser" hidden>Search Reimbursements By Author</Label>
                        <Input value={this.state.authorSearch} onChange={this.updateByAuthor} type="number" name="getUserById" id="getUserById" placeholder="Reimbursement By Author" />
                        <Button >Submit</Button>
                    </Form>
                </>
            )
        }
    }
}

export default ReimbursementByAuthorComponent