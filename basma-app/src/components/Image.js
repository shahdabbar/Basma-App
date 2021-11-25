import React from 'react';

function Image({ url }) {
	return (
		<div className='image'>
			<img src={url} alt='' width='100%' height='100%' />
		</div>
	);
}

export default Image;
