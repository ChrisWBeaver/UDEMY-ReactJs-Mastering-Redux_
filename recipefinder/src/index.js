import React from 'react'; 
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './components/App';
import FavouriteRecipeList from './components/FavoriteList';

import { createStore } from 'redux'; 
import { Provider } from 'react-redux'; 
import rootReducer from './reducers'; 

const store = createStore(rootReducer);

store.subscribe( () => console.log('store', store.getState())); 

ReactDOM.render(
        <Provider store={store}>
          <BrowserRouter>
            <Switch>
              <Route exact={true} path="/" component={App} />
              <Route path="/favorites" component={FavouriteRecipeList}/>
            </Switch>
          </BrowserRouter>
          </Provider>
         ,document.getElementById('root'));
