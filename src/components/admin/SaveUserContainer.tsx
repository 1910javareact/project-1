import { connect } from 'react-redux'
import SaveUserComponent from './SaveUserComponent'
import { IState } from './../../reducers'
import { saveOneUser } from '../../action-mappers/UserAdminActionMapper'

const mapStateToProps = (state: IState) => {
    return {
        newUser: state.newUser.newUser
    }
}
const mapDispatchToProps = {
    saveOneUser
}

export default connect(mapStateToProps,mapDispatchToProps)(SaveUserComponent)