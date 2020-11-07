import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CvMenu from './components/CvMenu';
import AboutMe from './components/AboutMe';
import AboutMeFile from './components/AboutMeFile';
import MissionFile from './components/MissionFile';
import WorkExperience from './components/WorkExperience';
import WorkExperienceFile from './components/WorkExperienceFile';
import Education from './components/Education';
import EducationFile from './components/EducationFile';
import Skills from './components/Skills';
import SkillsFile from './components/SkillsFile';
import CvFooter from './components/CvFooter';
import Contact from './components/Contact';
import ContactFile from './components/ContactFile';
import FileSeparator from './components/FileSeparator';

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
		return <span>
				<Switch>
					<Route exact={true} path="/" component={AboutMe} />
					<Route path="/About Me" component={AboutMe} />
					<Route path="/Skills" component={Skills} />
					<Route path="/Education" component={Education} />
					<Route path="/Professional Experience" component={WorkExperience} />
					<Route path="*" render={() => 
						<div>You have just discovered my secret talents</div>
					} />
				</Switch>
			</span>;
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
			<Router>
				<div>
					<div className="App mobile-view p-3 xl:p-0 text-lg text-gray-800">
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
				
					<div className="App file-view p-3 pb-0 pl-1 text-gray-800 text-sm leading-tight">
						<AboutMeFile />
						<ContactFile />
						<FileSeparator />
						<MissionFile />
						<FileSeparator />
						<WorkExperienceFile />
						<FileSeparator />
						<EducationFile />
						<FileSeparator />
						<SkillsFile />
					</div>
				</div>	
			</Router>
		);
	}
}

export default App;
