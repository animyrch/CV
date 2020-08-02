import React from 'react';
import SectionTitleFile from './SectionTitleFile';
import strings from '../assets/strings';

class MissionFile extends React.Component {
	render() {
		return (
			<div className="">
				<SectionTitleFile title={strings.content.missionTitle} />
				<div className="mission-statement"  dangerouslySetInnerHTML={{__html: strings.content.mission}} />
			</div>
		);
	}
}

export default MissionFile;

