import React from 'react';
import TimelineElement from './TimelineElement';
import strings from '../assets/strings';

class WorkExperience extends React.Component {
	
	componentDidMount() {
		window.scrollTo(0, 0);
    }
    
	render() {
		return (
      <div className="xl:px-8 xl:pt-32 xl:mx-24">
            <h2 className="page-title underline text-3xl text-center">{strings.content.workexperience}</h2>
            <div className="flex">
                <ul>
                    <div className="border-solid border-l border-gray-700 mx-3">
                    {
                    strings.content.positions.map(
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

