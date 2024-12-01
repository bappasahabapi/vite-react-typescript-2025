import './Main.css'

interface SeatProps {
  seatId: string;
  isBooked: boolean;
  onSelectSeat: (seatId: string) => void;
}

const Seat: React.FC<SeatProps> = ({ seatId, isBooked, onSelectSeat }) => {
  return (
    <div
      key={seatId}
      className={`seat ${isBooked ? 'booked' : ''}`}
      onClick={() => onSelectSeat(seatId)}
    >
      {seatId+1}
    </div>
  );
};

export default Seat;
