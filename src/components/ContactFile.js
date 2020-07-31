import React from 'react';
import strings from '../assets/strings';

class ContactFile extends React.Component {
	contactMethods = () => {
		return (
			strings.content.contactmethods.map(
				(contactmethod, index) => {
					if (index === 5) {
						return false;
					}
					return (
						<div 
							key={index} 
							className="flex flex-row mr-4">
							<img 
								className="h-8 mr-1" 
								src={contactmethod.logo} alt={contactmethod.alt} 
								/>
							<div 
								className="" 
								dangerouslySetInnerHTML={{__html: contactmethod.noUserInputText}}
								/>
						</div>
					);
				}
			)
		);
	}

	render() {
		return (
			<div className="flex flex-row justify-center">
					{this.contactMethods()}
			</div>
		);
	}
}

export default ContactFile;

