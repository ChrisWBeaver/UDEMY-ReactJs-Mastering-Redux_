import characters_json from '../data/characters.json'
function createCharacter(id){
  let characters = characters_json.find( c => c.id === id);
  return characters;
}

export default createCharacter;