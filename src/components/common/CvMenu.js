import React from 'react';
import PropTypes from 'prop-types';
import strings from '../../assets/strings';
import GetInTouchIndicator from './GetInTouchIndicator';
import { Link } from 'react-router-dom';

class CvMenu extends React.Component {
	menuItems = [
		{
			href: 'me',
			text: strings.navigation.me
		},
		{
			href: 'work',
			text: strings.navigation.work
		},
		{
			href: 'education',
			text: strings.navigation.education
		},
		{
			href: 'skills',
			text: strings.navigation.skills
		}
	];

	constructor(props) {
		super(props);
		this.state = {
			hamburgerFlipped: false
		};
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

	displayClickOutsideDiv = () => {
		if (this.state.hamburgerFlipped) {
			return (
				<div 
				onClick={this.flipHamburger.bind(this)} 
				className="bg-transparent z-20 flex-1 overflow-auto xl:hidden"
				/>
			);
		}
	}

	navMenu = () => {
		return <div className={(this.state.hamburgerFlipped ? "flex " : "hidden xl:flex ")  + "flex-col h-screen"}>
			{this.contactButton()}
			<nav id="main-menu" className="bg-no-repeat relative text-center mt-10 z-30 xl:py-4 xl:px-16 xl:bg-menu-back xl:mt-0 xl:z-0 xl:absolute xl:right-0 xl:top-0">
				<div className={`page-indicator hidden top-0 right-0 absolute ${this.pageIndicatorPosition()} mt-12 w-8 h-8 bg-white transform rotate-45 xl:block`}></div>
				<ul>
					{this.menuItems.map(menuItem => {
						const menuItemMethod = this.clickedOnPage.bind(this, menuItem.href);
						return (
							<Link to={menuItem.href}>
								{this.navMenuItem(menuItem.text, menuItemMethod)}
							</Link>
						);
					})}
					<span className="xl:hidden">
						{this.navMenuItem(strings.navigation.contact.text, this.props.toggleContactModal.bind(this))}
					</span>
				</ul>
			</nav>
			{this.displayClickOutsideDiv() }
		</div>;
	}

	navMenuItem = (text, menuItemMethod) => {
		return (
			<li 
				key={text}
				className="bg-teal-700 text-xl -ml-4 px-12 py-4 xl:inline xl:bg-opacity-0"
				onClick={menuItemMethod}
			>
				<span
					className="text-white hover:text-indigo-200"
				>
					{text}
				</span>
			</li>
		);
	}

	pageIndicatorPosition = () => {
		switch (this.props.currentPage) {
			case this.menuItems[1].href:
				return 'mr-121';
			case this.menuItems[2].href:
				return 'mr-65';	
			case this.menuItems[3].href:
				return 'mr-26';	
			default:
				return 'mr-130';
		}
	}

	clickedOnPage = (page) => {
		this.props.updatePage(page);
		this.flipHamburger();
	}

	contactButton = () => {
		return (    
			<div className="">
				<div
					onClick={this.props.toggleContactModal.bind(this)}
					className="hidden xl:block">
					<GetInTouchIndicator 
						mt="-mt-20"
					/>        
				</div>
			</div>  
		);
	}

	navMenuMobile = () => {
		return (
			<nav 
				className="fixed top-0 left-0 p-2 pt-4 bg-white w-full z-20 xl:hidden"
				>
				{this.menuButtonMobile()}
				{this.contactButtonMobile()}
			</nav>
		);
	}


	contactButtonMobile = () => {
		return (
		<div
			onClick={this.props.toggleContactModal.bind(this)}
			className="contact-image-container flex items-center flex-no-shrink mr-6 w-16 mt-1 xl:hidden"
			>
			<img className="-mt-2" src={strings.navigation.contact.image} alt="My contact information" />
		</div>
		);
	}

	menuButtonMobile = () => {
		return (
		<div 
			className="w-12 fixed right-0 mt-3" 
			onClick={this.flipHamburger}
			>
			<div className={`hamburger ${this.state.hamburgerFlipped ? 'hamburger-open' : ''}`}></div>
		</div>
		);
	}
	

	render() {
		return (
			<div className="h-10">
				{this.navMenuMobile()}
				{this.navMenu()}
			</div>
        );
    }
};


CvMenu.propTypes = {
	toggleContactModal: PropTypes.func.isRequired,
	currentPage: PropTypes.string.isRequired,
	updatePage: PropTypes.func.isRequired
}

export default CvMenu;
