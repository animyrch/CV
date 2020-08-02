import React from 'react';
import TimelineElementFile from './TimelineElementFile';
import SectionTitleFile from './SectionTitleFile';
import strings from '../assets/strings';

class WorkExperienceFile extends React.Component {
	render() {
		return (
        <div>
			<SectionTitleFile title={strings.content.workexperience} />
            <div className="flex">
                <ul>
                    <div className="border-solid border-l border-gray-700 ml-1">
                    {
                    strings.content.positions.map(
                        (position, index) =>
							 <TimelineElementFile key={index} element={position}/>
					)
                    }
                    </div>
                </ul>
                
            </div>
        </div>
		);
	}
}

export default WorkExperienceFile;

