import React from 'react';
import TimelineElement from './TimelineElement';
import { content } from '../assets/strings.json';

class WorkExperience extends React.Component {

	render() {
		return (
        <div>
            <h1 className="page-title underline text-3xl text-center">{content.workexperience}</h1>
            <div className="flex">
                <ul>
                    <div className="border-solid border-l border-gray-700 mx-3">
                    {
                    content.positions.map(
                        (position, index) => 
                            <TimelineElement element={position} key={index} />
                        )
                    }
                    </div>
                </ul>
                
            </div>
        </div>
		);
	}
}

export default WorkExperience;

