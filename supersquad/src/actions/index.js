export const ADD_CHARACTER = 'ADD_CHARACTER';
export const REMOVE_CHARACTER = 'REMOVE_CHARACTER';

export function addCharacterById(id){
  const action = {
    type: ADD_CHARACTER, 
    id // do not need to do id:id because key/value are the same 
  }

  return action; 
}

export function removeCharacterById(id){
  const action = {
    type: REMOVE_CHARACTER, 
    id
  }
  return action; 
}