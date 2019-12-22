import { connect } from 'react-redux'
import SubmitReimbursementComponent from './SubmitReimbursementComponent'
import { IState } from '../../reducers'
import { submitReimbursement } from '../../action-mappers/UserAdminActionMapper'

const mapStateToProps = (state:IState) => {
    return {
        reimbursement: state.reimbursement.reimbursement
    }
}

const mapDispatchToProps = {
    submitReimbursement
}

export default connect(mapStateToProps,mapDispatchToProps)(SubmitReimbursementComponent)
