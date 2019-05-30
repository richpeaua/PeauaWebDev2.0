import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
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
import BlogPost from './pages/BlogPost.js';

class Home extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
    posts: []
    };
  }

  componentDidMount(){
    axios.get('https://api.peaua.io/api/posts.json')
    .then(res => {
      const posts = res.data;
      this.setState({ posts });
    })
  }

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
            <Route exact path='/'/>
            <Route path='/Projects/'/>
            <Route path='/Blog/' render={(props) => <Blog posts={this.state.posts}/> }/>
            <Route component={ NotFound } />
          </Switch>
        </div>
      </HashRouter>
    )
  }

}

ReactDOM.render(
  <Home />,
  document.getElementById('root')
  );


