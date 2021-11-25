import React from 'react';
import bg from '../assets/images/bg-intro.png';
import banner from '../assets/images/banner.png';
import LineIcon from 'react-lineicons';

function Splash() {
	return (
		<div className='mt-5'>
			<img
				src={bg}
				alt='bg'
				class='position-absolute top-0 end-0 h-100'
				style={{ zIndex: -2, width: '720px', display: 'block' }}
			/>
			<div className='col-9 h-100 m-auto top-container'>
				<div className='top-container w-100 h-100 d-flex justify-content-between align-items-center'>
					<div>
						<div className='d-flex justify-content-start align-items-start'>
							<LineIcon
								name='line-dashed'
								style={{
									color: '#614CAB',
									fontSize: '30px',
									fontWeight: 'bold',
									marginRight: '10px',
								}}
							/>
							<p className='text-uppercase fw-bold'>Welcome to oya</p>
						</div>
						<p className='text-uppercase title'>
							A digital <br /> agency
						</p>
						<button className='btn btn-warning text-white p-2 px-4 me-3'>
							Get Started
						</button>
						<button className='btn btn-outline-warning text-black p-2 px-4'>
							Get Started
						</button>
					</div>
					<img
						src={banner}
						alt='bg'
						width='400px'
						height='400px'
						className='img'
						style={{ borderRadius: '30px' }}
					/>
				</div>
			</div>
		</div>
	);
}

export default Splash;
