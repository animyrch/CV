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
					<nav className="absolute text-center text-white w-full z-20 mt-10 -ml-3">
						{this.navMenuItem(this.clickedOnPage, 1, strings.navigation.me)}
						{this.navMenuItem(this.clickedOnPage, 2, strings.navigation.work)}
						{this.navMenuItem(this.clickedOnPage, 3, strings.navigation.education)}
						{this.navMenuItem(this.clickedOnPage, 4, strings.navigation.skills)}
						{this.navMenuItem(this.props.toggleContactModal, null, strings.navigation.contact.text)}
						<div 
							onClick={this.flipHamburger.bind(this)} 
							className="bg-transparent h-screen z-20"
							/>
					</nav>
				</div>
			);
		}
	}

	navMenuItem = (onClickMethod, bindValue, itemText) => {
		return (
		<div 
			className="bg-teal-500 text-2xl font-medium pb-2" 
			onClick={onClickMethod.bind(this, bindValue)}
			>
			{itemText}
		</div>
		);
	}

	clickedOnPage = (page) => {
		this.props.updatePage(page);
		this.flipHamburger();
	}

	menuButton = () => {
		return (
		<div 
			className="w-12" 
			onClick={this.flipHamburger}
			>
			<div className={`hamburger ${this.state.hamburgerFlipped ? 'hamburger-open' : ''}`}></div>
		</div>
		);
	}

	contactButton = () => {
		return (
		<div 
			onClick={this.props.toggleContactModal.bind(this)}
			className="flex items-center flex-no-shrink mr-6 w-12 -m-4"
			>
			<img src={strings.navigation.contact.image} alt="My contact information" />
		</div>
		);
	}
	
	render() {
		return (
			<div className="h-12">
				<header 
					className="fixed top-0 flex items-center justify-between flex-wrap p-2 pt-4 bg-white z-30 w-full"
					>
					{this.contactButton()}
					{this.menuButton()}
				</header>
				{this.navMenu()}
			</div>
        );
    }
};


CvMenu.propTypes = {
	updatePage: PropTypes.func.isRequired,
	toggleContactModal: PropTypes.func.isRequired
}

export default CvMenu;
