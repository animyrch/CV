import React from 'react';
import SectionTitleFile from './SectionTitleFile';
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
                    <div className="pt-6 table-row leading-none" key={index}>
                      <li className="table-cell px-4 list-disc ml-4 text-right" dangerouslySetInnerHTML={{__html: listitem.noUserInputText}}></li>
                      <p className="styled table-cell align-middle text-left">
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
                    <div key={index} className="flex flex-row p-1">					
						<img className="h-8" src={listitem.image} alt={listitem.name} />
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
					<SectionTitleFile title={strings.content.softskills} />		
					<ul>
						{this.simpleSkillItems(strings.content.softskillslist)}
					</ul>
				</div>
				<div className="w-6/12 flex flex-col">
					<SectionTitleFile title={strings.content.hardskills} />
					<ul className="table ">
						{this.complexeSkillItems(strings.content.hardskillslist)}
					</ul>
				</div>
				<div className="w-2/12 flex flex-col">
					<SectionTitleFile title={strings.content.hobbies} />
					<div className="flex flex-col content-center">
						{this.hobbyItems(strings.content.hobbieslist)}
					</div>
				</div>
			</div>
		);
	}
}

export default Skills;

