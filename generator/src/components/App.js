import React, { Component } from 'react'; 
import { connect } from 'react-redux';

class App extends Component {
  constructor() {
    super(); 
    this.state = {
      memeLimit:10
    }
  }
  render(){
    return(
      <div>
        <h2>Welcome to the Meme Generator</h2>
        {
          this.props.memes
          .slice(0, this.state.memeLimit)
          .map((meme, index) => {
            return (
              <h4 key={index}>{meme.name}</h4>
            )
          })
        }
        <div onClick={() => 
                           {
                             this.setState({memeLimit: this.state.memeLimit + 10})
                           }
                     }>Load 10 more memes...
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return state; 
}
//connect app to store 
export default connect(mapStateToProps, null)(App); 
