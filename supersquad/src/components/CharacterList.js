import React, { Component } from 'react'; 
import { connect } from 'react-redux'; //connects to the state lol

class CharacterList extends Component {
  render() {
    return( 
      <div>
        <h4>Characters</h4>
      </div>
    );
  }

}

//connect character list to redux
export default connect()(CharacterList);   