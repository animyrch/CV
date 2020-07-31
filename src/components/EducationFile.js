import React from 'react';
import TimelineElementFile from './TimelineElementFile';
import strings from '../assets/strings';

class EducationFile extends React.Component {
	render() {
		return (
        <div>
            <h2 className="underline text-4xl">{(strings.content.education).toUpperCase()}</h2>
            <div className="flex">
                <ul>
                    <div className="border-solid border-l border-gray-700 ml-2">
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

