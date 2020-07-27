import React from 'react';
import strings from '../assets/strings';

class Skills extends React.Component {
	
	componentDidMount() {
		window.scrollTo(0, 0)
    }
    
    simpleSkillItems = (list) => {
        return list.map(
            (listitem, index) => {
                return <li className="list-disc ml-4" key={index} dangerouslySetInnerHTML={{__html: listitem.noUserInputText}}></li>;
            }
        );
    }

    complexeSkillItems = (list) => {
        return list.map(
            (listitem, index) => {
                return (
                    <div className="pt-6 md:table-row" key={index}>
                      <li className="md:table-cell md:px-4 list-disc ml-4 md:text-right" dangerouslySetInnerHTML={{__html: listitem.noUserInputText}}></li>
                      <p className="styled md:w-1/2 md:table-cell md:align-middle md:text-left">
                            {this.skillMeter(listitem.level)}
                        </p>
                    </div>
                );
            }
        );
    }

    skillMeter = (level) => {
        return <meter className="md:w-2/5" min="0" max="100" low="35" high="70" optimum="100" value={level}></meter>;
    }

    hobbyItems = (list) => {
        return list.map(
            (listitem, index) => {
                return (
                    <div key={index} className="">
                        <div className="text-center">{listitem.name}</div>
              			    <img className="w-2/3 md:w-1/4 m-auto" src={listitem.image} alt={listitem.name} />
                    </div>
                );
            }
        );
    }

	render() {
		return (
			<div>
                <h2 className="page-title underline text-3xl text-center">{strings.content.softskills}</h2>
                <ul>
                    {this.simpleSkillItems(strings.content.softskillslist)}
                </ul>
                <h2 className="page-title underline text-3xl text-center">{strings.content.hardskills}</h2>
        <ul className="md:table ">
                    {this.complexeSkillItems(strings.content.hardskillslist)}
                </ul>
                <h2 className="page-title underline text-3xl text-center pt-3">{strings.content.hobbies}</h2>
                <div className="flex content-center">
                    {this.hobbyItems(strings.content.hobbieslist)}
                </div>
			</div>
		);
	}
}

export default Skills;

