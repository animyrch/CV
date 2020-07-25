import React from 'react';
import PropTypes from 'prop-types';

class CvFooter extends React.Component {

	render() {
		return (
			<div>
				<footer id="cv-footer" className="flex content-center mt-12 text-center">
					<button className="nav-button arrow-left w-1/3"></button>
					<div className="page-number w-1/3">{this.props.page}/4</div>
					<button className="nav-button arrow-right w-1/3"></button>
				</footer>
			</div>
		);
	}
}

CvFooter.propTypes = {
	page: PropTypes.number.isRequired
}

export default CvFooter;

