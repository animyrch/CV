import React from 'react';
import strings from '../assets/strings';

class AboutMe extends React.Component {

  aboutMePoints = (points) => {
    return (
      strings.content.aboutMePoints.map((point, index) => {
        return (
        <div className="pb-4"
            key={index}>              
            <img className="h-6 inline pr-4 -mt-2" alt="personal summary point marker" src={strings.content.aboutMePointMarker} />
            <div className="mission-statement text-xl text-indent inline" dangerouslySetInnerHTML={{__html: point}} />
          </div>
        );
      }
      )
    );
  }

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
            className="m-auto mt-3 w-2/4 h-full md:w-4/12 lg:w-3/12 xl:m-px xl:w-3/12 xl:ml-0 xl:flex-grow-0 " 
            />
          <div className="flex flex-col text-center xl:text-left xl:leading-loose xl:self-center">          
            <div className="my-name text-4xl md:text-5xl">{strings.content.name}</div>
            <div className="my-title text-3xl md:text-4xl"><u>{strings.content.title}</u></div>
          </div>
        </div>
        { this.aboutMePoints() }
			</div>
		);
	}
}


export default AboutMe;

