import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from './Redux/state';
import {addPost} from './Redux/state';
import { BrowserRouter } from 'react-router-dom';

//addPost('ddd');

export let rerenderEntireTree = () => {

ReactDOM.render(
     <BrowserRouter>
        <App state={state} addPost={addPost}/>
     </BrowserRouter>,
      document.getElementById('root'));
}
rerenderEntireTree();

reportWebVitals();
