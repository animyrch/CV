import React from 'react';
import TimelineElement from './TimelineElement';
import { content } from '../assets/strings.json';

class Education extends React.Component {

	render() {
		return (
        <div>
            <h1 className="page-title underline text-3xl text-center">{content.education}</h1>
            <div className="flex">
                <ul>
                    <div className="border-solid border-l border-gray-700 mx-3">
                    {
                    content.degrees.map(
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

