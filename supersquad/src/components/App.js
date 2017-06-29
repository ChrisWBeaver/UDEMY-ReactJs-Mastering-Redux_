import React, { Component } from 'react'; 
import CharacterList from './CharacterList'; 
import '../style/index.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <h2>Super Squad</h2>
        <CharacterList />
      </div>

    )
  }
}

export default App; 