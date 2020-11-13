import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types';
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
import PageNotFound from './components/common/PageNotFound';
import * as navigationActions from './redux/actions/navigationActions';

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			contactOpen: false
		};
	}

	buildBody = () => {
		return <span>
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
		this.props.actions.updatePage(page);
	}

	render() {
		return (
			<div>
				<div className="App mobile-view p-3 xl:p-0 text-lg text-gray-800">
					{this.displayContactModal()}
					<CvMenu 
						toggleContactModal={this.toggleContactModalState}
						currentPage={this.props.currentPage}
						updatePage={this.updatePage}
					/>
					<Switch>
						<Route exact={true} path="/"><AboutMe /></Route>
						<Route path="/me"><AboutMe /></Route>
						<Route path="/skills"><Skills /></Route>
						<Route path="/education"><Education /></Route>
						<Route path="/work"><WorkExperience /></Route>
						<Route><PageNotFound /></Route>
					</Switch>
					<CvFooter
						toggleContactModal={this.toggleContactModalState}
						currentPage={this.props.currentPage}
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
		);
	}
}

App.propTypes = {
	currentPage: PropTypes.string
};

function mapStateToProps (state){
	return {
		currentPage: state.navigationReducer.currentPage || window.location.pathname.replace('/', '')
	};
}

function mapDispatchToProps(dispatch) {
	return {
		// updatePage: page => dispatch(navigationActions.updatePage(page))
		actions: bindActionCreators(navigationActions, dispatch)
	};
}

// const mapDispatchToProps = {
// 	updatePage: navigationActions.updatePage
// };

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
