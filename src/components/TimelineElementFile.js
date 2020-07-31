import React from 'react';
import PropTypes from 'prop-types';
import strings from '../assets/strings';

class TimelineElementFile extends React.Component {

    generateSubdetail = (subdetail, index) => {
        return (
        <li className="list-disc ml-8 z-50" key={index}>
            <div dangerouslySetInnerHTML={{__html: subdetail.noUserInputText}}></div>
        </li>
        );
    }

    generateSubdetailsTitle = (subdetails) => {
        const hasSubdetails = subdetails.length > 0;
        if (hasSubdetails) {
            return (
                <div className="underline">{strings.content.subdetailsheader}</div>
            )
        }
    }

    generatePeriod = (element) => {
        return (
            <div>
                <span>
                    {strings.content.timelineperiodstartindicator}
                </span>
                <span className="italic">
                    {element.start}
                </span> 
                <span>
                    {strings.content.timelineperiodendindicator}
                </span>
                <span className="italic">
                    {element.end}
                </span>
            </div>
        );
    }

	render() {
		return (
        <li className="bullet bullet-file list-outside mx-4 pb-2 border-b border-gray-100">
            <div className="">
                {this.generatePeriod(this.props.element)}
            </div>
            <div className="font-bold text-2xl">{this.props.element.title}</div>
            <ul>
                {
                this.props.element.subdetails.map(
                    (subdetail, index) => this.generateSubdetail(subdetail, index)
                    )
                }
            </ul>
        </li>
		);
	}
}

TimelineElementFile.propTypes = {
    element: PropTypes.object.isRequired,
}

export default TimelineElementFile;

