import React, { useState } from 'react';
import Slider from './components/Slider';
import TimezoneList from './components/TimezoneList';
import DatePicker from './components/DatePicker';
import DarkModeToggle from './components/DarkModeToggle';
import ScheduleMeet from './components/ScheduleMeet';
import moment from 'moment-timezone';
import './index.css';

const App = () => {
  const [time, setTime] = useState(12);
  const [timezones, setTimezones] = useState(['UTC', 'Asia/Kolkata']);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleTimeChange = (newTime) => {
    setTime(newTime);
  };

  const handleAddTimezone = (timezone) => {
    setTimezones([...timezones, timezone]);
  };

  const handleRemoveTimezone = (index) => {
    const newTimezones = timezones.filter((_, i) => i !== index);
    setTimezones(newTimezones);
  };

  const handleReorderTimezone = (sourceIndex, destinationIndex) => {
    const newTimezones = Array.from(timezones);
    const [removed] = newTimezones.splice(sourceIndex, 1);
    newTimezones.splice(destinationIndex, 0, removed);
    setTimezones(newTimezones);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleToggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleScheduleMeet = () => {
    const meetingTime = moment(selectedDate).add(time, 'hours').toISOString();
    const url = `https://calendar.google.com/calendar/u/0/r/eventedit?dates=${meetingTime}/${meetingTime}&text=Scheduled%20Meeting`;
    window.open(url, '_blank');
  };

  return (
    <div className={`App ${isDarkMode ? 'dark-mode' : ''}`}>
      <h1>Timezone Converter</h1>
      <Slider time={time} onTimeChange={handleTimeChange} />
      <TimezoneList
        timezones={timezones}
        onRemove={handleRemoveTimezone}
        onReorder={handleReorderTimezone}
      />
      <DatePicker selectedDate={selectedDate} onDateChange={handleDateChange} />
      <button onClick={() => handleAddTimezone('America/New_York')}>Add New York</button>
      <DarkModeToggle isDarkMode={isDarkMode} onToggle={handleToggleDarkMode} />
      <ScheduleMeet onSchedule={handleScheduleMeet} />
    </div>
  );
};

export default App;
