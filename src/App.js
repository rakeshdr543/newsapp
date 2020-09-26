import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components.js/Navbar';
import EnglishNews from './screans/EnglishNews';

function App() {
  return (<>
     
     <BrowserRouter>
     <Navbar/>
       <Route path='/' exact={true} component={EnglishNews}/>
     </BrowserRouter>
    </>
  
  );
}

export default App;
