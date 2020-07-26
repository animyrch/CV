import React from 'react';
import PropTypes from 'prop-types';
import strings from '../assets/strings';

class TimelineElement extends React.Component {

    generateSubdetail = (subdetail, index) => {
        return (
        <li className="list-disc ml-4 z-50" key={index}>
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
        <li className="white list-outside mx-4 pb-5 border-b border-gray-400" key={this.props.key}>
            <div className="text-base">
                {this.generatePeriod(this.props.element)}
            </div>
            <div className="font-bold">{this.props.element.title}</div>
            <ul>
                {this.generateSubdetailsTitle(this.props.element.subdetails)}
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

TimelineElement.propTypes = {
    element: PropTypes.object.isRequired,
    key: PropTypes.number.isRequired
}

export default TimelineElement;

