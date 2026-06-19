import { useState } from "react";

function BookingForm() {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [travelDate, setTravelDate] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setMessage(`
🎉 Ticket Booked Successfully!

✈️ Route: ${source} → ${destination}

📅 Travel Date: ${travelDate}

Have a Safe Journey!
    `);

    setSource("");
    setDestination("");
    setTravelDate("");
  };

  return (
    <div>
      <h2 className="booking-title">
        Flight Reservation
      </h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="✈️ Source City"
          value={source}
          onChange={(e) => setSource(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="📍 Destination City"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          required
        />

        <input
          type="date"
          value={travelDate}
          onChange={(e) => setTravelDate(e.target.value)}
          required
        />

        <button type="submit">
          Book Flight ✈️
        </button>
      </form>

      {message && (
        <div className="success-card">
          <h3>{message}</h3>
        </div>
      )}
    </div>
  );
}

export default BookingForm;