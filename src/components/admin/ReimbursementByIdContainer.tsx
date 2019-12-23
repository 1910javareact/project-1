import { connect } from 'react-redux'
import ReimbursementByIdComponent from './ReimbursementByIdComponent'
import { IState } from '../../reducers/index'
import { getReById } from '../../action-mappers/UserAdminActionMapper'

const mapStateToProps = (state:IState) => {

    return {
        reById: state.reById.reById
    }
}


const mapDispatchToProps = {
    getReById
}

export default connect(mapStateToProps,mapDispatchToProps)(ReimbursementByIdComponent)