import React from 'react';
import PropTypes from 'prop-types';

const Slider = ({ time, onTimeChange }) => {
  const handleChange = (event) => {
    onTimeChange(event.target.value);
  };

  return (
    <input
      type="range"
      min="0"
      max="24"
      value={time}
      onChange={handleChange}
      className="slider"
    />
  );
};

Slider.propTypes = {
  time: PropTypes.number.isRequired,
  onTimeChange: PropTypes.func.isRequired,
};

export default Slider;
