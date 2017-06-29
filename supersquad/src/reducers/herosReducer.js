import { ADD_CHARACTER, REMOVE_CHARACTER } from '../actions';
import createCharacter from './helpers'

function heros(state = [], action){
  let heros;
  switch (action.type){
    case ADD_CHARACTER:
      heros = [...state, createCharacter(action.id)];
      return heros;  
    case REMOVE_CHARACTER:
      heros = state.filter(item => item.id !== action.id);
      return heros;      
    default: 
      return state; 
  }
}


export default heros; 