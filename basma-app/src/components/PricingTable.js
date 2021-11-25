import React from 'react';
import PricingCard from './PricingCard';

function PricingTable() {
	return (
		<div className='my-5 pb-5'>
			<p
				className='text-uppercase text-center m-2'
				style={{ fontSize: '12px', color: '#614CAB', fontWeight: '600' }}
			>
				Pricing Table
			</p>
			<h3 className='text-center fw-bold mb-3'>Your plance, your choise</h3>
			<div className='mt-4 d-flex flex-wrap justify-content-center align-items-center'>
				<PricingCard status='Basic' price='15' />
				<PricingCard
					status='Standart'
					price='30'
					className='active'
					active
				/>
				<PricingCard status='Premium' price='50' />
			</div>
		</div>
	);
}

export default PricingTable;
