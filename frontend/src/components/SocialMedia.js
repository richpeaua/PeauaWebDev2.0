import React from 'react';
import { Link } from 'react-router-dom';

const SocialMedia = () => {
	return (
	  <div className='social-media-roll'>
	    <ul>
	      <li className='social-media-link'><Link to="/" >LinkedIn</Link></li>
	      <li className='social-media-link'><Link to="/" >GitHub</Link></li>
	      <li className='social-media-link'><Link to="/" >Twitter</Link></li>
	    </ul>
	  </div>
	);
}

export default SocialMedia;