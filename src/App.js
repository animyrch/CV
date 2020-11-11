import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CvMenu from './components/common/CvMenu';
import AboutMe from './components/AboutMe';
import AboutMeFile from './components/AboutMeFile';
import MissionFile from './components/MissionFile';
import WorkExperience from './components/WorkExperience';
import WorkExperienceFile from './components/WorkExperienceFile';
import Education from './components/Education';
import EducationFile from './components/EducationFile';
import Skills from './components/Skills';
import SkillsFile from './components/SkillsFile';
import CvFooter from './components/common/CvFooter';
import Contact from './components/Contact';
import ContactFile from './components/ContactFile';
import FileSeparator from './components/FileSeparator';

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			contactOpen: false,
			page: window.location.pathname.replace('/', '')
		};
	}

	buildBody = () => {
		return <span>
				<Switch>
					<Route exact={true} path="/" component={AboutMe} />
					<Route path="/me" component={AboutMe} />
					<Route path="/skills" component={Skills} />
					<Route path="/education" component={Education} />
					<Route path="/work" component={WorkExperience} />
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

	updatePage = (page) => {
		if (this.state.page !== page) {
			this.setState({page});
		}
	}

	render() {
		return (
			<Router>
				<div>
					<div className="App mobile-view p-3 xl:p-0 text-lg text-gray-800">
						{this.displayContactModal()}
						<CvMenu 
							toggleContactModal={this.toggleContactModalState}
							currentPage={this.state.page}
							updatePage={this.updatePage}
							/>
						{this.buildBody()}
						<CvFooter
							toggleContactModal={this.toggleContactModalState}
							currentPage={this.state.page}
							updatePage={this.updatePage}
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
