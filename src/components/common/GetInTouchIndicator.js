import React from 'react';
import strings from '../../assets/strings';
import PropTypes from 'prop-types';

class GetInTouchIndicator extends React.Component {

  render() {
    return (
    <div className={"hidden xl:block fixed z-50 w-40 h-40 transform rotate-45 bg-teal-700 ml-8 rounded " + this.props.mt}>
      <span className="transform ml-10 mt-20 text-white text-xl inline-block -rotate-45 hover:text-indigo-200">{strings.navigation.contact.text}</span>
    </div>
    );
  }
}

GetInTouchIndicator.propTypes = {
  mt: PropTypes.string
}

export default GetInTouchIndicator;
