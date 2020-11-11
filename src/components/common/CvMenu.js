import React, { useState } from 'react';
import PropTypes from 'prop-types';
import strings from '../../assets/strings';
import GetInTouchIndicator from './GetInTouchIndicator';
import { Link } from 'react-router-dom';

function CvMenu (props) {
	const menuItems = [
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

	const [hamburgerFlipped, setHamburger] = useState(false);

	const flipHamburger = () => {
		if (!hamburgerFlipped) {
			window.scrollTo(0, 0);
		}
		setHamburger(!hamburgerFlipped);
	}

	const displayClickOutsideDiv = () => {
		if (hamburgerFlipped) {
			return (
				<div 
				onClick={flipHamburger()} 
				className="bg-transparent z-20 flex-1 overflow-auto xl:hidden"
				/>
			);
		}
	}

	const navMenu = () => {
		return <div className={(hamburgerFlipped ? "flex " : "hidden xl:flex ")  + "flex-col h-screen"}>
			{contactButton()}
			<nav id="main-menu" className="bg-no-repeat relative text-center mt-10 z-30 xl:py-4 xl:px-16 xl:bg-menu-back xl:mt-0 xl:z-0 xl:absolute xl:right-0 xl:top-0">
				<div className={`page-indicator hidden top-0 right-0 absolute ${pageIndicatorPosition()} mt-12 w-8 h-8 bg-white transform rotate-45 xl:block`}></div>
				<ul>
					{menuItems.map(menuItem => {
						const menuItemMethod = clickedOnPage(menuItem.href);
						return (
							<Link to={menuItem.href}>
								{navMenuItem(menuItem.text, menuItemMethod)}
							</Link>
						);
					})}
					<span className="xl:hidden">
						{navMenuItem(strings.navigation.contact.text, props.toggleContactModal)}
					</span>
				</ul>
			</nav>
			{ displayClickOutsideDiv() }
		</div>;
	}

	const navMenuItem = (text, menuItemMethod) => {
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

	const pageIndicatorPosition = () => {
		switch (props.currentPage) {
			case menuItems[1].href:
				return 'mr-121';
			case menuItems[2].href:
				return 'mr-65';	
			case menuItems[3].href:
				return 'mr-26';	
			default:
				return 'mr-130';
		}
	}

	const clickedOnPage = (page) => () => {
		props.updatePage(page);
		flipHamburger();
	}

	const contactButton = () => {
		return (    
			<div className="">
				<div
					onClick={props.toggleContactModal}
					className="hidden xl:block">
					<GetInTouchIndicator 
						mt="-mt-20"
					/>        
				</div>
			</div>  
		);
	}

	const navMenuMobile = () => {
		return (
			<nav 
				className="fixed top-0 left-0 p-2 pt-4 bg-white w-full z-20 xl:hidden"
				>
				{menuButtonMobile()}
				{contactButtonMobile()}
			</nav>
		);
	}


	const contactButtonMobile = () => {
		return (
		<div
			onClick={props.toggleContactModal}
			className="contact-image-container flex items-center flex-no-shrink mr-6 w-16 mt-1 xl:hidden"
			>
			<img className="-mt-2" src={strings.navigation.contact.image} alt="My contact information" />
		</div>
		);
	}

	const menuButtonMobile = () => {
		return (
		<div 
			className="w-12 fixed right-0 mt-3" 
			onClick={flipHamburger}
			>
			<div className={`hamburger ${hamburgerFlipped ? 'hamburger-open' : ''}`}></div>
		</div>
		);
	}
	
	return (
		<div className="h-10">
			{navMenuMobile()}
			{navMenu()}
		</div>
	);
};


CvMenu.propTypes = {
	toggleContactModal: PropTypes.func.isRequired,
	currentPage: PropTypes.string.isRequired,
	updatePage: PropTypes.func.isRequired
}

export default CvMenu;
