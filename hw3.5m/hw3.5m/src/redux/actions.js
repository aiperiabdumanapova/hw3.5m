export const ADD_NAME = 'ADD_NAME';
export const LOAD_NAMES = 'LOAD_NAMES';

export const addName = (name) => ({
  type: ADD_NAME,
  payload: name,
});

export const loadNames = (names) => ({
  type: LOAD_NAMES,
  payload: names,
});


