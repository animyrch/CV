import React from 'react';
import TimelineElement from './TimelineElement';
import strings from '../assets/strings';

class Education extends React.Component {

	render() {
		return (
        <div>
            <h2 className="page-title underline text-3xl text-center">{strings.content.education}</h2>
            <div className="flex">
                <ul>
                    <div className="border-solid border-l border-gray-700 mx-3">
                    {
                    strings.content.degrees.map(
                        (degree, index) => 
                            <TimelineElement element={degree} key={index} />
                        )
                    }
                    </div>
                </ul>
            </div>
        </div>
		);
	}
}

export default Education;

