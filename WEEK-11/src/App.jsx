import BookingForm from "./components/BookingForm";

function App() {
  const airlineName = import.meta.env.VITE_AIRLINE_NAME;

  return (
    <div className="app-container">

      <div className="airplane">✈️</div>

      <div className="booking-card">
        <h1>{airlineName}</h1>

        <p className="tagline">
          Fly Beyond Boundaries ✈️
        </p>

        <BookingForm />
      </div>

    </div>
  );
}

export default App;