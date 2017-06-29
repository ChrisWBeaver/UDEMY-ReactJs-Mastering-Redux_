import React, { Component } from 'react'; 
import { connect } from 'react-redux'; //connects to the state lol
import { bindActionCreators } from 'redux';
import { addCharacterById } from '../actions';

class CharacterList extends Component {
  render() {
    console.log('this.props', this.props);
    return( 
      <div>
        <h4>Characters</h4>
        <ul>
          {
            this.props.characters.map(character => {
              return (
                <li key={character.id}>
                  <div>{character.name}</div>
                  <div onClick={() => this.props.addCharacterById(character.id)}>
                    +
                  </div>
                </li>
              )
            })
          }
        </ul>
      </div>
    );
  }

}


function mapStateToProps(state) {
  console.log('state', state); 
  return {
    characters: state.characters
  }; 
}

function mapDispatchtoProps(dispatch){
  //bind the action creaters to the props of this component
  return bindActionCreators({ addCharacterById}, dispatch);
}

//connect character list to redux
// map the dispatch to props
export default connect(mapStateToProps, mapDispatchtoProps)(CharacterList);   