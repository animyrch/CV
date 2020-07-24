import React from 'react';
import './App.css';
import strings from './assets/strings.json';

class App extends React.Component {
	render() {
		return (
			<div className="App p-3">
				<header>
					<nav className="flex justify-between">
						<div className="contact-button">Contact</div>
						<div className="menu-icon">Menu</div>				
					</nav>
					<nav className="menu hidden">
						<div>About Me</div>
						<div>Work Experience</div>
						<div>Education</div>
						<div>Skills</div>
						<div>Contact Me</div>
					</nav>
				</header>
				<img src={require('./assets/myPhoto.jpg')} alt="me" className="w-1/4 m-auto" />
				<div className="my-name">{strings.content.name}</div>
				<div className="personal-summary">{strings.content.personal}</div>
				<div className="mission-statement">{strings.content.mission}</div>
				<footer className="flex content-center">
					<div className="previous-page w-1/3">{strings.navigation.previous}</div>
					<div className="page-number w-1/3">1/4</div>
					<div className="next-page w-1/3">{strings.navigation.next}</div>
				</footer>
			</div>
		);
	}
}




export default App;
