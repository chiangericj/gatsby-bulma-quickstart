import React from 'react';
import Navbar from './navbar.js'
import './style.scss';
import Helmet from './helmet';
import Header from './header';
import Midsection from './midsection';
import Footer from './footer';

const Layout = ({ children }) => (
	<div>
		<Helmet />
		<Navbar/>
		<Header />
		<Midsection />
		<Footer />
	</div>
);

export default Layout;
