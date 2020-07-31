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
        return <meter className="w-2/12" min="0" max="100" low="35" high="70" optimum="100" value={level}></meter>;
    }

    hobbyItems = (list) => {
        return list.map(
            (listitem, index) => {
                return (
                    <div key={index} className="flex flex-row p-4">					
              		    <img className="h-12" src={listitem.image} alt={listitem.name} />
						<div className="text-center px-2 self-center"><span>{listitem.name}</span></div>
                    </div>
                );
            }
        );
    }

	render() {
		return (
			<div className="flex flex-row flex-auto">
				<div className="w-4/12 flex flex-col">
					<h2 className="underline text-3xl text-center">{(strings.content.softskills).toUpperCase()}</h2>
					<ul>
						{this.simpleSkillItems(strings.content.softskillslist)}
					</ul>
				</div>
				<div className="w-6/12 flex flex-col">
					<h2 className="underline text-3xl text-center">{(strings.content.hardskills).toUpperCase()}</h2>
					<ul className="md:table ">
						{this.complexeSkillItems(strings.content.hardskillslist)}
					</ul>
				</div>
				<div className="w-2/12 flex flex-col">
					<h2 className="underline text-3xl text-center">{(strings.content.hobbies).toUpperCase()}</h2>
					<div className="flex flex-col content-center">
						{this.hobbyItems(strings.content.hobbieslist)}
					</div>
				</div>
			</div>
		);
	}
}

export default Skills;

