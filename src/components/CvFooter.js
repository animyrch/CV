import React from 'react';
import PropTypes from 'prop-types';
import strings from '../assets/strings';

class CvFooter extends React.Component {

	goBackInNavigation = () => {
		if (this.props.page > 1) {
			return (
			<button 
				onClick={this.props.goToPreviousPage.bind()} 
				className="nav-button arrow-left flex items-center bg-teal-500 rounded-lg h-10 w-1/3 focus:outline-none" 
				/>
			);
		} else {
			return (
			<div className="w-1/3" />
			);
		}
	}

	buildContinueNavigation = () => {
		if (this.props.page < 4) {
			return (
			<button 
				onClick={this.props.goToNextPage.bind()} 
        className="nav-button arrow-right flex items-center bg-teal-500 rounded-lg h-10 w-1/3 focus:outline-none"
				/>
			);
		}
	}

	contactButton = () => {
		if (this.props.page === 4) {
			return (
			<input 
				className="arrow-right h-16" 
				type="image" 
				src={strings.navigation.contact.image} 
				alt="My contact information"
				onClick={this.props.toggleContactModal.bind(this)} 
				/>
			);
		}
	}

	render() {
		return (
			<div>
				<footer id="cv-footer" className="flex content-center mt-12 text-center">
					{this.goBackInNavigation()}
					<div className="page-number w-1/3">{this.props.page}/4</div>
					{this.buildContinueNavigation()}
					{this.contactButton()}
				</footer>
			</div>
		);
	}
}

CvFooter.propTypes = {
	page: PropTypes.number.isRequired,
	goToNextPage: PropTypes.func.isRequired,
	goToPreviousPage: PropTypes.func.isRequired,
	toggleContactModal: PropTypes.func.isRequired
}

export default CvFooter;

