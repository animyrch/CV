import React from 'react';
import strings from '../assets/strings';

class AboutMeFile extends React.Component {
	render() {
		return (
			<div className="flex">
				<div className="flex flex-auto flex-col self-center text-center leading-relaxed">
				<div className="my-name text-5xl text-center"><b>{strings.content.name}</b></div>
					<div className="my-title text-4xl">{strings.content.title}</div>
					<div className="personal-summary text-center pb-4">{strings.content.personal}</div>
				</div>
				<img 
					src={strings.content.myphoto.image} 
					alt={strings.content.myphoto.alt} 
					className="h-48 mr-8 rounded-full" 
					/>
			</div>
		);
	}
}


export default AboutMeFile;

