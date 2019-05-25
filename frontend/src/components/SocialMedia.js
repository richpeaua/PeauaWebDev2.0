import React from 'react';
import { Link } from 'react-router-dom';

const SocialMedia = () => {
	return (
	  <div className='social-media-roll'>
	    <ul>
	      <li className='social-media-link'><Link to="https://www.linkedin.com/in/rich-peaua-004492125/" ><img alt='linkedIn' href='https://dl.dropbox.com/s/uvvj1ar614cbeje/linkdin-blue.png?dl=0'/></Link></li>
	      <li className='social-media-link'><Link to="https://twitter.com/peauaio" ><img alt='github' href='https://dl.dropbox.com/s/y8z7yxfahwdw4bv/git-hub-blue.png?dl=0'/></Link></li>
	      <li className='social-media-link'><Link to="https://github.com/lpeaua/PeauaWebDev" ><img alt='twitter' href='https://dl.dropbox.com/s/8q61ciphx9s19cr/twitter-blue.png?dl=0'/></Link></li>
	    </ul>
	  </div>
	);
}

export default SocialMedia;