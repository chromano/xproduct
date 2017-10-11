import fetch from 'isomorphic-fetch';

export const inputVector = (id, value) => {
  return {
    type: 'VECTOR_INPUT',
    id,
    value
  };
};

export const calcCrossProduct = (vectors) => {
  return dispatch => {
    dispatch({type: 'CALCULATE'});
    return fetch('https://httpbin.org/ip')
      .then(response => response.json())
      .then(json => dispatch(receiveResult(json)));
  };
};

export const receiveResult = (result) => {
  return {
    type: 'CALCULATION_RESULT',
    result
  };
};
