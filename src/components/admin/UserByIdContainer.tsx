import { connect } from 'react-redux'
import  UserByIdComponent  from './UserByIdComponent'
import { IState } from '../../reducers/index'
import { getUserById } from '../../action-mappers/UserAdminActionMapper'

const mapStateToProps = (state:IState) => {

    return {
        userById: state.userById.userById
    }
}


const mapDispatchToProps = {
    getUserById
}

export default connect(mapStateToProps,mapDispatchToProps)(UserByIdComponent)