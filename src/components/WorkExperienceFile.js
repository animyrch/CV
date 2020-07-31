import React from 'react';
import TimelineElementFile from './TimelineElementFile';
import strings from '../assets/strings';

class WorkExperienceFile extends React.Component {
	render() {
		return (
        <div>
            <h2 className="underline text-4xl">{(strings.content.workexperience).toUpperCase()}</h2>
            <div className="flex">
                <ul>
                    <div className="border-solid border-l border-gray-700 ml-2">
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

