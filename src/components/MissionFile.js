import React from 'react';
import strings from '../assets/strings';

class MissionFile extends React.Component {
	render() {
		return (
			<div className="">
				<div className="underline text-4xl">{(strings.content.missionTitle).toUpperCase()}</div>
				<div className="mission-statement"  dangerouslySetInnerHTML={{__html: strings.content.mission}} />
			</div>
		);
	}
}

export default MissionFile;

