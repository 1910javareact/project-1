
import React, { SyntheticEvent } from 'react';
import { Table, Button, Form, Label, Input } from 'reactstrap'
import { Reimbursement } from '../../models/reimbursement'
import { store } from '../../Store';


interface IGetReByIdProps {
    reById: Reimbursement[]
    getReById: (idSearch:number) => void
}

export class ReimbursementByIdComponent extends React.Component<IGetReByIdProps, any> {
    constructor(props: any) {
        super(props)
        this.state = {
            idSearch: 0
        }
    }
    updateById = (e: any) => {
        this.setState({
            ...this.state,
            idSearch: e.target.value
        })
    }
    callGetReById = async (e: SyntheticEvent) => {
        e.preventDefault()
        this.props.getReById(this.state.idSearch)
    }

    render() {
        let reArray = store.getState().reById.reById
        if (reArray.length > 1) {
          
        return (
            <>
            <h2>Search Reimbursements By Reimbursement Id</h2>

            <Form onSubmit={this.callGetReById}>
                <Label for="findUser" hidden>Search Reimbursements By ID</Label>
                <Input value={this.state.idSearch} onChange={this.updateById} type="number" name="getUserById" id="getUserById" placeholder="Reimbursement By ID" />
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
    )} else {
        return (
            <>
            <h2>Search Reimbursements By Reimbursement Id</h2>

            <Form onSubmit={this.callGetReById}>
                <Label for="findUser" hidden>Search Reimbursements By ID</Label>
                <Input value={this.state.idSearch} onChange={this.updateById} type="number" name="getUserById" id="getUserById" placeholder="Reimbursement By ID" />
                <Button >Submit</Button>
            </Form>
            </>
        )
    }
    }
}

export default ReimbursementByIdComponent