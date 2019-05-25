import React from 'react';
import { Link } from 'react-router-dom';

const SocialMedia = () => {
	return (
	  <div className='social-media-roll'>
	    <ul>
	      <li className='social-media-link'><Link to="https://www.linkedin.com/in/rich-peaua-004492125/" ><img className='social-media-img' alt='linkedIn' src='https://www.dropbox.com/s/uvvj1ar614cbeje/linkdin-blue.png?dl=1'/></Link></li>
	      <li className='social-media-link'><Link to="https://twitter.com/peauaio" ><img className='social-media-img' alt='github' src='https://www.dropbox.com/s/y8z7yxfahwdw4bv/git-hub-blue.png?dl=1'/></Link></li>
	      <li className='social-media-link'><Link to="https://github.com/lpeaua/PeauaWebDev" ><img className='social-media-img' alt='twitter' src='https://www.dropbox.com/s/8q61ciphx9s19cr/twitter-blue.png?dl=1'/></Link></li>
	    </ul>
	  </div>
	);
}

export default SocialMedia;