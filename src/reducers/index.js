import { combineReducers } from 'redux';
import countriesReducer  from './countries-reducer';
import getCountries from '../actions/actions-countries'; 

const reducers = combineReducers({
    countriesReducer
});

export default reducers;