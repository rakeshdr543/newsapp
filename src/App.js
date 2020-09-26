import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components.js/Navbar';
import IndiaNews from './screens/IndiaNews';
import Uknews from './screens/UkNews';
import UsaNews from './screens/UsaNews';

function App() {
  return (<>
     
     <BrowserRouter>
     <Navbar/>
       <Route path='/' exact={true} component={IndiaNews}/>
       <Route path='/us' component={UsaNews}/>
       <Route path='/uk' component={Uknews}/>
     </BrowserRouter>
    </>
  
  );
}

export default App;
