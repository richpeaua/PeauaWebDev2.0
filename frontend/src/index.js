import React from 'react';
import ReactDOM from 'react-dom';
import {
  Route,
  Link,
  HashRouter,
  Switch
} from "react-router-dom";
import './assets/css/index.css';
import Blog from './pages/Blog.js';
import NotFound from './pages/NotFound.js';
import NavBar from './components/NavBar.js';

class BlogRoot extends React.Component {
  
  render() {
    

    return (
      <HashRouter>
        <div className="header">
          
          <h1><Link to='/' className='title'>Peaua.io</Link></h1>
           
        </div>

        <div className='navbar'>
           <NavBar />
        </div>
        <br></br>

        <div className="content">
          <Switch>
            <Route exact path='/Blog' component={ Blog }/>
            <Route path='/Projects'/>
            <Route path='/' />
            <Route component={ NotFound }/>
          </Switch>
        </div>
      </HashRouter>
    )
  }

}

ReactDOM.render(
  <BlogRoot />,
  document.getElementById('root')
  );


