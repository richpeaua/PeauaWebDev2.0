import React from 'react';
import SocialMedia from '../components/SocialMedia.js';
import { 
  Link,
  Switch,
  Route
   } from 'react-router-dom';
import BlogPost from './BlogPost.js';


class Blog extends React.Component {
  
  blogPostWrapper = () => {
    return (
      <div className='blog-post-wrapper'>
      <h1 className='blog-title'>Blog</h1>
        <ul>
          { this.props.posts.map(post =>
          <div className='blog-post-container'>
            <li className='blog-post' key={ post.id }><Link to={`/Blog/${post.id}`}> { post.title }</Link></li> 
            <p className='published'> { post.published }</p>
            <div className='tag-cont'>
              <ul className='tag-list'>{ post.tags.map( tag =>
                <li className='tag'>{tag}</li>)}
              </ul>
            </div>
          </div> ) }
        </ul>
      </div>
    )
  
  }
    

  render() {

  	return (
  	  <div className='blog-main'>
        
        <div className='blog-wrapper'>

          <div className='social-media-wrapper'>
            <SocialMedia />
          </div>

          <Switch>
          <Route exact path='/Blog/' component={ this.blogPostWrapper } />
          <Route path='/Blog/:postId' render={ (props) => <BlogPost {...props} posts={this.props.posts}/>}/>
          </Switch> 
  	    
        </div>

      </div>
  	)
  }

}

export default Blog;