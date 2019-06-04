import React from 'react';
import ReactMarkdown from "react-markdown";
import CodeBlock from '../components/CodeBlock.js';
import '../assets/css/Markdown.css'

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
	        post = {

            'title' : 'default',
            'published' : 'default',
            'body' : 'default',
            'tags' : ['def1', 'def2']

          }
	            
	    }
        return (

          <div className='blog-post-wrapper'>
            <h1 id='post-title'>{post.title}</h1>
            <h2 className='post-published'>{post.published}</h2>
            
            <div className='post-tag-wrapper'>
              <ul>{ post.tags.map(tag => 
                <li className='tag' id='post-tag'>{tag}</li>)
                   
              }</ul>
  
            </div>
            <br>
            </br>
            <div >
            <p >{<ReactMarkdown className='post-body' id='post-body' source={post.body} renderers={{ code: CodeBlock }} />}</p>
            </div>
          </div>
        )

      }

}
export default BlogPost;