import React from 'react';
import { navigation } from '../assets/strings.json';

class CvMenu extends React.Component {
	render() {
		return (
			<header>
				<nav className="flex justify-between">
				    <div className="contact-button">Contact</div>
				    <div className="menu-icon">Menu</div>
			    </nav>
			    <nav className="menu hidden">
			        <div>{navigation.me}</div>
			        <div>{navigation.work}</div>
			        <div>{navigation.education}</div>
			        <div>{navigation.skills}</div>
			        <div>{navigation.contact}</div>
		        </nav>
	        </header>
        );
    }
};

export default CvMenu;
