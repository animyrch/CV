import React from 'react';
import PropTypes from 'prop-types';
import strings from '../../assets/strings';
import { Link } from 'react-router-dom';

class CvFooter extends React.Component {

	menuItems = [ // duplicate
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

	buildContinueNavigation = () => {
		let nextPage = '';
		let nextPageName = '';
		switch (this.props.currentPage) {
			case this.menuItems[1].href:
				nextPage = this.menuItems[2].href;
				nextPageName = this.menuItems[2].text;
				break;
			case this.menuItems[2].href:
				nextPage = this.menuItems[3].href;
				nextPageName = this.menuItems[3].text;
				break;
			case strings.navigation.skills:
				return '';
			case this.menuItems[0].href:
			default:
				nextPage = this.menuItems[1].href;
				nextPageName = this.menuItems[1].text;
		}
		return (
			<div className="m-auto"
				onClick={this.props.updatePage.bind(this, nextPage)}>
				<Link to={nextPage}>
					<div className="text-white p-3 rounded-full bg-teal-700">
						<span>{strings.navigation.see} {nextPageName}</span>
					</div>
				</Link>
			</div>
		);
	}

	contactButton = () => {
		return (
			<div className="m-auto">
					<input 
						className="h-16 block" 
						type="image" 
						src={strings.navigation.contact.image} 
						alt="My contact information"
						onClick={this.props.toggleContactModal.bind(this)} 
						/>
				<strong>{strings.navigation.contact.text}</strong> 
			</div>
		);
	}

	render() {
		return (
			<div>
				<footer id="cv-footer" className="flex content-center mt-12 text-center">
					{(
					this.props.currentPage === this.menuItems[3].href ?
						this.contactButton() :
						this.buildContinueNavigation()
					)}
				</footer>
			</div>
		);
	}
}

CvFooter.propTypes = {
	toggleContactModal: PropTypes.func.isRequired,
	currentPage: PropTypes.string.isRequired,
	updatePage: PropTypes.func.isRequired
}

export default CvFooter;

