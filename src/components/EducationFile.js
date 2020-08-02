import React from 'react';
import TimelineElementFile from './TimelineElementFile';
import SectionTitleFile from './SectionTitleFile';
import strings from '../assets/strings';

class EducationFile extends React.Component {
	render() {
		return (
        <div>
			<SectionTitleFile title={strings.content.education} />
            <div className="flex">
                <ul>
                    <div className="border-solid border-l border-gray-700 ml-1">
                    {
                    strings.content.degrees.map(
                        (degree, index) => 
                            <TimelineElementFile element={degree} key={index} />
                        )
                    }
                    </div>
                </ul>
            </div>
        </div>
		);
	}
}

export default EducationFile;

