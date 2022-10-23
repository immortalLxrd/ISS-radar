import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import cl from "./Map.module.scss";

export const Map = ({ apiKey, position }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: apiKey,
  });

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
