import React from 'react';
import PropTypes from 'prop-types';

class SectionTitleFile extends React.Component {
	render() {
		return (
			<h2 className="underline text-center text-lg">{this.props.title.toUpperCase()}</h2>
		);
	}
}

SectionTitleFile.propTypes = {
	title: PropTypes.string.isRequired
}

export default SectionTitleFile;

