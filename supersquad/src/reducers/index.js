import { combineReducers } from 'redux'

import characters from './charactersReducer'; 
import heros from './herosReducer';


const rootReducer = combineReducers(
  {
    characters, 
    heros
  }
);

export default rootReducer; 