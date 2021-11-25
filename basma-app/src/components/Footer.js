import React from 'react';
import { Link } from 'react-router-dom';
import LineIcon from 'react-lineicons';
import logo from '../assets/images/logo2.png';

function Footer() {
	return (
		<div className='footer'>
			<div className='p-3 py-5 d-flex flex-wrap flex-grow-1 justify-content-md-center align-items-start'>
				<div className='my-3 mx-md-3'>
					<div>
						<img src={logo} alt='' />

						<p className='text-muted'>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit.
							Dicta, vitae.
						</p>
					</div>
				</div>
				<nav className='my-3 mx-md-3'>
					<p className='text-white fw-bold fs-5'>About</p>
					<li className='list-unstyled p-0 m-0'>
						<Link to='#' className='text-decoration-none text-muted'>
							<LineIcon
								name='angle-double-right'
								style={{
									fontSize: '12px',
									fontWeight: 'bold',
									marginRight: '8px',
								}}
							/>
							About us
						</Link>
					</li>
					<li className='list-unstyled p-0 m-0'>
						<Link to='#' className='text-decoration-none text-muted'>
							<LineIcon
								name='angle-double-right'
								style={{
									fontSize: '12px',
									fontWeight: 'bold',
									marginRight: '8px',
								}}
							/>
							Contact us
						</Link>
					</li>
					<li className='list-unstyled p-0 m-0'>
						<Link to='#' className='text-decoration-none text-muted'>
							<LineIcon
								name='angle-double-right'
								style={{
									fontSize: '12px',
									fontWeight: 'bold',
									marginRight: '8px',
								}}
							/>
							Portfolio
						</Link>
					</li>
				</nav>
				<nav className='my-3 mx-md-3'>
					<p className='text-white fw-bold fs-5'>Support</p>
					<li className='list-unstyled'>
						<Link to='#' className='text-decoration-none text-muted'>
							<LineIcon
								name='angle-double-right'
								style={{
									fontSize: '12px',
									fontWeight: 'bold',
									marginRight: '8px',
								}}
							/>
							support@example.com
						</Link>
					</li>
					<li className='list-unstyled'>
						<Link to='#' className='text-decoration-none text-muted'>
							<LineIcon
								name='angle-double-right'
								style={{
									fontSize: '12px',
									fontWeight: 'bold',
									marginRight: '8px',
								}}
							/>
							+61 3 8376 6284
						</Link>
					</li>
					<li className='list-unstyled'>
						<Link to='#' className='text-decoration-none text-muted'>
							<LineIcon
								name='angle-double-right'
								style={{
									fontSize: '12px',
									fontWeight: 'bold',
									marginRight: '8px',
								}}
							/>
							Services
						</Link>
					</li>
				</nav>
				<nav className='my-3 mx-md-3'>
					<p className='text-white fw-bold fs-5'>Follow us</p>
					<li className='list-unstyled'>
						<Link to='#' className='text-decoration-none text-muted'>
							<LineIcon
								name='facebook-filled'
								style={{
									fontSize: '12px',
									fontWeight: 'bold',
									marginRight: '8px',
								}}
							/>
							Facebook
						</Link>
					</li>
					<li className='list-unstyled'>
						<Link to='#' className='text-decoration-none text-muted'>
							<LineIcon
								name='twitter-filled'
								style={{
									fontSize: '12px',
									fontWeight: 'bold',
									marginRight: '8px',
								}}
							/>
							Twitter
						</Link>
					</li>
					<li className='list-unstyled'>
						<Link to='#' className='text-decoration-none text-muted'>
							<LineIcon
								name='instagram-original'
								style={{
									fontSize: '12px',
									fontWeight: 'bold',
									marginRight: '8px',
								}}
							/>
							Instagram
						</Link>
					</li>
				</nav>
			</div>

			<p
				className='text-white text-center py-3 border-top border-1'
				style={{ fontSize: '14px' }}
			>
				Copyright © All Right Reserved
			</p>
		</div>
	);
}

export default Footer;
