import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment-timezone';

const TimezoneItem = ({ timezone, onRemove }) => {
  const time = moment().tz(timezone).format('HH:mm');

  return (
    <div className="timezone-item">
      <span>{timezone}: {time}</span>
      <button onClick={onRemove} className="remove-btn">Remove</button>
    </div>
  );
};

TimezoneItem.propTypes = {
  timezone: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default TimezoneItem;
