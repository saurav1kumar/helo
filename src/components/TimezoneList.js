import React from 'react';
import PropTypes from 'prop-types';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import TimezoneItem from './TimezoneItem';

const TimezoneList = ({ timezones, onRemove, onReorder }) => {
  const handleDragEnd = (result) => {
    if (!result.destination) return;
    onReorder(result.source.index, result.destination.index);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="timezones">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {timezones.map((timezone, index) => (
              <Draggable key={timezone} draggableId={timezone} index={index}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <TimezoneItem
                      timezone={timezone}
                      onRemove={() => onRemove(index)}
                    />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

TimezoneList.propTypes = {
  timezones: PropTypes.arrayOf(PropTypes.string).isRequired,
  onRemove: PropTypes.func.isRequired,
  onReorder: PropTypes.func.isRequired,
};

export default TimezoneList;
