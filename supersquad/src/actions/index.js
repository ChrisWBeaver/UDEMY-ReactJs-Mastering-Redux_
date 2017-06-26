export const ADD_CHARACTER = 'ADD_CHARACTER';

export function addCharacterById(id){
  const action = {
    type: ADD_CHARACTER, 
    id // do not need to do id:id because key/value are the same 
  }

  return action; 
}