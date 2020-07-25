import React from 'react';
import { content } from '../assets/strings.json';

class AboutMe extends React.Component {

	render() {
		return (
			<div className="">
				<img src={require('../assets/myPhoto.jpg')} alt="me" className="w-1/4 m-auto rounded-full" />
				<div className="my-name text-2xl text-center">{content.name}</div>
				<div className="personal-summary text-center">{content.personal}</div>
				<blockquote className="mission-statement text-xl text-indent">{content.mission}</blockquote>
			</div>
		);
	}
}


export default AboutMe;

