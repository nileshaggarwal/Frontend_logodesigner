import search from '../images/search.png';
import React from 'react';
import "../styles.css"

const Searchbox = ({ onSearchChange }) => {
	return (
		<form className='search-box' style={{ width: '100%' }}>
			<input
				className='search-txt'
				type='text'
				onChange={() => {
					var inp = document.getElementById('searchLogos');
					onSearchChange(inp.value);
					if (inp.value == '') inp.style.width = '0px';
					else inp.style.width = '240px';
				}}
				name=''
				placeholder='Type to search...'
				id='searchLogos'
			/>
			<span className='search-btn' href='#'>
				<img className='search-logo' src={search} alt='search button' />
			</span>
		</form>
	);
};

export default Searchbox;
