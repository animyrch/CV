import React from 'react';
import strings from '../assets/strings';
import PropTypes from 'prop-types';
import GetInTouchIndicator from './GetInTouchIndicator';

class Contact extends React.Component {
	
	componentDidMount() {
		window.scrollTo(0, 0);
	}

	contactMethods = () => {
		return (
			strings.content.contactmethods.map(
				(contactmethod, index) => {
					return (
						<div 
							key={index} 
							className="pr-3 pt-3 pb-3 flex">
							<img 
                className="inline-block w-auto m-auto h-10"
								src={contactmethod.logo} alt={contactmethod.alt} 
								/>
							<div 
								className="inline-block pl-4 w-11/12" 
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
		<div 
			id="popup" 
			className="overlay fixed bottom-0 left-0 right-0 top-0 w-full m-h-screen z-40 bg-black bg-opacity-25 overflow-scroll " 
			onClick={this.props.toggleContactModal.bind(this)} 
			>
      <GetInTouchIndicator mt="mt-80"/>
			<div 
				className="popup absolute h-auto mx-auto left-0 right-0 p-2 mt-20 bg-white border border-solid border-gray-800 w-11/12 shadow-lg z-50 xl:m-0 xl:w-4/12"
				>
				<div>
					<button
						className="flex justify-end -mt-4 opacity-80 text-4xl font-medium xl:hidden"
						>
						&times;
					</button>
					{this.contactMethods()}
				</div>
			</div>
		</div>
		);
	}
}

Contact.propTypes = {
	toggleContactModal: PropTypes.func.isRequired
}

export default Contact;

