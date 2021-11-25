import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthContextWrapper } from './context/authContext';
import Home from './pages/Home';
import Signup from './pages/Signup';
import PrivateRoute from './PrivateRoute';

function App() {
	return (
		<Router>
			<AuthContextWrapper>
				<Routes>
					<Route exact path='/' element={<PrivateRoute />}>
						<Route exact path='/' element={<Home />} />
					</Route>
					<Route exact path='/register' element={<Signup />} />
					{/* <Route exact path='/login' element={<Login />} /> */}
				</Routes>
			</AuthContextWrapper>
		</Router>
	);
}

export default App;
