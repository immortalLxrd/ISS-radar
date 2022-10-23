import React from "react";
import "./styles/App.scss";
import { useFetchWithInterval } from "./hooks/useFetchWithInterval";
import { MapComponent } from "./components/MapComponent/MapComponent";

const GOOGLE_MAPS_API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
const URL = "http://api.open-notify.org/iss-now.json";

function App() {
  const [data, loading] = useFetchWithInterval(URL);
  const position = data
    ? {
        lat: Number(data.iss_position.latitude),
        lng: Number(data.iss_position.longitude),
      }
    : { lat: 0, lng: 0 };

  return (
    <div className="App">
      <div className="_container">
        {loading ? (
          <div>loading...</div>
        ) : (
          <ul>
            <li>latitude: {position.lat}</li>
            <li>longitude: {position.lng}</li>
          </ul>
        )}
        <MapComponent apiKey={GOOGLE_MAPS_API_KEY} position={position} />
      </div>
    </div>
  );
}

export default App;
