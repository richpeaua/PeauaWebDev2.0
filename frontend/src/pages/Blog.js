import React from 'react';
import axios from 'axios';
import SocialMedia from '../components/SocialMedia.js';
import { Link } from 'react-router-dom';

class Blog extends React.Component {
  state = {
    posts: [],
    displayBlogBods: true
  };

  componentDidMount(){
    axios.get('http://api.peaua.io:8000/api/posts.json')
    .then(res => {
      const posts = res.data;
      this.setState({ posts });
    })
  }
  
  BlogBody(post){
	return (
		<div className='blog-bod'>
			<p>{ post.body }</p>
		</div>
	)
  }

  render() {
  	return (
  	  <div className='blog-main'>
  	    <h1>Blog</h1>
        <div className='blog-wrapper'>

          <div className='social-media-wrapper'>
            <SocialMedia />
          </div>

          <div className='blog-post-wrapper'>
      	    <ul>
            { this.state.posts.map(post =>
              <div className='blog-post-container'>
                <li className='blog-post' key={ post.id }><Link to='/'> { post.title }</Link></li> 
                <p className='published'> { post.published }</p>
                <div className='tag-cont'>
                  <ul className='tag-list'>{ post.tags.map( tag =>
                    <li className='tag'>{tag}</li>)}
                  </ul>
                </div>
              </div> ) }
            </ul>
          </div>

  	    </div>

      </div>	
  	)
  }

}

export default Blog;