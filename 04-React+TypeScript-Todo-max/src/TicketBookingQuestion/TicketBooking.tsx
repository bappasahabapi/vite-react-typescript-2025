import React, { useState } from 'react';
import './Main.css';
import Section from './Section';

interface SectionData {
  name: string;
  rows: number;
  seatsPerRow: number;
}

const sections: SectionData[] = [
  { name: "VIP", rows: 5, seatsPerRow: 5 },
  { name: "General", rows: 6, seatsPerRow: 6 },
  { name: "Economy", rows: 8, seatsPerRow: 8 },
];

const TicketBooking: React.FC = () => {
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  const [showResults, setShowResults] = useState<string>('No seat selected');

  const toggleSeat = (seat: string) => {
    setSelectedSeats(prev => {
      if (prev.includes(seat)) {
        return prev.filter(s => s !== seat); // Remove if already selected
      }
      if (prev.length < 5) {
        return [...prev, seat]; // Add if less than 5 seats are selected
      }
      alert("You can only book a maximum of 5 seats.");
      return prev;
    });
  };

  const confirmBooking = () => {
    if (selectedSeats.length > 0) {
      setShowResults(`Seats booked: ${selectedSeats.join(", ")}`);
    } else {
      alert("No seats selected.");
    }
  };

  return (
    <div className="app">
      <h3>Selected Seat: <span style={{ color: 'peru' }}>{showResults}</span></h3>
      {sections.map(({ name, rows, seatsPerRow }) => (
        <Section
          key={name}
          name={name}
          rows={rows}
          seatsPerRow={seatsPerRow}
          selectedSeats={selectedSeats}
          onSelectSeat={toggleSeat}
        />
      ))}
      <button onClick={confirmBooking} className="confirm-button">
        Confirm Booking
      </button>
    </div>
  );
};

export default TicketBooking;
