import React, { useState } from 'react';

interface CardProps {
  event: string;
  index: number,
  onCardClick: () => void;
}

const Card: React.FC<CardProps> = ({ event, index, onCardClick }) => {
  const [eventOccurred, setEventOccurred] = useState(false);

  const toggleEvent = () => {
    setEventOccurred(!eventOccurred);
    onCardClick(); // Invoke the callback when the card is clicked
  };

  const cardStyle: React.CSSProperties = {
    backgroundColor: eventOccurred ? 'green' : 'white',
    borderRadius: '5px',
    border: '1px solid #ccc',
    cursor: 'pointer',
  };

  return (
    <div data-testid={`grid-cell`} className={eventOccurred ? "selected" : "card"} style={cardStyle} onClick={toggleEvent}>
      <h2>{event}</h2>
    </div>
  );
};

export default Card;
