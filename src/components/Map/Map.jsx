import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { useSelector } from "react-redux";
import cl from "./Map.module.scss";

export const Map = ({ apiKey }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: apiKey,
  });

  const position = useSelector((state) => state.position);
  if (!isLoaded) return <div>Loading...</div>;
  return <MapComponent position={position} />;
};

function MapComponent({ position }) {
  return (
    <div className={cl.container}>
      <GoogleMap zoom={3} center={position} mapContainerClassName={cl.map}>
        <Marker position={position} />
      </GoogleMap>
    </div>
  );
}
