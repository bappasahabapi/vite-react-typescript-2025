import React, { useState } from "react";
import './ticket.css'


interface Section {
  name: string;
  rows: number;
  seatsPerRow: number;
}

const sections: Section[] = [
  { name: "VIP", rows: 5, seatsPerRow: 5 },
  { name: "General", rows: 6, seatsPerRow: 6 },
  { name: "Economy", rows: 8, seatsPerRow: 8 },
];

const TicketBooking: React.FC = () => {
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  const [showResults,setShowResults]=useState<string>('No seat selected')

  const toggleSeat = (seat: string) => {
    setSelectedSeats((prev) => {
      if (prev.includes(seat)) {
        return prev.filter((s) => s !== seat); // Remove if already selected
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
      // alert(`Seats booked: ${selectedSeats.join(", ")}`);
      setShowResults(`Seats booked: ${selectedSeats.join(", ")}`)
    } else {
      alert("No seats selected.");
      // setShowResults(`No seats selected`)
    }
  };

  return (
    <div className="app">
      <h3>Selected Seat: <span style={{color:'peru'}}> {showResults}</span></h3>
      <button onClick={confirmBooking} className="confirm-button">
        Confirm Booking
      </button>
      {
      sections.map(({ name, rows, seatsPerRow }) => (
        <div key={name} className="section">
          <h3>
            {name} Section ({rows}x{seatsPerRow})
          </h3>
          <hr />
          <div className="seat-grid">
           {
            //for rows part
            [...Array(rows)].map((rows,rowIndex)=>(
              <>
              <div key={rowIndex} className="seat-row">
               
                {
                  //seat per rows
                  Array.from({length:seatsPerRow}).map((_,seatIndex)=>{
                    const seatId =`${name}-${rowIndex+1}-${seatIndex+1}`;
                    
                    return (
                      <div
                      key={seatId}
                      className={`seat ${
                        selectedSeats.includes(seatId) ? "booked" : ""
                      }`}
                      onClick={() => toggleSeat(seatId)}
                      >
                        {seatIndex + 1}
                      </div>
                    );
                  })
                }

              </div>
                </>
            ))
           }
          
          </div>
        </div>
      ))}
      {/* <button onClick={confirmBooking} className="confirm-button">
        Confirm Booking
      </button> */}
    </div>
  );
};

export default TicketBooking;
