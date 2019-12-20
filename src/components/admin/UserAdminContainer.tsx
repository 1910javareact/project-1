import { connect } from 'react-redux'
import  UserAdminComponent  from './UserAdminComponent'
import { IUserAdminState } from '../../reducers/index'
import { getAllUsers } from '../../action-mappers/UserAdminActionMapper'

const mapStateToProps = (state:IUserAdminState) => {

    return {
        users: state.users
    }
}


const mapDispatchToProps = {
    getAllUsers
}

export default connect(mapStateToProps,mapDispatchToProps)(UserAdminComponent)