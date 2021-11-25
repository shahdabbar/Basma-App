import React from 'react';
import Card from './Card';

function Services() {
	return (
		<div className='mt'>
			<p
				className='text-uppercase text-center m-2'
				style={{ fontSize: '12px', color: '#614CAB', fontWeight: '600' }}
			>
				Services
			</p>
			<h3 className='text-center fw-bold mb-3'>
				Choose what <br /> you like our services
			</h3>
			<div className='d-flex flex-wrap justify-content-center align-items-center'>
				<Card
					icon='wordpress-filled'
					title='WordPress'
					body='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias, doloremque totam. Recusandae accusamus!'
				/>
				<Card
					icon='vector'
					title='Logo Design'
					body='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias, doloremque totam. Recusandae accusamus!'
				/>
				<Card
					icon='keyword-research'
					title='Online Seo'
					body='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias, doloremque totam. Recusandae accusamus!'
				/>
				<Card
					icon='mobile'
					title='Mobile Apps'
					body='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias, doloremque totam. Recusandae accusamus!'
				/>
				<Card
					icon='radio-button'
					title='Copywriting'
					body='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias, doloremque totam. Recusandae accusamus!'
				/>
				<Card
					icon='bulb'
					title='Brand Strategy'
					body='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias, doloremque totam. Recusandae accusamus!'
				/>
			</div>
		</div>
	);
}

export default Services;
