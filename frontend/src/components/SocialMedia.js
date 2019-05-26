import React from 'react';
import { Link } from 'react-router-dom';

const SocialMedia = () => {
	return (
	  <div className='social-media-roll'>
	    <ul>
	      <li className='social-media-link'><Link to="https://www.linkedin.com/in/rich-peaua-004492125/" ><img className='social-media-img' alt='linkedIn' src={ require('../assets/images/icons/linkdin-blue.png') }/></Link></li>
	      <li className='social-media-link'><Link to="https://twitter.com/peauaio" ><img className='social-media-img' alt='github' src={ require('../assets/images/icons/git-hub-blue.png') }/></Link></li>
	      <li className='social-media-link'><Link to="https://github.com/lpeaua/PeauaWebDev" ><img className='social-media-img' alt='twitter' src={ require('../assets/images/icons/twitter-blue.png') } /></Link></li>
	    </ul>
	  </div>
	);
}

export default SocialMedia;