import React from 'react';
import Image from './Image';
import portfolio1 from '../assets/images/portfolio1.jpeg';
import portfolio2 from '../assets/images/portfolio2.jpeg';
import portfolio3 from '../assets/images/portfolio3.jpeg';
import portfolio4 from '../assets/images/portfolio4.jpeg';
import portfolio5 from '../assets/images/portfolio5.jpeg';
import portfolio6 from '../assets/images/portfolio6.jpeg';

function Portfolio() {
	return (
		<div className='mt-5'>
			<p
				className='text-uppercase text-center m-2'
				style={{ fontSize: '12px', color: '#614CAB', fontWeight: '600' }}
			>
				Portfolio
			</p>
			<h3 className='text-center fw-bold mb-5'>
				See our <span className='portfolio_title'> amazing </span> <br />{' '}
				<span className='portfolio_title'> portfolio </span>
				collection
			</h3>
			<div className=''>
				<div className='text-center'>
					<button className='btn btn-outline-primary active mx-3 px-3 py-1 text-black text-active-white'>
						Show All
					</button>
					<button className='btn btn-outline-primary mx-3 text-black px-3 py-1'>
						Graphic
					</button>
					<button className='btn btn-outline-primary mx-3 text-black px-3 py-1'>
						Landing
					</button>
					<button className='btn btn-outline-primary mx-3 text-black px-3 py-1'>
						Art design
					</button>
				</div>
				<div className='mt-4 d-flex flex-wrap justify-content-center align-items-center'>
					<Image url={portfolio1} />
					<Image url={portfolio2} />
					<Image url={portfolio3} />
					<Image url={portfolio4} />
					<Image url={portfolio5} />
					<Image url={portfolio6} />
				</div>
			</div>
		</div>
	);
}

export default Portfolio;
