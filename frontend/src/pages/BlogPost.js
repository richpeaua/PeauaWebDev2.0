import React from 'react';
import { Link, Route } from 'react-router-dom';

class BlogPost extends React.Component {

    render() {
        console.log( this.props.posts[0] , this.props.match.params.postId)
        
       let post;
       if (this.props.posts[0] !== undefined) {
	       for (let i = 0; i < this.props.posts.length; i++) {
		        if (this.props.posts[i].id === parseInt(this.props.match.params.postId)) {
		        	post = this.props.posts[i];
		        } 

	        }
        } else {
	        post = {'title' : 'default'}
	            
	    }
        return (

          <div className='blog-post-wrapper'>
            <h1>{post.title}</h1>
            <h2>{post.published}</h2>
            <p>{post.body}</p>
          </div>
        )

      }

}
export default BlogPost;