import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/authContext';
import '../styles/signup.css';
import logo from '../assets/images/logo.png';

function Signup() {
	const navigate = useNavigate();
	const { register } = useContext(AuthContext);
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [password_confirmation, setPasswordConfirmation] = useState('');

	useEffect(() => {
		if (localStorage.getItem('token')) {
			navigate('/');
		}
	}, [navigate]);

	const handleSubmit = (e) => {
		e.preventDefault();
		register(name, email, password, password_confirmation);
	};
	return (
		<div className='container'>
			<div className='myCard'>
				<div className='row'>
					<div className='col-md-6'>
						<div className='myLeftSide'>
							<form
								className='myForm text-center'
								onSubmit={handleSubmit}
							>
								<header>Create new account</header>
								<div className='form-group'>
									<input
										type='text'
										id='name'
										className='form-control my-3'
										name='name'
										label='Name'
										placeholder='Name'
										onChange={(e) => setName(e.target.value)}
									/>
								</div>

								<div className='form-group'>
									<input
										type='email'
										id='email'
										className='form-control my-3'
										name='email'
										label='Email'
										placeholder='Email'
										onChange={(e) => setEmail(e.target.value)}
									/>
								</div>
								<div className='form-group'>
									<input
										type='password'
										className='form-control my-3'
										id='password'
										name='password'
										label='Password'
										placeholder='Password'
										onChange={(e) => setPassword(e.target.value)}
									/>
								</div>
								<div className='form-group'>
									<input
										type='password'
										className='form-control my-3'
										id='passwordConfirmation'
										name='passwordConfirmation'
										label='Password Confirmation'
										placeholder='Password Confirmation'
										onChange={(e) =>
											setPasswordConfirmation(e.target.value)
										}
									/>
								</div>

								<button type='submit' className='btn btn-success'>
									Create Account
								</button>
							</form>
						</div>
					</div>
					<div className='col-md-6'>
						<div className='myRightSide'>
							<div className='box'>
								<img src={logo} alt='bg' className='ms-5' />
								<div className='text-uppercase text'>
									A digital agency
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Signup;
