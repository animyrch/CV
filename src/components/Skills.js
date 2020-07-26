import React from 'react';
import strings from '../assets/strings';

class Skills extends React.Component {

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
                    <div className="pt-6" key={index}>
                        <li className="list-disc ml-4" dangerouslySetInnerHTML={{__html: listitem.noUserInputText}}></li>
                        <p className="styled">
                            {this.skillMeter(listitem.level)}
                        </p>
                    </div>
                );
            }
        );
    }

    skillMeter = (level) => {
        return <meter min="0" max="100" low="35" high="70" optimum="100" value={level}></meter>;
    }

    hobbyItems = (list) => {
        return list.map(
            (listitem, index) => {
                return (
                    <div key={index} className="inline-block w-1/4">
                        <div className="ml-4 text-center">{listitem.name}</div>
                        <img className="w-2/3 m-auto" src={listitem.image} alt={listitem.name} />
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
                <ul>
                    {this.complexeSkillItems(strings.content.hardskillslist)}
                </ul>
                <h2 className="page-title underline text-3xl text-center pt-3">{strings.content.hobbies}</h2>
                <div>
                    {this.hobbyItems(strings.content.hobbieslist)}
                </div>
			</div>
		);
	}
}

export default Skills;

