import { ADD_NAME, LOAD_NAMES} from './actions';

const initialState = {
  names: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NAME:
      const updatedNames = [...state.names, action.payload];
      localStorage.setItem('names', JSON.stringify(updatedNames));
      return { ...state, names: updatedNames };
    case LOAD_NAMES:
      return { ...state, names: action.payload };
    default:
      return state;
  }
};

export default rootReducer;
