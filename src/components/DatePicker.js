import React from 'react';
import PropTypes from 'prop-types';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DatePicker = ({ selectedDate, onDateChange }) => {
  return (
    <ReactDatePicker selected={selectedDate} onChange={onDateChange} />
  );
};

DatePicker.propTypes = {
  selectedDate: PropTypes.instanceOf(Date).isRequired,
  onDateChange: PropTypes.func.isRequired,
};

export default DatePicker;
