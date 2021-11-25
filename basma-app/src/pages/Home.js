import React from 'react';
import About from '../components/About';
import Header from '../components/Header';
import '../styles/home.css';
import Portfolio from '../components/Portfolio';
import Services from '../components/Services';
import PricingTable from '../components/PricingTable';
import Contactus from '../components/Contactus';
import Footer from '../components/Footer';
import Splash from '../components/Splash';

function Home() {
	return (
		<div>
			<Header />
			<Splash />
			<About />
			<Portfolio />
			<Services />
			<PricingTable />
			<Contactus />
			<Footer />
		</div>
	);
}

export default Home;
