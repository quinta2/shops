import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/base.css'
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux'
import {BrowserRouter,Route} from 'react-router-dom'
import {createStore} from 'redux'
import reducer from './store/reducer'
import state from './store/state'
const store=createStore(reducer,state)

ReactDOM.render(
  <Provider store={store}>
       <BrowserRouter>
   <Route component={App}/>
   </BrowserRouter>
  </Provider>
  


    ,
     document.getElementById('root')
    );
registerServiceWorker();
