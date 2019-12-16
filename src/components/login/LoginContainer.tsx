import { connect } from 'react-redux'
import { LoginComponent } from './LoginComponent'
import { IState } from '../../reducers'
import { login } from '../../action-mappers/LoginActionMapper'

const mapStateToProps = (state:IState) => {
    return {
        user: state.login.user
    }
}

const mapDispatchToProps = {
    login
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginComponent)