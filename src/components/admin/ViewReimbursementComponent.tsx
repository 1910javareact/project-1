import React, { SyntheticEvent } from 'react';
import { Table, Button } from 'reactstrap'
import { Reimbursement } from '../../models/reimbursement'
import { store } from '../../Store';

interface IViewComponentProps {
    viewReimbursements: () => void
}

export class ViewReimbursementComponent extends React.Component<IViewComponentProps, any> {
    constructor(props: any) {
        super(props)
        this.state = {

        }
    }

    submitViewReimbursements = async (e: SyntheticEvent) => {
        e.preventDefault()
        this.props.viewReimbursements()
    }

    render() {
        let reArray = store.getState().reimbursements.reimbursements
        if (reArray.length > 1) {
            return (
                <div>
                    <Button onClick={this.submitViewReimbursements}>View Reimbursements</Button>
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
                </div>
            )
        } else {
            return (
                <div>

                    <Button onClick={this.submitViewReimbursements}>View Reimbursements</Button>
                </div>
            )
        }
    }
}

export default ViewReimbursementComponent