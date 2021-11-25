import React from 'react';
import Card from './Card';

function About() {
	return (
		<div className='mt'>
			<p
				className='text-uppercase text-center m-2'
				style={{ fontSize: '12px', color: '#614CAB', fontWeight: '600' }}
			>
				About us
			</p>
			<h3 className='text-center fw-bold mb-3'>
				Our goal is to <br /> make your life easier
			</h3>
			<div className='d-flex flex-wrap justify-content-center align-items-center'>
				<Card
					icon='bulb'
					title='Create Idea'
					body='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias, doloremque totam. Recusandae accusamus!'
				/>
				<Card
					icon='sun'
					title='Smart Solutions'
					body='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias, doloremque totam. Recusandae accusamus!'
				/>
				<Card
					icon='support'
					title='Free Support'
					body='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias, doloremque totam. Recusandae accusamus!'
				/>
			</div>
		</div>
	);
}

export default About;
