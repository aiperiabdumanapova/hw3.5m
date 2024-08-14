import { createStore } from 'redux';
import rootReducer from './reducers';

const loadFromLocalStorage = () => {
  const names = localStorage.getItem('names');
  if (names) {
    return JSON.parse(names);
  }
  return [];
};

const store = createStore(rootReducer);


store.dispatch({
  type: 'LOAD_NAMES',
  payload: loadFromLocalStorage(),
});

export default store;



