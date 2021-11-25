import React, { useEffect, useState, useRef } from 'react';
import logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';

function Header() {
	let listenerRef = useRef(null);
	const [scrollState, setScrollState] = useState('top');

	useEffect(() => {
		let listener = listenerRef.current;
		listener = document.addEventListener('scroll', (e) => {
			const scrolled = document.scrollingElement.scrollTop;
			if (scrolled >= 30) {
				if (scrollState !== 'bottom') {
					setScrollState('bottom');
				}
			} else {
				if (scrollState !== 'top') {
					setScrollState('top');
				}
			}
		});
		return () => {
			document.removeEventListener('scroll', listener);
		};
	}, [scrollState]);
	return (
		<nav
			className='col-12 mb-5 m-auto top-0 py-3 d-flex justify-content-between align-items-center fixed-top'
			style={{
				padding: '0 150px',
				backgroundColor: scrollState === 'top' ? 'transparent' : '#614CAB',
			}}
		>
			<img src={logo} alt='bg' />
			<div>
				<Link
					to='#'
					class='mx-2 px-1 text-white text-decoration-none nav-item'
				>
					Home
				</Link>
				<Link
					to='#'
					class='mx-2 px-1 text-white text-decoration-none nav-item'
				>
					About
				</Link>
				<Link
					to='#'
					class='mx-2 px-1 text-white text-decoration-none nav-item'
				>
					Services
				</Link>
				<Link
					to='#'
					class='mx-2 px-1 text-white text-decoration-none nav-item'
				>
					Portfolio
				</Link>
				<Link
					to='#'
					class='mx-2 px-1 text-white text-decoration-none nav-item'
				>
					Pricing
				</Link>
				<Link
					to='#'
					class='mx-2 px-1 text-white text-decoration-none nav-item'
				>
					Contact us
				</Link>
			</div>
		</nav>
	);
}

export default Header;
