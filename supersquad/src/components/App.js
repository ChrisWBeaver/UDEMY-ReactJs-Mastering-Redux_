import React, { Component } from 'react'; 
import CharacterList from './CharacterList'; 
import HeroList from './HeroList';
import '../style/index.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <h2>Super Squad</h2>
        <div className="col-md-6">
          <CharacterList />
        </div>
        <div className="col-md-6">
          <HeroList />
        </div>
      </div>

    )
  }
}

export default App; 