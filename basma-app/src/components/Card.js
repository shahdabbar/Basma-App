import React from 'react';
import LineIcon from 'react-lineicons';

function Card({ icon, title, body }) {
	return (
		<div class='Card'>
			<LineIcon
				name={icon}
				style={{
					color: '#614CAB',
					fontSize: '35px',
					fontWeight: 'bold',
					marginBottom: '10px',
				}}
			/>
			<p class='fw-bold'>{title}</p>
			<p class='text-muted text-body'>{body}</p>
		</div>
	);
}

export default Card;
