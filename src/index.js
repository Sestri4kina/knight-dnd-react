import React from 'react';
import ReactDOM from 'react-dom';
import Board from './components/Board';
import { observe } from './components/Game';
import registerServiceWorker from './registerServiceWorker';
import './index.css';


observe(knightPosition => 
    ReactDOM.render(<Board knightPosition={knightPosition}/>, document.getElementById('root'))
);

registerServiceWorker();
