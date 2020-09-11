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
                    <div className="pt-6 table-row" key={index}>
                      <li className="table-cell px-4 list-disc ml-4 text-right" dangerouslySetInnerHTML={{__html: listitem.noUserInputText}}></li>
                      <div className="pb-1 border-t-2 shadow-md w-1/2 table-cell align-middle text-left">
                        {this.skillMeter(listitem.level)}
                      </div>
                    </div>
                );
            }
        );
    }

    skillMeter = (level) => {
      let bgcolor = "bg-green-400";
      if (level < 50) {
        bgcolor = "bg-red-400";
      } else if (level < 70) {
        bgcolor = "bg-yellow-400";
      }
      return (
        <div>
          <div style={{width: "100%"}} >
            <p style={{width: `${level}%`}} className={`text-transparent block ${bgcolor}`}>|</p>
          </div>
        </div>
      );
    }

    hobbyItems = (list) => {
        return list.map(
            (listitem, index) => {
                return (
                  <div key={index} className="">
                        <div className="text-center">{listitem.name}</div>
                    <img className="w-2/3 md:w-2/5 xl:w-4/12 m-auto" src={listitem.image} alt={listitem.name} />
                    </div>
                );
            }
        );
    }

	render() {
		return (
      <div className="xl:px-8 xl:pt-32 xl:mx-24">
                <h2 className="page-title underline text-3xl text-center">{strings.content.softskills}</h2>
                <ul className="leading-loose">
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

