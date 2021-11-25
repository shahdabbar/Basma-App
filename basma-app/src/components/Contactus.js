import React from 'react';

function Contactus() {
	return (
		<div className='my-5 p-3 d-md-flex flex-wrap justify-content-center align-items-start'>
			<div className=''>
				<div className='mx-1 my-4'>
					<p className='fw-bold address-title'>Address</p>
					<p className='text-muted address-text'>
						121 King Street, Melbourne Victoria 3000 Australia
					</p>
				</div>
				<div className='mx-1 my-4'>
					<p className='fw-bold address-title'>Phone</p>
					<p className='text-muted address-text'>+61 3 8376 6284</p>
				</div>
				<div className='mx-1 my-4'>
					<p className='fw-bold address-title'>Email</p>
					<p className='text-muted address-text'>support@example.com</p>
				</div>
			</div>
			<div className='ms-md-3'>
				<form className=''>
					<div className='form-group d-flex justify-content-around align-items-start'>
						<input
							type='text'
							id='name'
							className='form-control w-100 my-3 me-3 border-0'
							name='name'
							placeholder='Name'
						/>
						<input
							type='email'
							id='email'
							className='form-control my-3 border-0'
							name='email'
							placeholder='Email Address'
						/>
					</div>

					<div className='form-group'>
						<input
							type='text'
							className='form-control my-1 border-0'
							id='subject'
							name='subject'
							placeholder='Subject'
						/>
					</div>

					<div className='form-group'>
						<textarea
							type='text'
							className='form-control my-3 border-0'
							id='message'
							rows={4}
							name='message'
							placeholder='Message'
						/>
					</div>

					<div className='d-flex justify-content-center'>
						<button type='submit' className='btn btn-warning text-white'>
							Send Message
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Contactus;
