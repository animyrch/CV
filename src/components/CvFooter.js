import React from 'react';
import PropTypes from 'prop-types';
import { navigation } from '../assets/strings.json';

class CvFooter extends React.Component {

	render() {
		return (
			<div>
				<footer className="flex content-center mt-12">
					<div className="previous-page w-1/3">{navigation.previous}</div>
					<div className="page-number w-1/3">{this.props.page}/4</div>
					<div className="next-page w-1/3">{navigation.next}</div>
				</footer>
			</div>
		);
	}
}

CvFooter.propTypes = {
	page: PropTypes.number.isRequired
}

export default CvFooter;

