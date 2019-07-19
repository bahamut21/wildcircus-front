import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import fetchWithUrl from './fetchWithUrl';
import putWithUrl from './putWithUrl';
import logAdmin from './logAdmin';
import search from './search';



const allReducers = combineReducers({
  fetchWithUrl,
  putWithUrl,
  logAdmin,
  form: formReducer,
  search,
});

export default allReducers;