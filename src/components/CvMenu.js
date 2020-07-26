import React from 'react';
import PropTypes from 'prop-types';
import strings from '../assets/strings';
//import contact from '../assets/contact.png';

class CvMenu extends React.Component {
	constructor(props) {
		super(props);
		this.state = {hamburgerFlipped: false};
	}

	flipHamburger = () => {
		const hamburgerState = this.state.hamburgerFlipped;
		this.setState({
			hamburgerFlipped: !hamburgerState
		});
	}

	navMenu = () => {
		if (this.state.hamburgerFlipped) {
			return (
				<nav className="absolute text-center w-full z-50 bg-white mt-10">
					<div onClick={this.clickedOnPage.bind(this, 1)}>{strings.navigation.me}</div>
					<div onClick={this.clickedOnPage.bind(this, 2)}>{strings.navigation.work}</div>
					<div onClick={this.clickedOnPage.bind(this, 3)}>{strings.navigation.education}</div>
					<div onClick={this.clickedOnPage.bind(this, 4)}>{strings.navigation.skills}</div>
					<div>{strings.navigation.contact}</div>
				</nav>
			);
		}
	}

	clickedOnPage = (page) => {
		this.props.updatePage(page);
		this.flipHamburger();
	}

	menuButton = () => {
		return (
		<div className="w-12" onClick={this.flipHamburger}>
			<div className={`hamburger ${this.state.hamburgerFlipped ? 'hamburger-open' : ''}`}></div>
		</div>
		);
	}

	contactButton = () => {
		return (
		<div className="flex items-center flex-no-shrink text-white mr-6 w-12 -m-4">
			<img src={strings.navigation.contact.image} alt="My contact information" />
		</div>
		);
	}
	
	render() {
		return (
			<div className="h-12">
				<header className="fixed top-0 flex items-center justify-between flex-wrap p-2 pt-4 bg-white z-50 w-full">
					{this.contactButton()}
					{this.menuButton()}
				</header>
				{this.navMenu()}
			</div>
        );
    }
};


CvMenu.propTypes = {
	updatePage: PropTypes.func.isRequired
}

export default CvMenu;
