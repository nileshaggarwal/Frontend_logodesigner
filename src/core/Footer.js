import React from 'react';
import '../styles.css';

const Footer = () => {
	return (
		<footer className='footer'>
			<div className='row'>
				<div className='info col-md-6'>
					<p>• A Creative Mindset based in Goa.</p>
					<p>• logodesigner099@gmail.com</p>
					<p>• Goa, India</p>
				</div>
				<div className='socials col-md-6'>
					<ul className='social'>
						<li>
							<a
								target='_blank'
								rel='noopener noreferrer'
								className='socialname instagram'
								href='https://instagram.com/__logo_designer?igshid=o1o9i3zlbe64'
							>
								Instagram
							</a>
						</li>
						<li className='plus'>+</li>
						<li>
							<a
								target='_blank'
								rel='noopener noreferrer'
								className='socialname pinterest'
								href='https://in.pinterest.com/logodesigner099/illustrations/more_ideas/?ideas_referrer=1'
							>
								Pinterest
							</a>
						</li>
						<li className='plus'>+</li>
						<li>
							<a
								target='_blank'
								rel='noopener noreferrer'
								className='socialname behance'
								href='https://www.behance.net/logodesigner099'
							>
								Behance
							</a>
						</li>
						<li className='plus'>+</li>
						<li>
							<a
								target='_blank'
								rel='noopener noreferrer'
								className='socialname twitter'
								href='https://twitter.com/logodesigner099?s=08'
							>
								Twitter
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div className='copyright'>
				© Copyright 2020 Logo Designer Inc. All Rights Reserved.
			</div>
		</footer>
	);
};
export default Footer;
