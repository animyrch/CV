import React from 'react';
import { content } from '../assets/strings.json';

class AboutMe extends React.Component {

	render() {
		return (
			<div>
				<img src={require('../assets/myPhoto.jpg')} alt="me" className="w-1/4 m-auto" />
				<div className="my-name text-2xl">{content.name}</div>
				<div className="personal-summary">{content.personal}</div>
				<blockquote className="mission-statement text-xl">{content.mission}</blockquote>
			</div>
		);
	}
}

export default AboutMe;
