import { connect } from 'react-redux'
import ViewReimbursementComponent from './ViewReimbursementComponent'
import { IUserAdminState } from '../../reducers/index'
import { viewReimbursements } from '../../action-mappers/UserAdminActionMapper'

const mapStateToProps = (state:IUserAdminState) => {

    return {
        reimbursements: state.reimbursements
    }
}


const mapDispatchToProps = {
    viewReimbursements
}

export default connect(mapStateToProps,mapDispatchToProps)(ViewReimbursementComponent)