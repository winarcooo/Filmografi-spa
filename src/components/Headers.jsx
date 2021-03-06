import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import NavbarApps from '../components/Navbar';
import logoAmovie from '../assets/images/logo.png';

class Headers extends Component {

  render() {
    return (
      	<header className="header-wrapper">
			<div className="container">
				<Link to="/" className="logo">
					<img className="logo-branding" alt='logo' src={logoAmovie}/>
				</Link>
				<NavbarApps/>
				<div className="control-panel">
					<Link to="" className="btn btn--sign"> Sign in</Link>
					<Link to="/" className="btn btn-md btn--warning btn--book"> Book a ticket</Link>
				</div>
			</div>
      	</header>
    );
  }
}

export default Headers;