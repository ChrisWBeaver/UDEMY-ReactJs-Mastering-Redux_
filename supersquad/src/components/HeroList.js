import React, { Component } from 'react'; 
import { connect } from 'react-redux'; //connects to the state lol
import { bindActionCreators } from 'redux';
import { removeCharacterById } from '../actions';

class HeroList extends Component {
  render() {
    console.log('this.props', this.props);
    return( 
      <div>
        <h4>Your Hero Squad</h4>
        <ul className="list-group">
          {
            this.props.heros.map(hero => {
              return (
                <li key={hero.id} className="list-group-item">
                  <div className="list-item">{hero.name}</div>
                  <div className="list-item right-button" onClick={() => this.props.removeCharacterById(hero.id)}>
                    -
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
    heros: state.heros
  }; 
}

function mapDispatchtoProps(dispatch){
  //bind the action creaters to the props of this component
  return bindActionCreators({ removeCharacterById}, dispatch);
}

//connect character list to redux
// map the dispatch to props
export default connect(mapStateToProps, mapDispatchtoProps)(HeroList);   