import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
  {id:1, message:'Hi!', likesCount: 5},
  {id:2, message:'My first post', likesCount: 15},
  {id:3, message:'BlaBlaBla', likesCount: 1},
  {id:4, message:'YA, YA, Naturlich!', likesCount: 444}
];

let dialogs =[
  {id:1, name:'Dimych'},
  {id:2, name:'Andrey'},
  {id:3, name:'Sveta'},
  {id:4, name:'Sasha'},
  {id:5, name:'Victor'},
  {id:6, name:'Valera'}
]
let messages = [
      {id:1, message:"Hi!"},
      {id:2, message:"What?"},
      {id:3, message:"Why?"}
  ]

ReactDOM.render(<App posts={posts} dialogs={dialogs} messages={messages}/>,
  document.getElementById('root')
);

reportWebVitals();
