import React from 'react';
import Seat from './Seat';
import './Main.css'

interface SectionProps {
  name: string;
  rows: number;
  seatsPerRow: number;
  selectedSeats: string[];
  onSelectSeat: (seatId: string) => void;
}

const Section: React.FC<SectionProps> = ({ name, rows, seatsPerRow, selectedSeats, onSelectSeat }) => {
  return (
    <div className="section">
      <h3>
        {name} Section ({rows}x{seatsPerRow})
      </h3>
      <hr />
      <div className="seat-grid">
        {[...Array(rows)].map((_, rowIndex) => (
          <div key={rowIndex} className="seat-row">
            {Array.from({ length: seatsPerRow }).map((_, seatIndex) => {
              const seatId = `${name}-${rowIndex + 1}-${seatIndex + 1}`;
              return (
                <Seat
                  key={seatId}
                  seatId={seatId}
                  isBooked={selectedSeats.includes(seatId)}
                  onSelectSeat={onSelectSeat}
                />
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section;
