import React from 'react';
import strings from '../assets/strings';

class Contact extends React.Component {
	
	componentDidMount() {
		window.scrollTo(0, 0);
	}

	render() {
		return (
		<div id="popup2" className="overlay absolute top-0 bottom-0 left-0 right-0  w-full h-full bg-black bg-opacity-25 z-50"> {/* opacity-0 hidden -> target opacity-100 visible */}
			<a class="cancel absolute w-full h-full" href="#"></a>
			<div class="popup relative m-auto p-20 bg-white border border-solid border-gray-800 w-11/12 shadow-lg">
				<h2>What the what?</h2>
				<a class="close absolute w-1 h-1 top-0 right-0 pr-10 opacity-80 text-4xl font-medium" href="#">&times;</a> {/* transition all 200ms */}
				<div class="content">
					<p>Click outside the popup to close.</p>
				</div>
			</div>
		</div>
		);
	}
}


export default Contact;

