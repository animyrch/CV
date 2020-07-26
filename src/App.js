import React from 'react';
import CvMenu from './components/CvMenu';
import AboutMe from './components/AboutMe';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import Skills from './components/Skills';
import CvFooter from './components/CvFooter';

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			page: 1
		};
	}

	updatePage = (page) => {
		if (page !== this.state.page) {
			this.setState({ page });
		}
	}

	buildBody = () => {
		console.log(this.state.page);
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

	render() {
		return (
			<div className="App p-3 text-lg text-gray-800">
				<CvMenu updatePage={this.updatePage} />
				{this.buildBody()}
				<CvFooter page={this.state.page}/>
			</div>
		);
	}
}

export default App;
