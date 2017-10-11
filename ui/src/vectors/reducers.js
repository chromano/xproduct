import { combineReducers } from 'redux';

const inputs = (state = {}, action) => {
  switch(action.type) {
    case 'VECTOR_INPUT':
      return Object.assign({}, state, {
        [action.id]: action.value
      });
    default:
      return state;
  }
};

const calculation = (state = {loading: false, result: null}, action) => {
  switch(action.type) {
    case 'CALCULATE':
      return Object.assign({}, state, {
        result: null,
        loading: true
      });
    case 'CALCULATION_RESULT':
      return Object.assign({}, state, {
        result: action.result,
        loading: false
      });
    default:
      return state;
  }
};

const history = (state = {list: []}, action) => {
  switch(action.type) {
    case 'CALCULATION_RESULT':
      const list = [...state.list, action.result];
      return Object.assign({}, state, {list});
    default:
      return state;
  }
};

const vectorsReducers = combineReducers({
  inputs,
  calculation,
  history
});

export default vectorsReducers;
