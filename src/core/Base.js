import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';
import logo from '../images/trans.png';
import Searchbox from './Searchbox';

const Base = ({ onSearchChange, route }) => {
	return (
		<header className='navbar'>
			<div className='row'>
				<ul className='col-lg-4 col-md-6 nav-tabs'>
					<li className='nav-item logo-box'>
						<Link to='/'>
							<img className='logo' src={logo} alt='Brand logo' />
							<span className='logo-text'>Logo Designer</span>
						</Link>
					</li>
				</ul>
				<div className='col-lg-4 col-md-6'>
					<ul className='nav nav-tabs'>
						<li className='text nav-item'>
							<Link className='navlink' to='/'>
								Home
							</Link>
						</li>
						<li className='nav-item text'>
							<Link className='navlink' to='/explore'>
								Explore
							</Link>
						</li>
						<li className='nav-item text'>
							<Link className='navlink' to='/aboutme'>
								About Me
							</Link>
						</li>
					</ul>
				</div>
				<div className='searchBox col-lg-4 col-md-12'>
					{route === 69 ? <Searchbox onSearchChange={onSearchChange} /> : ''}
				</div>
			</div>
		</header>
	);
};

export default Base;
