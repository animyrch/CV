import React from 'react';
import PropTypes from 'prop-types';
import strings from '../assets/strings';

class CvFooter extends React.Component {

	goBackInNavigation = () => {
		if (this.props.page > 1) {
			return (
			<button 
				onClick={this.props.goToPreviousPage.bind(this)} 
        className="nav-button arrow-left flex items-center bg-teal-500 rounded-lg h-10 w-1/3 focus:outline-none xl:hidden" 
				/>
			);
		} else {
			return (
        <div className="w-1/3 xl:hidden" />
			);
		}
	}

	buildContinueNavigation = () => { 
		if (this.props.page < 4) {
			return (
        <button 
          onClick={this.props.goToNextPage.bind(this)} 
          className="nav-button arrow-right flex items-center bg-teal-500 rounded-lg h-10 w-1/3 focus:outline-none text-white xl:hidden">
        </button>
			)
		}
	}

	contactButton = () => {
		if (this.props.page === 4) {
			return (
        <div className="-ml-5 -mt-5 xl:hidden">
			  <input 
				  className="arrow-right h-16 block" 
				  type="image" 
				  src={strings.navigation.contact.image} 
				  alt="My contact information"
				  onClick={this.props.toggleContactModal.bind(this)} 
				  />
          <strong>{strings.navigation.contact.text}</strong> 
      </div>
			);
		}
	}

	render() {
		return (
			<div>
				<footer id="cv-footer" className="flex content-center mt-12 text-center">

          <div className="w-1/3 hidden xl:block" />
					{this.goBackInNavigation()}
          <div className="page-number w-1/3 xl:hidden">{this.props.page}/4</div>
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

