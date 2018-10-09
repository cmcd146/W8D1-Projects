import {fetchBenches} from '../actions/bench_actions';
import BenchIndex from './bench_index';
import {connect} from 'react-redux';

const mapStateToProps = state => {
  return {
    benches: state.entities.benches
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchBenches: ()=> dispatch(fetchBenches())
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(BenchIndex);
