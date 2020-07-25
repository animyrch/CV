import React from 'react';
import CvMenu from './components/CvMenu';
import AboutMe from './components/AboutMe';
import CvFooter from './components/CvFooter';

class App extends React.Component {

	render() {
		return (
			<div className="App p-3 text-lg">
				<CvMenu />
				<AboutMe />
				<CvFooter page={1} />
			</div>
		);
	}
}

export default App;
