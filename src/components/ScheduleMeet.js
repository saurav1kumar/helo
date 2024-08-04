import React from 'react';
import PropTypes from 'prop-types';

const ScheduleMeet = ({ onSchedule }) => {
  return (
    <button onClick={onSchedule} className="schedule-meet-btn">
      Schedule Meet
    </button>
  );
};

ScheduleMeet.propTypes = {
  onSchedule: PropTypes.func.isRequired,
};

export default ScheduleMeet;
