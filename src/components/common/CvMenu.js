import React from 'react';
import PropTypes from 'prop-types';
import strings from '../../assets/strings';
import GetInTouchIndicator from './GetInTouchIndicator';
import { Link } from 'react-router-dom';

class CvMenu extends React.Component {
	menuItems = [
		{
			href: '',
			text: strings.navigation.me
		},
		{
			href: '',
			text: strings.navigation.work
		},
		{
			href: '',
			text: strings.navigation.education
		},
		{
			href: '',
			text: strings.navigation.skills
		}
	];

	constructor(props) {
		super(props);
		this.state = {
			hamburgerFlipped: false,
			page: ''
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
			<nav id="main-menu" className="bg-no-repeat relative text-center mt-10 z-30 xl:py-4 xl:px-16 xl:bg-menu-back xl:mt-0 xl:z-0 xl:absolute xl:right-0 xl:top-0">
				<div className={`page-indicator hidden top-0 right-0 absolute ${this.pageIndicatorPosition()} mt-12 w-8 h-8 bg-white transform rotate-45 xl:block`}></div>
				<ul>
					{this.menuItems.map(menuItem => {
						return this.navMenuItem(menuItem.href, menuItem.text);
					})}
				</ul>
			</nav>
			{this.displayClickOutsideDiv() }
		</div>;
	}

	navMenuItem = (href, text) => {
		return <Link to={text}>
					<li 
					key={text} 
					className="bg-teal-700 text-xl -ml-4 px-12 xl:inline xl:bg-opacity-0"
					onClick={this.clickedOnPage.bind(this, text)}
						>
						<span
							className="text-white hover:text-indigo-200"
						>{text}</span>
					</li>
				</Link>;
	}

	pageIndicatorPosition = () => {
		switch (this.state.page) {
			case strings.navigation.work:
				return 'mr-121';
			case strings.navigation.education:
				return 'mr-65';	
			case strings.navigation.skills:
				return 'mr-26';	
			default:
				return 'mr-130';
		}
	}

	clickedOnPage = (page) => {
		if (page !== this.state.page) {
			this.setState({page});
		}
		this.flipHamburger();
	}

	menuButton = () => {
		return (
		<div 
			className="w-12 xl:hidden" 
			onClick={this.flipHamburger}
			>
			<div className={`hamburger ${this.state.hamburgerFlipped ? 'hamburger-open' : ''}`}></div>
		</div>
		);
	}

	contactButton = () => {
		return (    
			<div className="">
				<div
					onClick={this.props.toggleContactModal.bind(this)}
					className="flex items-center flex-no-shrink mr-6 w-16 mt-1 xl:hidden"
					>
					<img className="-mt-2" src={strings.navigation.contact.image} alt="My contact information" />
				</div>
				<div
					onClick={this.props.toggleContactModal.bind(this)}
					className="hidden xl:block">
					<GetInTouchIndicator 
						mt="-mt-24"
					/>        
				</div>
			</div>  
		);
	}
	
	render() {
		return (
			<div className="h-10">
				<header 
					className="fixed top-0 flex items-center justify-between flex-wrap p-2 pt-4 bg-white w-full"
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
	toggleContactModal: PropTypes.func.isRequired
}

export default CvMenu;
