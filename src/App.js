import React from 'react';
import CvMenu from './components/CvMenu';
import AboutMe from './components/AboutMe';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import Skills from './components/Skills';
import CvFooter from './components/CvFooter';
import Contact from './components/Contact';

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			page: 1,
			contactOpen: false
		};
	}

	updatePage = (page) => {
		if (page !== this.state.page) {
			this.setState({ page });
		}
	}

	goToNextPage = () => {
		this.setState({page: this.state.page+1});
	}

	goToPreviousPage = () => {
		this.setState({page: this.state.page-1});
	}

	buildBody = () => {
		switch (this.state.page) {
			case 2:
				return <WorkExperience />;
			case 3:
				return <Education />;
			case 4:
				return <Skills />;
			default:
				return <AboutMe />;
		}
	}

	toggleContactModalState = () => {
		this.setState({contactOpen: !this.state.contactOpen});
	}

	displayContactModal = () => {
		if (this.state.contactOpen) {
			return (
			<Contact toggleContactModal={this.toggleContactModalState} />
			);
		}
	}

	render() {
		return (
			<div>
				<div className="App p-3 text-lg text-gray-800">
					{this.displayContactModal()}
					<CvMenu 
						updatePage={this.updatePage} 
						toggleContactModal={this.toggleContactModalState} 
						/>
					{this.buildBody()}
					<CvFooter 
						page={this.state.page} 
						goToNextPage={this.goToNextPage} 
						goToPreviousPage={this.goToPreviousPage}
						toggleContactModal={this.toggleContactModalState} 						
						/>
				</div>
			</div>
		);
	}
}

export default App;
