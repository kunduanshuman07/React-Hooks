import { useEffect, useState } from "react";
const url = "https://course-api.com/react-tours-project";
const App = () => {
  const [tours, setTours] = useState([]);
  async function deleteTour(e, id) {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url);
      const tours = await response.json();
      setTours(tours);
    }
    fetchData();
  }, []);
  return (
    <main>
      <h2>Our Tours</h2>
      <div className="tours">
        {tours.length === 0 ? (
          <p>Loading...</p>
        ) : (
          tours.map((tour) => (
            <div className="single-tour" key={tour.id}>
              <img src={tour.image} alt={tour.name} className="img" />
              <h4 className="">{tour.name}</h4>
              <h4 className="tour-price">${tour.price}.00</h4>
              <h4 className="tour-info">{tour.info}</h4>
              <button
                className="delete-btn"
                onClick={(e) => deleteTour(e, tour.id)}
              >
                Not interested
              </button>
            </div>
          ))
        )}
      </div>
    </main>
  );
};

export default App;
