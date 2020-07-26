import React from 'react';
import strings from '../assets/strings';

class AboutMe extends React.Component {
	
	componentDidMount() {
		window.scrollTo(0, 0);
	}

	render() {
		return (
			<div className="">
				<img src={strings.content.myphoto.image} alt={strings.content.myphoto.alt} className="w-1/4 m-auto rounded-full" />
				<div className="my-name text-2xl text-center">{strings.content.name}</div>
				<div className="personal-summary text-center">{strings.content.personal}</div>
				<blockquote className="mission-statement text-xl text-indent">{strings.content.mission}</blockquote>
			</div>
		);
	}
}


export default AboutMe;

