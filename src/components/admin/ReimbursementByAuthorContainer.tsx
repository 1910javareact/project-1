import { connect } from 'react-redux'
import ReimbursementByAuthorComponenent from './ReimbursementByAuthorComponent'
import { IState } from '../../reducers/index'
import { getReByAuth } from '../../action-mappers/UserAdminActionMapper'

const mapStateToProps = (state:IState) => {

    return {
        reByAuth: state.reByAuth.reByAuth
    }
}


const mapDispatchToProps = {
    getReByAuth
}

export default connect(mapStateToProps,mapDispatchToProps)(ReimbursementByAuthorComponenent)