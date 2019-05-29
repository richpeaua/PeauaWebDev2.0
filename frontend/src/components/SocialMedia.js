import React from 'react';
import { Link } from 'react-router-dom';

const SocialMedia = () => {
	return (
	  <div className='social-media-roll'>
	    <ul>
	      <li className='social-media-link'><a href="https://www.linkedin.com/in/rich-peaua-004492125/" target='_blank'><img className='social-media-img' alt='linkedIn' src={ require('../assets/images/icons/linkdin-blue.png') }/></a></li>
	      <li className='social-media-link'><a href="https://github.com/lpeaua/PeauaWebDev" target='_blank'><img className='social-media-img' alt='github' src={ require('../assets/images/icons/git-hub-blue.png') }/></a></li>
	      <li className='social-media-link'><a href="https://twitter.com/peauaio" target='_blank'><img className='social-media-img' alt='twitter' src={ require('../assets/images/icons/twitter-blue.png') } /></a></li>
	    </ul>
	  </div>
	);
}

export default SocialMedia;