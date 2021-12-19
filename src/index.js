import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const myfirstelement = 
    <BrowserRouter>
         <App />
    </BrowserRouter>
   ;

ReactDOM.render(myfirstelement, document.getElementById('root'));