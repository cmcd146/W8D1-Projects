import { RECEIVE_BENCHES } from '../actions/bench_actions';

const benchesReducer = (state = {0: {id: 0, lat:0, lng:0,description:''}}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BENCHES:
      return action.benches;
    default:
      return state;
  }
};

export default benchesReducer;
