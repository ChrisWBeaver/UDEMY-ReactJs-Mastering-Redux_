import {combineReducers} from 'redux'; 
import {RECEIVE_MEMES} from '../actions';

function memems(state = [], action ){
  switch (action.type) {
    case RECEIVE_MEMES:
      return action.memes;
    default:
      return state; 
  }
}


const rootReducer = combineReducers({memems}); 

export default rootReducer; 