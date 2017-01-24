import { connect } from 'react-redux'

import { addWombat } from '../actions'
import Wombats from '../components/Wombats'

const mapDispatchToProps = dispatch => {
  return {
    addWombat: wombat => dispatch(addWombat(wombat))
  }
}

const mapStateToProps = ({ wombats }) => {
  return {
    wombats
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Wombats)
