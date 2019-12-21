import React from 'react'
import { User } from '../../models/user'

interface IUserDisplayRowProps {
    user: User
}

export const UserTableRow: React.FC<IUserDisplayRowProps> = (props) => {

    return (
        <tr>
            <td>{props.user.name}</td>
            <td>{props.user.username}</td>
            <td>{props.user.accountBalance}</td>
            <td>{props.user.socialCredit}</td>
            <td>{props.user.role.toString()}</td>
        </tr>
    )
}

