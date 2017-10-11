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
    return fetch('/compute', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(vectors)
    }).then(response => response.json())
      .then(json => {
        dispatch(receiveResult(json))
      });
  };
};

export const receiveResult = (result) => {
  return {
    type: 'CALCULATION_RESULT',
    result
  };
};

export const receiveHistory = (list) => {
  return {
    type: 'HISTORY_RECEIVED',
    list
  };
}

export const loadCalcHistory = () => {
  return dispatch => {
    return fetch('/compute')
      .then(response => response.json())
      .then(json => {
        dispatch(receiveHistory(json))
      });
  };
};
