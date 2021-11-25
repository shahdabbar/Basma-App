import React from 'react';

function PricingCard({ status, price, active }) {
	const style =
		status === 'Standart' || status === 'Premium' ? '' : 'text-muted';
	const style2 = status === 'Premium' ? '' : 'text-muted';

	return (
		<div class={`pricing-card ${active ? 'active' : ''}`}>
			<p class='fw-bold'>{status}</p>
			<p class='price'>
				<span>$</span>
				{price}
			</p>
			<div className=''>
				<p>Responsive</p>
				<p>Documentation</p>
				<p className={`${style}`}>Support</p>
				<p className={`${style}`}>Multimedia</p>
				<p className={`${style} ${style2}`}>Creative</p>
				<p className={`${style} ${style2}`}>Modern</p>
				<p className={`${style} ${style2}`}>Free Update</p>
			</div>
			<button className='btn btn-warning pricing-btn text-white px-4 mt-0'>
				Get Started
			</button>
		</div>
	);
}

export default PricingCard;
