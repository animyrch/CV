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
		const hamburgerOpen = this.state.hamburgerFlipped;
		if (!hamburgerOpen) {
			window.scrollTo(0, 0);
		}
		this.setState({
			hamburgerFlipped: !hamburgerOpen
		});
	}

	navMenu = () => {
		if (this.state.hamburgerFlipped) {
			return (
				<div>
					<nav className="absolute text-center text-white w-full z-50 mt-10 -ml-3">
						<div className="bg-blue-500 text-2xl font-medium pb-2" onClick={this.clickedOnPage.bind(this, 1)}>{strings.navigation.me}</div>
						<div className="bg-blue-500 text-2xl font-medium pb-2" onClick={this.clickedOnPage.bind(this, 2)}>{strings.navigation.work}</div>
						<div className="bg-blue-500 text-2xl font-medium pb-2" onClick={this.clickedOnPage.bind(this, 3)}>{strings.navigation.education}</div>
						<div className="bg-blue-500 text-2xl font-medium pb-2" onClick={this.clickedOnPage.bind(this, 4)}>{strings.navigation.skills}</div>
						<div className="bg-blue-500 text-2xl font-medium pb-2">{strings.navigation.contact.text}</div>
						<div onClick={this.flipHamburger.bind(this)} className="bg-transparent h-screen z-20"></div>
					</nav>
				</div>
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
				<header className="fixed top-0 flex items-center justify-between flex-wrap p-2 pt-4 bg-white z-40 w-full">
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
