import React, { Component } from 'react'; 
import { connect } from 'react-redux'; 
import RecipeItem from './RecipeItem'; 

class RecipeList extends Component {
  render(){
    console.log('this.props', this.props);
    console.log('this.prop.recipes', this.props.recipes);
    return (
      <div>
        { 
          this.props.recipes.map((recipe, index) => {
            return (
             <RecipeItem key={index} recipe={recipe}> 
             </RecipeItem>
            )
          })
        }
      </div>
    )
  }
}

function mapStateToProps(state){
  return state; 
}

export default connect(mapStateToProps, null)(RecipeList);

