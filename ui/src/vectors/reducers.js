import { combineReducers } from 'redux';

const inputs = (state = {a: null, b: null}, action) => {
  switch(action.type) {
    case 'VECTOR_INPUT':
      return Object.assign({}, state, {[action.id]: action.value});
    default:
      return state;
  }
}

const calculation = (state = {loading: false, result: null}, action) => {
  switch(action.type) {
    case 'CALCULATE':
      return Object.assign({}, state, {loading: true});
    default:
      return state;
  }
}

const vectorsReducers = combineReducers({inputs, calculation});

export default vectorsReducers;
