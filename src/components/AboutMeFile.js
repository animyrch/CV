import React from 'react';
import strings from '../assets/strings';

class AboutMeFile extends React.Component {
	render() {
		return (
			<div className="flex">
				<div className="flex flex-auto flex-col self-center text-center leading-snug">
				<div className="my-name text-2xl text-center"><b>{strings.content.name}</b></div>
					<div className="my-title text-xl">{strings.content.title}</div>
					<div className="personal-summary text-center pb-1">{strings.content.personal}</div>
				</div>
				<img 
					src={strings.content.myphoto.image} 
					alt={strings.content.myphoto.alt} 
					className="h-20 mr-2 rounded-full" 
					/>
			</div>
		);
	}
}


export default AboutMeFile;

