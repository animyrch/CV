import React from 'react';
import strings from '../assets/strings';

class AboutMe extends React.Component {
	
	componentDidMount() {
		window.scrollTo(0, 0);
	}

	render() {
		return (
      <div className="px-8 xl:flex xl:flex-col xl:pt-32 xl:mx-24">
        <div className="xl:flex xl:flex-row">  
          <img 
            src={strings.content.myphoto.image} 
            alt={strings.content.myphoto.alt} 
            className="mt-3 w-2/4 md:w-3/12 m-auto rounded-full xl:w-3/12 xl:ml-0 xl:flex-grow-0 xl:m-10" 
            />
          <div className="flex flex-col text-center xl:text-left xl:leading-loose xl:self-center"> 
            <div className="my-name text-3xl">{strings.content.name}</div>
            <div className="my-title text-2xl">{strings.content.title}</div>
            <div className="personal-summary pb-4">{strings.content.personal}</div>
          </div>
        </div>
				<div className="quote">“</div>
				<div className="mission-statement text-xl text-indent" dangerouslySetInnerHTML={{__html: strings.content.mission}} />
				<div className="quote text-right">”</div>
			</div>
		);
	}
}


export default AboutMe;

