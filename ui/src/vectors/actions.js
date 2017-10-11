export const inputVector = (id, value) => {
  return {
    type: 'VECTOR_INPUT',
    id,
    value
  };
}

export const calcProduct = () => {
  return {
    type: 'CALCULATE'
  };
}
